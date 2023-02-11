<script setup>
/* Import modules. */
import { ref } from 'vue'

import Compliance from './Audit/Compliance.vue'
import NewOrder from './Audit/NewOrder.vue'
import Delivered from './Audit/Delivered.vue'
import StableConversion from './Audit/StableConversion.vue'
import Trading from './Audit/Trading.vue'

const props = defineProps({
    auditid: String,
})

const status = ref(null)

let auditid = null

/**
 * Check Status
 */
const checkStatus = async () => {
    status.value = 'working...'
}

if (props && props.auditid) {
    auditid = JSON.stringify(props.auditid)
}

setTimeout(checkStatus, 3000)

</script>

<template>
    <main class="w-screen h-screen bg-gradient-to-r from-indigo-300 to-indigo-100">
        <h1>Audit View</h1>

        <h3>props: {{props}}</h3>
        <h3>auditid: {{auditid}}</h3>
        <h3>status: {{status}}</h3>

        <section class="px-5 py-10 max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg border-4 border-indigo-600 shadow-lg">
            <ul role="list" class="-mb-8">
                <Delivered />

                <Trading />

                <StableConversion />

                <Compliance />

                <NewOrder />
            </ul>
        </section>

    </main>
</template>
