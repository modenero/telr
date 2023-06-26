<script setup>
/* Import modules. */
import numeral from 'numeral'
import { reverseHex } from '@nexajs/utils'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useWalletStore } from '@/stores/wallet'
const Profile = useProfileStore()
const Wallet = useWalletStore()

const isShowingDeposit = ref(false)
const isShowingHistory = ref(false)
const isShowingWithdraw = ref(false)

const displayBalance = computed(() => {
    if (!Wallet.satoshis) {
        return '0.00 NEXA'
    }

    /* Calculate (NEX) total. */
    const nex = (Wallet.satoshis / 100.0)

    /* Return formatted value. */
    return numeral(nex).format('0,0.00') + ' NEXA'
})

const pendingBalance = computed(() => {
    if (!Wallet.satoshis) {
        return '0.00 NEXA'
    }

    /* Calculate (NEX) total. */
    const nex = (Wallet.satoshis / 100.0)

    /* Return formatted value. */
    return numeral(nex).format('0,0.00') + ' NEXA'
})




/**
 * Set Tab
 */
const setTab = (_tab) => {
    /* Clear all tabs. */
    isShowingDeposit.value = false
    isShowingHistory.value = false
    isShowingWithdraw.value = false

    if (_tab === 'deposit') {
        isShowingDeposit.value = true
    }

    if (_tab === 'history') {
        isShowingHistory.value = true
    }

    if (_tab === 'withdraw') {
        isShowingWithdraw.value = true
    }
}



onMounted(() => {
    setTab('deposit')
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
// })

</script>

<template>
    <main v-if="!Wallet.isReady" class="flex flex-col gap-5">
        <p class="px-3 py-2 bg-yellow-100 text-base font-medium border-2 border-yellow-200 rounded-lg shadow-md">
            Welcome to your Wally Dice game wallet.
            Click the button below to create a new wallet and begin playing.
        </p>

        <button @click="Wallet.createWallet" class="px-3 py-2 text-2xl text-blue-100 font-medium bg-blue-500 border-2 border-blue-700 rounded-lg shadow hover:bg-blue-400">
            Create New Wallet
        </button>
    </main>

    <main v-else class="">

        <section class="px-5 py-3 bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow">
            <h3 class="text-sm text-yellow-700 font-medium uppercase">
                Available Balance
            </h3>

            <h2 class="text-3xl font-medium">
                {{displayBalance}}
            </h2>

            <div v-if="satoshis?.unconfirmed > 0" class="mx-10 my-5 px-10 py-3 text-sm bg-yellow-500 border-2 border-yellow-700 rounded-lg shadow">
                including
                <h2 class="text-base font-bold inline">{{pendingBalance}}</h2>
                pending confirmation
            </div>

        </section>

        <div class="mt-10">
            <div class="block">
                <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                    <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                    <button @click="setTab('deposit')" class="bg-gray-700 text-gray-100 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 hover:text-gray-600 focus:z-10" aria-current="page">
                        <span>Deposit</span>
                        <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                    </button>

                    <button @click="setTab('withdraw')" class="bg-gray-700 text-gray-400 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 hover:text-gray-600 focus:z-10">
                        <span>Withdraw</span>
                        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                    </button>

                    <button @click="setTab('history')" class="bg-gray-700 text-gray-400 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 hover:text-gray-600 focus:z-10">
                        <span>History</span>
                        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                    </button>
                </nav>
            </div>
        </div>

        <div class="my-5">
            <MenuWalletDeposit v-if="isShowingDeposit" />
            <MenuWalletHistory v-if="isShowingHistory" />
            <MenuWalletWithdraw v-if="isShowingWithdraw" />
        </div>

    </main>
</template>
