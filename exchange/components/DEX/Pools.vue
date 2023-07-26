<script setup>
/* Import modules. */
import { ref } from 'vue'

const orders = ref([])
</script>

<template>
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <h2 class="text-sm text-yellow-500 font-medium uppercase tracking-widest">
            Pools
        </h2>

        <header class="flex text-sm justify-between tracking-widest">
            <div>
                <h3 class="text-gray-100">
                    2 Assets
                </h3>
            </div>

            <div>
                <h3 class="text-gray-100">

                </h3>
            </div>

            <div>
                <h3 class="text-gray-100">
                    Page 1 of 1
                </h3>
            </div>
        </header>

        <DEXPoolsTopFeed />
    </main>
</template>
