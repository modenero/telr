<script setup>
/* Import modules. */
import numeral from 'numeral'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

const displayTicker = computed(() => {
    if (!System.ticker) {
        return '$0.00'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '$0.00'
    }

    /* Set price. */
    const price = quote?.USD?.price

    /* Validate price. */
    if (!price) {
        return '$0.00'
    }

    /* Return formatted price. */
    return numeral(price * 1000000).format('$0,0.00')
})

const displayPctChg = computed(() => {
    if (!System.ticker) {
        return '0.0%'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '0.0%'
    }

    /* Set percentage change. */
    const pctChg24h = quote?.USD?.pctChg24h

    /* Validate change. */
    if (!pctChg24h) {
        return '0.0%'
    }

    /* Return formatted price. */
    return numeral(pctChg24h / 100).format('0.00%')
})

const displayVol = computed(() => {
    if (!System.ticker) {
        return '0'
    }

    /* Set quote. */
    const quote = System.ticker.quote

    /* Validate quote. */
    if (!quote) {
        return '0'
    }

    /* Set percentage change. */
    const vol = quote?.USD?.vol24

    /* Validate change. */
    if (!vol) {
        return '0'
    }

    /* Return formatted price. */
    return numeral(vol).format('0[.]0a')
})

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
            {{displayTicker}} mNEXA / USD
        </h2>

        <h3 class="text-xl font-medium">
            Change: {{displayPctChg}}
        </h3>

        <h3 class="text-xl font-medium">
            Volume: {{displayVol}}
        </h3>
    </main>
</template>
