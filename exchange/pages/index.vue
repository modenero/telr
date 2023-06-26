<script setup lang="ts">
//
</script>

<template>
    <main class="main-body flex gap-1 overflow-y-hidden">
        <div class="w-72 flex flex-col">
            <Balance class="mx-1 my-2 h-[250px]" />
            <Trade class="mx-1 my-2 flex-1" />
        </div>

        <OrderBook class="w-96" />

        <div class="flex-1">
            <PriceChart class="mx-1 my-1 h-[250px]" />
            <Transactions class="mx-1 my-1 flex-1" />
        </div>

        <div class="w-72 flex flex-col gap-3">
            <TradesVolume class="mx-1 my-1 h-1/2" />
            <Notices class="mx-1 my-1 flex-1" />
        </div>
    </main>
</template>
