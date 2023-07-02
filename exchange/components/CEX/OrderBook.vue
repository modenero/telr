<script setup>
/* Import modules. */
import { ref } from 'vue'

const orders = ref([])
</script>

<template>
    <main class="my-2 px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-lg text-yellow-500 font-medium">
            Order Book
        </h2>

        <header class="flex justify-between">
            <div>
                <h3 class="text-gray-100">
                    mNEXA
                </h3>
            </div>

            <div>
                <h3 class="text-gray-100">
                    mNEXA/USDT
                </h3>
            </div>

            <div>
                <h3 class="text-gray-100">
                    USDT
                </h3>
            </div>
        </header>

        <OrderBookMarketFeed
            trade-pair="mNEXA/AVAS"
        />
    </main>
</template>
