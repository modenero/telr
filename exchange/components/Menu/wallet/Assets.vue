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
        <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8 text-center" aria-label="Tabs">
                <a href="javascript://" class="w-1/2 border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
                    Tokens

                    <span class="bg-indigo-100 text-indigo-600 ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block">
                        2
                    </span>
                </a>

                <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700" -->
                <a href="javascript://" class="w-1/2 border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
                    Collectibles

                    <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
                    <span class="bg-gray-100 text-gray-900 ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block">
                        0
                    </span>
                </a>
            </nav>
        </div>


        <h2 class="text-2xl font-medium">
            Assets
        </h2>

        <ol class="pl-10 list-disc">
            <li>Transaction history</li>
            <li>Data exporting</li>
        </ol>

    </main>
</template>
