<script setup lang="ts">
//
</script>

<template>
    <main class="main-body px-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:overflow-y-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div class="py-2 w-full flex flex-col gap-2">
                <TradeMarket class="h-[250px]" />
                <TradeLimit class="flex-1" />
            </div>

            <OrderBook class="w-full" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="w-full">
                <PriceChart class="mx-1 my-1 h-[250px]" />
                <Transactions class="mx-1 my-1 flex-1" />
            </div>

            <div class="w-full">
                <TradesVolume class="flex-1" />
                <Notices class="mx-1 my-1 h-[300px]" />
            </div>
        </div>
    </main>
</template>
