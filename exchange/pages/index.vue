<script setup lang="ts">
//
</script>

<template>
    <main class="main-body px-1 flex flex-col sm:flex-row gap-1 sm:overflow-y-hidden">
        <div class="w-full sm:w-72 flex flex-col">
            <TradeMarket class="mx-1 my-2 h-[250px]" />
            <TradeLimit class="mx-1 my-2 flex-1" />
        </div>

        <OrderBook class="w-96" />

        <div class="flex-1">
            <PriceChart class="mx-1 my-1 h-[250px]" />
            <Transactions class="mx-1 my-1 flex-1" />
        </div>

        <div class="w-full sm:w-72 flex flex-col gap-1">
            <TradesVolume class="flex-1" />
            <Notices class="mx-1 my-1 h-[300px]" />
        </div>
    </main>
</template>
