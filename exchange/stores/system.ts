/* Import modules. */
import { defineStore } from 'pinia'

/**
 * System Store
 */
export const useSystemStore = defineStore('system', {
    state: () => ({
        /* Set constants. */
        ONE_SAT: BigInt('1'),
        ONE_NEX: BigInt('100'),
        ONE_KEX: BigInt('100000'),
        ONE_MEX: BigInt('100000000'),
        ONE_META: BigInt('1000000000000000000'),

        /* Initialize notifications. */
        _notif: {
            isShowing: false,
            icon: null,
            title: null,
            description: null,
            delay: 7000,
        },

        /**
         * Application Starts
         */
        _appStarts: 0,

        /**
         * Application Version
         */
        _appVersion: null,

        /**
         * Flags
         *
         * 1. Dark mode
         * 2. Unconfirmed transactions
         */
        _flags: null,

        /**
         * Locale
         *
         * Controls the localization language.
         * (default is english)
         */
        _locale: null,

        /**
         * Notices
         *
         * System notices that nag/remind the user of some important action or
         * information; which can be permanently disabled ("Do Not Show Again")
         * via checkbox and confirmation.
         *
         * NOTE: Unique 1-byte (hex) codes (up to 255) are used to reduce the size
         *       of this storage field.
         */
        _notices: null,

        /**
         * Tickers
         *
         * Support for multiple exchange tickers across multiple currencies.
         */
        _tickers: null,
    }),

    getters: {
        nex() {
            if (!this._tickers?.NEXA) {
                return null
            }

            return this._tickers.NEXA.quote.USD.price
        },

        usd() {
            if (!this.nex) {
                return null
            }

            return this.nex * 10**6
        },

    },

    actions: {
        /**
         * Initialize Application
         *
         * Performs startup activities.
         */
        init() {
            this._appStarts++

            if (!this._tickers) {
                this._tickers = {}
            }

            setInterval(this.updateTicker, 30000)

            this.updateTicker()
        },

        async updateTicker () {
            if (!this._tickers.NEXA) {
                this._tickers.NEXA = {}
            }

            this._tickers.NEXA = await $fetch('https://nexa.exchange/ticker')
            console.log('TICKERS', this._tickers)
        }

    },
})
