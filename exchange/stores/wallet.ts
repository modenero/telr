/* Import modules. */
import { defineStore } from 'pinia'

import {
    encodePrivateKeyWif,
    entropyToMnemonic,
    mnemonicToEntropy,
} from '@nexajs/hdnode'

import {
    getAddressBalance,
    subscribeAddress,
} from '@nexajs/rostrum'

import { listUnspent } from '@nexajs/address'
import { sha256 } from '@nexajs/crypto'
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

        _tokens: null,

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

            console.log('_state._wallet', _state._wallet)

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

        tokens(_state) {
            return _state._tokens
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
            console.log('RE-CREATED WALLET', this._wallet)

            // FIXME Workaround to solve race condition.
            setTimeout(this.loadCoins, 1000)
        },

        createWallet(_entropy) {
            _createWallet.bind(this)(_entropy)

            this._wallet = new Wallet(this.mnemonic)
            console.log('NEW WALLET', this._wallet)
        },

        /**
         * Load Coins
         *
         * Retrieves all spendable UTXOs.
         */
        async loadCoins() {
            console.info('Wallet address:', this.address)
            console.info('Wallet address (1):', this.getAddress(1))
            console.info('Wallet address (2):', this.getAddress(2))
            console.info('Wallet address (3):', this.getAddress(3))

            /* Initialize locals. */
            let satoshis
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
                this._satoshis = satoshis = this.balance.confirmed + this.balance.unconfirmed
            }

            let bal

            this._balance = bal = await getAddressBalance(this.getAddress(1))
                .catch(err => console.error(err))
            console.log('\n  Address balance (1):\n', this.balance, bal)
            this._satoshis = satoshis = satoshis + bal.confirmed + bal.unconfirmed

            this._balance = bal = await getAddressBalance(this.getAddress(2))
                .catch(err => console.error(err))
            console.log('\n  Address balance (2):\n', this.balance, bal)
            this._satoshis = satoshis = satoshis + bal.confirmed + bal.unconfirmed

            this._balance = bal = await getAddressBalance(this.getAddress(3))
                .catch(err => console.error(err))
            console.log('\n  Address balance (3):\n', this.balance, bal)
            this._satoshis = satoshis = satoshis + bal.confirmed + bal.unconfirmed

            // Fetch all unspent transaction outputs for the temporary in-browser wallet.
            unspent = await listUnspent(this.address)
                .catch(err => console.error(err))
            console.log('\n  Unspent outputs:\n', unspent)

            /* Validate unspent outputs. */
            if (unspent.length === 0) {
                return console.error('There are NO unspent outputs available.')
            }

            /* Retrieve coins. */
            this._coins = unspent
                .filter(_u => _u.isToken === false)
                .filter(_u => this._spentCoins.includes(_u.outpoint) === false)
                .map(_unspent => {
                    console.log('UNSPENT COINS **DEBUG**', _unspent)
                    const outpoint = _unspent.outpoint
                    const satoshis = _unspent.satoshis

                    return {
                        outpoint,
                        satoshis,
                        wif: this._wif,
                    }
                })
            console.log('\n  Coins:', this.coins)

            /* Retrieve tokens. */
            this._tokens = unspent
                .filter(_u => _u.isToken === true)
                .filter(_u => this._spentCoins.includes(_u.outpoint) === false)
                .map(_unspent => {
                    console.log('UNSPENT TOKENS **DEBUG**', _unspent)
                    const outpoint = _unspent.outpoint
                    const satoshis = _unspent.satoshis
                    const tokenid = _unspent.tokenid
                    const tokens = _unspent.tokens

                    return {
                        outpoint,
                        satoshis,
                        tokenid,
                        tokens,
                        wif: this._wif,
                    }
                })
            console.log('\n  Tokens:', this.tokens)
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

        setMnemonic(_mnemonic) {
            let entropy
            let error

            try {
                /* Derive entropy. */
                entropy = mnemonicToEntropy(_mnemonic)
            } catch (err) {
                /* Set error message. */
                error = err.message
            }

            /* Validate error. */
            if (error) {
                return error
            }

            /* Set mnemonic. */
            this._mnemonic = _mnemonic

            /* Set entropy. */
            this._entropy = entropy

            /* Create wallet. */
            this.createWallet(entropy)

            /* Return entropy. */
            return this._entropy
        },

        setSatoshis(_satoshis) {
            this._satoshis = _satoshis
        },

        getAddress(_accountIdx) {
            return this._wallet.getAddress(_accountIdx)
        },

        destroy() {
            /* Reset wallet. */
            this._entropy = null
            this._wallet = null
            this._wif = null
            this._coins = null
            this._tokens = null
            this._satoshis = null

            console.info('Wallet destroyed successfully!')
        },

    },

    // persist: true,
})
