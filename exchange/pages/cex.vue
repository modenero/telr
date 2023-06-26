<script setup lang="ts">
useHead({
    title: 'Centralized Exchange Service — Nexa Studio',
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
    <main class="max-w-7xl mx-auto h-full py-5 flex flex-col justify-center items-center">
        <section class="">
            <h1 class="text-5xl text-gray-100 font-medium">
                Centralized Exchange Portal
            </h1>

            <p class="text-3xl font-medium text-gray-100">
                Coming soon...
            </p>

        </section>
    </main>
</template>
