<script setup lang="ts">
useHead({
    title: 'DEX — Nexa Exchange',
    meta: [
        { name: 'description', content: 'Nexa Exchange makes building your next BIG idea effortless.' }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

/* Initialize route. */
const route = useRoute()

/* Set asset id. */
const assetid = route.params.assetid
console.log('ASSET ID', assetid)

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
                <DEXMarketOrder class="h-[250px]" />
                <DEXLiquidityProvider class="flex-1" />
            </div>

            <DEXPools class="w-full" />
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
