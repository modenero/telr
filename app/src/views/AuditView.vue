<script setup>
/* Import modules. */
import { ref } from 'vue'

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
    <div class="">
        <h1>Audit View</h1>

        <h3>props: {{props}}</h3>
        <h3>auditid: {{auditid}}</h3>
        <h3>status: {{status}}</h3>
    </div>
</template>
