<script setup>
import numeral from 'numeral'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
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
    <main class="flex flex-col gap-4">
        <p class="px-3 py-2 bg-rose-100 text-sm border border-rose-200 rounded-lg shadow-md">
            Thanks for visiting.
            This area is still under development and will be updated soon.
        </p>

        <h2 class="text-2xl font-medium">
           Asset Swap
        </h2>

        <ol class="pl-10 list-disc">
            <li>Transaction history</li>
            <li>Data exporting</li>
        </ol>

    </main>
</template>
