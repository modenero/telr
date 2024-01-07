/* Import modules. */
import { defineStore } from 'pinia'

/* Import (local) modules. */
import _rebalance from './pool/rebalance.ts'

/* Initialize constants. */
const UPDATE_TICKER_INTERVAL = 30000 // 30 seconds

/**
 * Pool Store
 */
export const usePoolStore = defineStore('pool', {
    state: () => ({

    }),

    getters: {

    },

    actions: {
        rebalance(_baseQuantity) {
            /* Re-balance pool. */
            return _rebalance.bind(this)(_baseQuantity)
        },
    },
})
