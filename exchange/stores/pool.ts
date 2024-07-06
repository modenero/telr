/* Import modules. */
import { defineStore } from 'pinia'

/* Import (local) modules. */
import _rebalance from './pool/rebalance.ts'

/**
 * Pool Store
 */
export const usePoolStore = defineStore('pool', {
    state: () => ({
        // TODO
    }),

    getters: {
        // TODO
    },

    actions: {
        /**
         * Rebalance
         *
         * Adjust the base and quote quantities of a specific pool.
         *
         * @param _baseQuantity
         * @returns
         */
        rebalance(_baseQuantity) {
            /* Re-balance pool. */
            return _rebalance.bind(this)(_baseQuantity)
        },
    },
})
