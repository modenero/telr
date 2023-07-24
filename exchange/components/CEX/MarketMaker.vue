<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

/* Initialize flags. */
const isShowingBuy = ref(true)
const isShowingSell = ref(false)

const buyOrder = () => {
    // console.log('Ready to buy')
}

const sellOrder = () => {
    // console.log('Ready to sell')
}

const updateBuyPrice = () => {
    if (!buyTotal.value || !buyAmount.value) {
        return null
    }

    // this.buyPrice = numeral(_total / this.buyAmount).format('0.00')
    buyPrice.value = (buyTotal.value / parseFloat(buyAmount.value)).toFixed(8)
}

const updateBuyTotal = () => {
    if (!buyPrice.value || !buyAmount.value) {
        return null
    }

    // this.buyTotal = numeral(_price * this.buyAmount).format('0.00')
    buyTotal.value = (buyPrice.value * parseFloat(buyAmount.value))
}

const updateSellPrice = () => {
    if (!sellTotal.value || !sellAmount.value) {
        return null
    }

    // this.sellPrice = numeral(_total / this.sellAmount).format('0.00')
    sellPrice.value = (sellTotal.value / parseFloat(sellAmount.value)).toFixed(8)
}

const updateSellTotal = () => {
    if (!sellPrice.value || !sellAmount.value) {
        return null
    }

    // this.sellTotal = numeral(_price * this.sellAmount).format('0.00')
    sellTotal.value = (sellPrice.value * parseFloat(sellAmount.value))
}

</script>

<template>
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <div class="text-sm text-yellow-500 font-medium uppercase tracking-widest">
            Market Maker (MM)
        </div>

        <ul class="mt-2 flex flex-row justify-around gap-3 border-b border-gray-400" role="tablist">
            <button class="text-gray-200 text-sm" aria-controls="buy" aria-selected="true">
                Buy Order
            </button>

            <button class="text-gray-200 text-sm" aria-controls="sell" aria-selected="false">
                Sell Order
            </button>
        </ul>

        <section class="mt-2">
            <TradeBuy v-if="isShowingBuy" />

            <TradeSell v-if="isShowingSell" />
        </section>
    </main>
</template>

<script lang="ts">
export default {
    watch: {
        buyAmount: function (_amount) {
            if (!_amount) {
                return null
            }

            if (this.buyPrice) {
                // this.buyTotal = numeral(_amount * this.buyPrice).format('0.00')
                this.buyTotal = (_amount * this.buyPrice)
            }

            if (this.buyTotal) {
                // this.buyTotal = numeral(buyTotal / _amount).format('0.00')
                this.buyPrice = (this.buyTotal / _amount)
            }
        },

        // buyPrice: function (_price) {
        //     if (!_price || !this.buyAmount) {
        //         return null
        //     }

        //     // this.buyTotal = numeral(_price * this.buyAmount).format('0.00')
        //     this.buyTotal = (_price * this.buyAmount).toFixed(8)
        // },

        // buyTotal: function (_total) {
        //     if (!_total || !this.buyAmount) {
        //         return null
        //     }

        //     // this.buyPrice = numeral(_total / this.buyAmount).format('0.00')
        //     this.buyPrice = (_total / this.buyAmount).toFixed(8)
        // },
    },
    computed: {
        // buyTotal() {
        //     if (!this.buyAmount || !this.buyPrice) {
        //         return null
        //     }

        //     return numeral(this.buyAmount * this.buyPrice).format('$0.00')
        // },

        // sellTotal() {
        //     if (!this.sellAmount || !this.sellPrice) {
        //         return null
        //     }

        //     return numeral(this.sellAmount * this.sellPrice).format('$0.00')
        // },

    },
}
</script>
