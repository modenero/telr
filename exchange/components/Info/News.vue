<script setup>
import { ref } from 'vue'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

defineProps({
    msg: String,
})

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

const count = ref(0)
</script>

<template>
    <main class="flex flex-col gap-4">
        <p class="px-3 py-2 bg-rose-100 text-sm border border-rose-200 rounded-lg shadow-md">
            Thanks for visiting.
            This area is still under development and will be updated soon.
        </p>

        <h2 class="text-2xl font-medium">
            What's Coming?
        </h2>

        <ol class="pl-10 list-disc">
            <li>Nexa news &amp; events</li>
            <li>Nexa Games news &amp; events</li>
            <li>Wally Dice news &amp; events</li>
        </ol>

    </main>
</template>
