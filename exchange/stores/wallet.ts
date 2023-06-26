/* Import modules. */
import { defineStore } from 'pinia'
import { encodePrivateKeyWif } from '@nexajs/hdnode'
import { entropyToMnemonic } from '@nexajs/hdnode'
import { getAddressBalance } from '@nexajs/rostrum'
import { listUnspent } from '@nexajs/address'
import { sha256 } from '@nexajs/crypto'
import { subscribeAddress } from '@nexajs/rostrum'
import { Wallet } from '@nexajs/wallet'

import _createWallet from './wallet/create.ts'
import _depositHandler from './wallet/depositHandler.ts'
import _transfer from './wallet/transfer.ts'


/**
 * Wallet Store
 */
export const useWalletStore = defineStore('wallet', {
    state: () => ({
        MAX_OPRETURN_DATA_BYTES: 220,
        DUST_LIMIT: 546,

        /* Initialize entropy (used for HD wallet). */
        // NOTE: This is a cryptographically-secure "random" 32-byte (256-bit) value. */
        _entropy: null,

        _wallet: null,

        _wif: null,

        _coins: null,

        _spentCoins: null,

        _satoshis: null,

    }),

    getters: {
        isReady(_state) {
            return _state._entropy ? true : false
        },

        address(_state) {
            if (!_state._wallet) return null

            return _state._wallet.address
        },

        abbr(_state) {
            if (!_state._wallet) return null

            return _state._wallet.address.slice(0, 19) + '...' + _state._wallet.address.slice(-6)
        },

        mnemonic(_state) {
            if (!_state._entropy) return null

            return entropyToMnemonic(_state._entropy)
        },

        wallet(_state) {
            return _state._wallet
        },

        wif(_state) {
            return _state._wif
        },

        coins(_state) {
            return _state._coins
        },

        spentCoins(_state) {
            return _state._spentCoins
        },

        balance(_state) {
            return _state._balance
        },

        satoshis(_state) {
            return _state._satoshis
        },

        nex(_state) {
            return _state._satoshis / 100.0
        },

        mex(_state) {
            return _state._satoshis / 100000000.0
        },

    },

    actions: {
        async init() {
            console.info('Initializing wallet...')

            /* Validate spent list. */
            if (this._spentCoins === null || !Array.isArray(this._spentCoins)) {
                this._spentCoins = []
            }

            if (this._entropy === null) {
                throw new Error('Missing wallet entropy.')
            }

            if (!this.mnemonic) {
                throw new Error('Missing mnemonic (seed) phrase.')
            }

            this._wallet = new Wallet(this.mnemonic)

            // FIXME Workaround to solve race condition.
            setTimeout(this.loadCoins, 1000)
        },

        async createWallet() {
            _createWallet.bind(this)()
        },

        /**
         * Load Coins
         *
         * Retrieves all spendable UTXOs.
         */
        async loadCoins() {
            console.info('Wallet address:', this.address)

            /* Initialize locals. */
            let unspent

            /* Start monitoring address. */
            await subscribeAddress(this.address, _depositHandler.bind(this))

            /* Encode Private Key WIF. */
            this._wif = encodePrivateKeyWif({ hash: sha256 }, this._wallet.privateKey, 'mainnet')

            this._balance = await getAddressBalance(this.address)
                .catch(err => console.error(err))
            console.log('\n  Address balance:\n', this.balance)

            /* Validate balance. */
            if (this.balance) {
                /* Calculate (total) satoshis. */
                this._satoshis = this.balance.confirmed + this.balance.unconfirmed
            }

            // Fetch all unspent transaction outputs for the temporary in-browser wallet.
            unspent = await listUnspent(this.address)
                .catch(err => console.error(err))
            console.log('\n  Unspent outputs:\n', unspent)

            /* Filter out ANY tokens & spent. */
            // FIXME We should probably do something better than this, lol.
            unspent = unspent.filter(_unspent => {
                /* Initialize flag. */
                let isValid = true

                if (_unspent.value <= this.DUST_LIMIT) {
                    /* Set flag. */
                    isValid = false
                }

                if (this._spentCoins.includes(_unspent.outpointHash)) {
                    /* Set flag. */
                    isValid = false
                }

                /* Return flag. */
                return isValid
            })

            /* Validate unspent outputs. */
            if (unspent.length === 0) {
                return console.error('There are NO unspent outputs available.')
            }

            /* Build parameters. */
            this._coins = unspent.map(_unspent => {
                const outpoint = _unspent.outpointHash
                const satoshis = _unspent.value

                return {
                    outpoint,
                    satoshis,
                    wif: this._wif,
                }
            })
            console.log('\n  Coins:', this.coins)
        },

        manageSpent(_coins) {
            /* Manage coins. */
            _coins.forEach(_coin => {
                /* Add hash to spent. */
                this._spentCoins.push(_coin.outpoint)

                // TODO Add check for MAX spent (eg. 100).
            })
        },

        async transfer(_receiver, _satoshis) {
            return await _transfer.bind(this)(_receiver, _satoshis)
        },

        setEntropy(_entropy) {
            this._entropy = _entropy
        },

        setSatoshis(_satoshis) {
            this._satoshis = _satoshis
        },

        destroy() {
            /* Reset entropy. */
            this._entropy = null
            console.info('Wallet destroyed successfully!')
        },

    },

    // persist: true,
})
