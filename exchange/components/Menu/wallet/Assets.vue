<script setup>
import numeral from 'numeral'
import { getAddressTokenHistory } from '@nexajs/rostrum'

/* Initialize stores. */
import { useWalletStore } from '@/stores/wallet'
import { useSystemStore } from '@/stores/system'
const Wallet = useWalletStore()
const System = useSystemStore()

const AVAS = 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'

const tokens = ref(null)
const tokenHistory = ref(null)

const displayTokenName = (_token) => {
    if (_token.tokenid === AVAS) {
        return `Ava's Cash`
    } else {
        _token.tokenid
    }
}

const displayTokenAmount = (_token) => {
    let totalTokens = 0
    let totalUsd = 0

    let decimals
    let fiat
    let tokenUsd

    if (_token.tokenid === AVAS) {
        decimals = 8 // FOR DEV PURPOSES ONLY
        tokenUsd = 0.33 // FOR DEV PURPOSES ONLY

        /* Calculate decimal value. */
        totalTokens = (_token.tokens / 10**decimals)

        fiat = (totalTokens * tokenUsd)

        return numeral(totalTokens).format('0,0.00[000000]') + ' ( ' + numeral(fiat).format('$0,0.00') + ' )'
    } else {
        return numeral(_token.tokens).format('0,0')
    }
}


const init = async () => {
    console.log('ASSETS INIT')
    tokenHistory.value = await getAddressTokenHistory(Wallet.address)
        .catch(err => console.error(err))
    console.log('HISTORY', tokenHistory.value)

    /* Initialize tokens. */
    tokens.value = {}

    /* Handle tokens. */
    Wallet.tokens.forEach(_token => {
        if (!tokens.value[_token.tokenid]) {
            tokens.value[_token.tokenid] = 0
        }

        /* Add tokens to total. */
        tokens.value[_token.tokenid] += _token.tokens
    })
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
        <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8 text-center" aria-label="Tabs">
                <a href="javascript://" class="w-1/2 border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
                    Tokens

                    <span class="bg-indigo-100 text-indigo-600 ml-1 sm:ml-3 rounded-full py-0.5 px-2.5 text-xs font-medium">
                        {{tokens ? Object.keys(tokens).length : 0}}
                    </span>
                </a>

                <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700" -->
                <a href="javascript://" class="w-1/2 border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
                    Collectibles

                    <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
                    <span class="bg-gray-100 text-gray-900 ml-1 sm:ml-3 rounded-full py-0.5 px-2.5 text-xs font-medium">
                        0
                    </span>
                </a>
            </nav>
        </div>

        <h2 class="text-2xl font-medium">
            Assets
        </h2>

        <div v-if="tokenHistory" v-for="tx of tokenHistory.transactions.reverse()" :key="tx.tx_hash" class="px-3 py-1 bg-amber-100 border-2 border-amber-300 rounded-lg shadow hover:bg-amber-200 cursor-pointer">
            <!-- <h3 class="truncate">
                {{displayTokenName(token)}}
            </h3> -->

            <h3 class="">
                {{tx.height}}
            </h3>

            <h3 class="truncate">
                {{tx.tx_hash}}
            </h3>

            <!-- <h3 v-if="token.tokens">
                {{displayTokenAmount(token)}}
            </h3> -->
        </div>

    </main>
</template>
