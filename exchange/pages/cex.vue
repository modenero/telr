<script setup lang="ts">
useHead({
    title: 'Centralized Exchange Service — Nexa Exchange',
    meta: [
        { name: 'description', content: 'Nexa Exchange makes trading your assets effortless.' }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main class="main-body h-full px-1 py-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:overflow-y-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div class="w-full flex flex-col gap-1">
                <CEXMarket class="flex-1" />
                <CEXMarketMaker class="h-[370px]" />
            </div>

            <CEXOrderBook class="w-full" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div class="w-full flex flex-col gap-1">
                <PriceChart class="h-[250px]" />
                <Transactions class="flex-1" />
            </div>

            <div class="w-full flex flex-col gap-1">
                <TradesVolume class="flex-1" />
                <Notices class="h-[300px]" />
            </div>
        </div>
    </main>
</template>
