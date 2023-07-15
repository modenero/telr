<script setup>
/* Import modules. */
import moment from 'moment'
import {
    getAddressHistory,
    getTransaction,
} from '@nexajs/rostrum'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const System = useSystemStore()
const Wallet = useWalletStore()

const history = ref(null)
const txs = ref(null)

const init = async () => {
    let history
    let txids

    console.log('ADDRESS', Wallet.address)

    history = await getAddressHistory(Wallet.address)
        .catch(err => console.error(err))
    console.log('HISTORY', history)

    txids = history.map(_tx => _tx.tx_hash)

    txs.value = {}

    txids.forEach(async _txid => {
        let details

        details = await getTransaction(_txid)
            .catch(err => console.error(err))
        console.log('DETAILS', details)

        txs.value[_txid] = details
    })
}

const displayTransaction = (_txid) => {
    if (!txs.value) {
        return 'n/a'
    }

    return txs.value[_txid]
}

const displayTime = (_time) => {
    return moment.unix(_time).format('lll')
}

const displayTimeAgo = (_time) => {
    return moment.unix(_time).fromNow()
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
        <h2 class="text-xl font-medium">
            Recent Transactions
        </h2>

        <div v-for="tx of txs" :key="tx.txidem" class="px-2 p-1 bg-amber-100 border border-amber-300 rounded-md shadow">
            <h3 class="text-xs font-medium truncate">
                TXID {{tx.txidem}}
            </h3>

            <h3>
                {{displayTime(tx.time)}}
                <small>({{displayTimeAgo(tx.time)}})</small>
            </h3>

            <h3>fee: {{tx.fee}}</h3>

            <h3>size: {{tx.size}}</h3>

            <pre class="text-xs">{{tx.vin}}</pre>

            <pre class="text-xs">{{tx.vout}}</pre>

            <!-- <pre class="text-xs">{{displayTransaction(tx.txid)}}</pre> -->
        </div>

    </main>
</template>
