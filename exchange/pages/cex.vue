<script setup lang="ts">
useHead({
    title: 'Centralized Exchange Service — Nexa Exchange',
    meta: [
        { name: 'description', content: 'Nexa Exchange makes building your next BIG idea effortless.' }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

onBeforeMount(() => {
    System.$state = JSON.parse(localStorage.getItem('system'))
    // add additional states here...
})

watch(System.$state, (_state) => {
    localStorage.setItem('system', JSON.stringify(_state))
})
// watch additional states here...

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
    <main class="main-body px-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:overflow-y-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div class="py-2 w-full flex flex-col gap-2">
                <CexMarket class="h-[250px]" />
                <CEXMarketMaker class="flex-1" />
            </div>

            <CEXOrderBook class="w-full" />
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
