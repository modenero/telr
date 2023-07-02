<script setup>
/* Import modules. */
import { ref } from 'vue'

const props = defineProps({
    tradePair: Object,
})

/* Initialize responsive holders. */
const asks = ref([])
const bids = ref([])

// FIXME FOR DEV PURPOSES ONLY
asks.value.push({
    value: 170,
})
asks.value.push({
    value: 135,
})
asks.value.push({
    value: 155,
})
asks.value.push({
    value: 145,
})
asks.value.push({
    value: 175,
})

// FIXME FOR DEV PURPOSES ONLY
bids.value.push({
    value: 105,
})
bids.value.push({
    value: 95,
})
bids.value.push({
    value: 65,
})
bids.value.push({
    value: 75,
})
bids.value.push({
    value: 55,
})

const askList = computed(() => {
    /* Validate asks. */
    if (!asks.value || asks.value.length === 0) return []

    /* Clone array. */
    const cloned = [...asks.value]

    /* Return reversed array. */
    return cloned.reverse()
})

const bidList = computed(() => {
    /* Validate bids. */
    if (!bids.value || bids.value.length === 0) return []

    /* Clone array. */
    const cloned = [...bids.value]

    /* Return reversed array. */
    // return cloned.reverse()
    return cloned
})

const quotePair = computed(() => {
    if (!props.tradePair) return 'USDT'

    switch(props.tradePair) {
    case 'mNEXA/AVAS':
        return 'AVAS'
    case 'mNEXA/BCH':
        return 'BCH'
    case 'mNEXA/USDT':
        return 'USDT'
    default:
        return 'USDT'
    }
})

const formatOrderBookValue = (_value) => {
    if (_value < 100000) {
        let val

        if (_value < 100) {
            val = '000' + _value.toString()
        } else {
            val = '00' + _value.toString()
        }

        const parsed = '<small>' + val.slice(0, 3) + '</small> ' + val.slice(3, 6) + ' ' + val.slice(6)

        if (val.length < 7) {
            return parsed + '000 <small>000</small>'
        } else if (val.length < 8) {
            return parsed + '00 <small>000</small>'
        } else if (val.length < 9) {
            return parsed + '0 <small>000</small>'
        } else {
            return parsed + ' <small>000</small>'
        }
    } else {
        return _value
    }
}

</script>

<template>
    <main class="flex flex-col justify-between bg-gray-200">
        <div
            v-for="ask of askList" :key="ask.value"
            class="w-full flex justify-center bg-red-500"
        >
            <span
                class="text-base font-medium"
                v-html="formatOrderBookValue(ask.value)"
            ></span>
        </div>

        <div class="w-full flex justify-center bg-red-400 border-t border-b-2 border-red-600">
            <span class="text-red-100 text-xs font-medium tracking-widest uppercase">
                Asking
            </span>
        </div>

        <div class="py-3 flex flex-col items-center bg-gray-100">
            <span class="text-gray-400 text-xl font-bold">
                <span class="text-gray-800">6</span>
                <span class="px-1 text-sky-600">.</span>
                <span class="text-gray-800">988</span> <small>330</small>
                <span class="mx-1 text-gray-800">{{quotePair}}</span>
            </span>

            <span class="text-gray-500 text-xs italic lowercase">
                Last trade was <strong class="text-rose-500">3 mins</strong> ago
            </span>
        </div>

        <div class="w-full flex justify-center bg-green-400 border-t-2 border-b border-green-600">
            <span class="text-green-900 text-xs font-medium tracking-widest uppercase">
                Bidding
            </span>
        </div>

        <div
            v-for="bid of bidList" :key="bid.value"
            class="w-full flex justify-center bg-green-500"
        >
            <span
                class="text-base font-medium"
                v-html="formatOrderBookValue(bid.value)"
            ></span>
        </div>
    </main>
</template>
