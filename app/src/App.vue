<script setup>
/* Import modules. */
import { ref } from 'vue'

import HomeView from './components/HomeView.vue'
import PayView from './components/PayView.vue'

const isShowingHome = ref(false)
const isShowingPay = ref(false)

const location = window.location
// console.log('LOCATION', location)

/* Initialize host. */
const host = ref(location.host)

/* Initialize hostname. */
const hostname = ref(location.hostname)

/* Initialize hash. */
const hash = ref(location.hash)

/* Initialize pathname. */
const pathname = ref(location.pathname)

/* Initialize search. */
const search = ref(location.search)

console.log({
    host: host.value,
    hostname: hostname.value,
    hash: hash.value,
    pathname: pathname.value,
    search: search.value,
})

if (host.value.includes('pay.')) {
    isShowingPay.value = true
} else {
    isShowingHome.value = true
}
</script>

<template>
    <HomeView v-if="isShowingHome" />
    <PayView v-if="isShowingPay" />
</template>
