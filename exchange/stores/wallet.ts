/* Import modules. */
import { defineStore } from 'pinia'

import {
    encodePrivateKeyWif,
    entropyToMnemonic,
    mnemonicToEntropy,
} from '@nexajs/hdnode'

import {
    getAddressMempool,
    subscribeAddress,
} from '@nexajs/rostrum'

import { listUnspent } from '@nexajs/address'
import { sha256 } from '@nexajs/crypto'
import { Wallet } from '@nexajs/wallet'

import _createWallet from './wallet/create.ts'
// import _transfer from './wallet/transfer.ts'


const getCoinBalance = async (_address) => {
    let balance
    let unspent

    unspent = await listUnspent(_address)
        .catch(err => console.error(err))
    console.log('UNSPENT', unspent)

    balance = unspent.reduce(
        (totalBalance, unspent) => unspent.isToken ? 0 : (totalBalance + unspent.satoshis), 0
    )

    return balance
}


/**
 * Wallet Store
 */
export const useWalletStore = defineStore('wallet', {
    state: () => ({
        /* Initialize entropy (used for HD wallet). */
        // NOTE: This is a cryptographically-secure "random" 32-byte (256-bit) value. */
        _entropy: null,

        _wallet: null,

        _wif: null,

        _coins: null,

        _tokens: null,

        _spentCoins: null,
    }),

    getters: {
        isReady(_state) {
            /* Validate entropy. */
            if (
                !this._entropy ||
                typeof this._entropy !== 'string' ||
                (this._entropy.length !== 32 && this._entropy.length !== 64)
            ) {
                return false
            }

            /* Wallet is ready. */
            return true
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
        entropy(_state) {
            return _state._entropy
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
            // return _state._balance
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
            // console.log('RE-CREATED WALLET', this._wallet)

            // FIXME Workaround to solve race condition.
            setTimeout(this.loadCoins, 1000)
        },

        createWallet(_entropy) {
            /* Validate entropy. */
            // NOTE: Expect HEX value to be 32 or 64 characters.
            if (_entropy.length !== 32 && _entropy.length !== 64) {
                console.error(_entropy, 'is NOT valid entropy.')

                _entropy = null
            }
            _createWallet.bind(this)(_entropy)

            this._wallet = new Wallet(this.mnemonic)
            console.log('NEW WALLET', this._wallet)
        },

        /**
         * Load Coins
         *
         * Retrieves all spendable UTXOs.
         */
        async loadCoins(_isReloading = false) {
            console.info('Wallet address:', this.address)
            // console.info('Wallet address (1):', this.getAddress(1))
            // console.info('Wallet address (2):', this.getAddress(2))
            // console.info('Wallet address (3):', this.getAddress(3))

            /* Initialize locals. */
            // let satoshis
            let unspent

            /* Validate coin re-loading. */
            // FIXME: What happens if we re-subscribe??
            if (_isReloading === false) {
                /* Start monitoring address. */
                await subscribeAddress(
                    this.address,
                    () => this.loadCoins.bind(this)(true),
                )
            }

            /* Encode Private Key WIF. */
            this._wif = encodePrivateKeyWif({ hash: sha256 }, this._wallet.privateKey, 'mainnet')

            // this._balance = await getCoinBalance(this.address)
            //     .catch(err => console.error(err))
            // console.log('\n  Address balance:\n', this.balance)

            /* Validate balance. */
            // if (this.balance) {
            //     /* Calculate (total) satoshis. */
            //     this._satoshis = satoshis = this.balance
            // }

            // let bal

            // this._balance = bal = await getCoinBalance(this.getAddress(1))
            //     .catch(err => console.error(err))
            // console.log('Address balance (1):', this.balance, bal)
            // this._satoshis = satoshis = satoshis + bal

            // this._balance = bal = await getCoinBalance(this.getAddress(2))
            //     .catch(err => console.error(err))
            // console.log('Address balance (2):', this.balance, bal)
            // this._satoshis = satoshis = satoshis + bal

            // this._balance = bal = await getCoinBalance(this.getAddress(3))
            //     .catch(err => console.error(err))
            // console.log('Address balance (3):', this.balance, bal)
            // this._satoshis = satoshis = satoshis + bal

            // Fetch all unspent transaction outputs for the temporary in-browser wallet.
            unspent = await listUnspent(this.address)
                .catch(err => console.error(err))
            console.log('UNSPENT', unspent)

            const mempool = await getAddressMempool(this.address)
                .catch(err => console.error(err))
            console.log('MEMPOOL', mempool)

            /* Validate unspent outputs. */
            if (unspent.length === 0) {
                return console.error('There are NO unspent outputs available.')
            }

            /* Retrieve coins. */
            this._coins = unspent
                .filter(_u => _u.isToken === false)
                .filter(_u => this._spentCoins.includes(_u.outpoint) === false)
                .map(_unspent => {
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
            return await this.wallet.send(_receiver, _satoshis)
            // return await _transfer.bind(this)(_receiver, _satoshis)
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
})
