<script setup>
/* Import components. */
import Balance from '@/components/Balance.vue'
import Navbar from '@/components/Navbar.vue'
import Notices from '@/components/Notices.vue'
import OrderBook from '@/components/OrderBook.vue'
import PriceChart from '@/components/PriceChart.vue'
import Trade from '@/components/Trade.vue'
import TradesVolume from '@/components/TradesVolume.vue'
import Transactions from '@/components/Transactions.vue'
</script>

<template>
    <main>
        <Navbar />

        <div class="trading-cont">
            <div class="vertical-split">
                <Balance />
                <Trade />
            </div>

            <OrderBook />

            <div class="vertical-split">
                <PriceChart />
                <Transactions />
            </div>

            <div class="vertical-split">
                <TradesVolume />
                <Notices />
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    computed: {
        authenticated () {
            return this.$store.state.profile.authenticated
        },

    },
}
</script>
