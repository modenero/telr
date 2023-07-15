<script setup>
/* Import modules. */
import {
    listUnspent,
} from '@nexajs/address'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const System = useSystemStore()
const Wallet = useWalletStore()

const unspent = ref(null)

const init = async () => {
    let response

    console.log('ADDRESS', Wallet.address)

    unspent.value = await listUnspent(Wallet.address)
        .catch(err => console.error(err))
    console.log('UNSPENT', unspent.value)
}


onMounted(() => {
    init()
})

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
            What's Coming?
        </h2>

        <pre>{{unspent}}</pre>

    </main>
</template>
