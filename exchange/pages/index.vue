<script setup lang="ts">
//
</script>

<template>
    <main class="main-body flex gap-3 overflow-y-hidden">
        <div class="w-72 flex flex-col">
            <Balance class="mx-1 my-2 flex-1" />
            <Trade class="mx-1 my-2 h-[100]" />
        </div>

        <OrderBook class="w-96" />

        <div class="flex-1">
            <PriceChart class="mx-1 my-1 flex-1 bg-gradient-to-r from-indigo-700 to-indigo-800 border-2 border-indigo-500 rounded-lg" />
            <Transactions class="mx-1 my-1 flex-1 bg-gradient-to-r from-indigo-700 to-indigo-800 border-2 border-indigo-500 rounded-lg" />
        </div>

        <div class="w-72 flex flex-col gap-3">
            <TradesVolume class="mx-1 my-1 flex-1 bg-gradient-to-r from-indigo-700 to-indigo-800 border-2 border-indigo-500 rounded-lg" />
            <Notices />
        </div>
    </main>
</template>
