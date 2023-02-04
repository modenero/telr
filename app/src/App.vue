<script setup>
/* Import modules. */
import { ref } from 'vue'

import HomeView from './views/HomeView.vue'
import AuditView from './views/AuditView.vue'
import PayView from './views/PayView.vue'

const isShowingHome = ref(false)
const isShowingAudit = ref(false)
const isShowingPay = ref(false)

const location = window.location
// console.log('LOCATION', location)

/* Initialize host. */
const host = ref(location.host)

/* Initialize hostname. */
const hostname = ref(location.hostname)

/* Initialize pathname. */
const pathname = ref(location.pathname)

/* Initialize search. */
const search = ref(location.search)

/* Initialize hash. */
const hash = ref(location.hash)

console.log({
    host: host.value,
    hostname: hostname.value,
    pathname: pathname.value,
    search: search.value,
    hash: hash.value,
})

let id
let auditid

if (pathname.value && pathname.value.length === 37) {
    id = pathname.value.slice(1)
    console.log('ID is', id)
}

if (id) {
    auditid = id

    isShowingAudit.value = true
} else {
    checkHostname()
}

/**
 * Check Hostname
 *
 * Will use the URI to determine which service should be evaluated.
 */
const checkHostname = () => {
    /* Handle hostname template selection. */
    if (hostname.value.includes('audit.')) {
        isShowingAudit.value = true
    } else if (hostname.value.includes('pay.')) {
        isShowingPay.value = true
    } else {
        isShowingHome.value = true
    }
}
</script>

<template>
    <HomeView
        v-if="isShowingHome"
    />

    <AuditView
        v-if="isShowingAudit"
        :auditid="auditid"
    />

    <PayView
        v-if="isShowingPay"
    />
</template>
