<script setup lang="ts">
//
</script>

<template>
    <main class="main-body flex gap-3 overflow-y-hidden">
        <div class="w-72 flex flex-col gap-3">
            <Balance class="flex-1" />
            <Trade class="h-[100]" />
        </div>

        <OrderBook class="w-96" />

        <div class="flex-1">
            <PriceChart />
            <Transactions />
        </div>

        <div class="w-72 flex flex-col gap-3">
            <TradesVolume />
            <Notices />
        </div>
    </main>
</template>
