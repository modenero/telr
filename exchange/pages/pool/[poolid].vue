<script setup lang="ts">
/* Import modules. */
import {
    encodeAddress,
    listUnspent,
} from '@nexajs/address'

import { hexToBin } from '@nexajs/utils'

import numeral from 'numeral'

useHead({
    title: `Pool Manager — Nexa Exchange`,
    meta: [
        { name: 'description', content: `Nexa Studio makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { usePoolStore } from '@/stores/pool'
import { useSystemStore } from '@/stores/system'
const Pool = usePoolStore()
const System = useSystemStore()

/* Initialize route. */
const route = useRoute()

/* Set pool id. */
const poolid = route.params.poolid
console.log('POOL ID', poolid)

// TEMP USE FOR DEV PURPOSES ONLY
// ALWAYS DECODE FROM CONTRACT ADDRESS
const DEV_SCRIPT_PUBKEY = hexToBin('0014d77c5faaf175ada810c45660eacbd54ac8bdcb240014b2912c4cc61f1b8cbe5c77ebd5eeea2641645f10022c011445f5b9d41dd723141f721c727715c690fedbbbd60000')

const LP_BASE_RATE = 50

const activePool = ref()
const stakeline = ref('0')
const isShowingRecovery = ref(true)

const displayMonths = computed(() => {
    if (stakeline.value === '0') {
        return '30 Days'
    }
    else if (stakeline.value === '12') {
        return '1 Year'
    }
    else {
        return `${stakeline.value} Months`
    }
})

const displayProRate = computed(() => {
    if (stakeline.value === '0') {
        return LP_BASE_RATE * 10
    }
    else if (stakeline.value === '3') {
        return LP_BASE_RATE * 7.5
    }
    else if (stakeline.value === '6') {
        return LP_BASE_RATE * 5
    }
    else if (stakeline.value === '9') {
        return LP_BASE_RATE * 2.5
    }
    else if (stakeline.value === '12') {
        return LP_BASE_RATE
    }
})

const displayPoolPrice = computed(() => {
    if (!activePool.value) {
        return '0.00'
    }

    let poolPrice
    let tokensQty
    let satoshisQty

    tokensQty = parseFloat(activePool.value.tokens / BigInt(100)) // reduce by ??

    satoshisQty = parseFloat(activePool.value.satoshis / BigInt(10000)) // reduce by ?? + decimals

    poolPrice = numeral(tokensQty / satoshisQty).format('0,0.00[0000]')
    console.log('POOL PRICE', poolPrice)

    return poolPrice
})

const displayPoolFiat = computed(() => {
    if (!activePool.value) {
        return '0.00'
    }

    let poolFiat
    let tokensQty
    let satoshisQty

    tokensQty = parseFloat(activePool.value.tokens / BigInt(100)) // reduce by ??

    satoshisQty = parseFloat(activePool.value.satoshis / BigInt(10000)) // reduce by ?? + decimals

    poolFiat = numeral((satoshisQty / tokensQty) * System.usd).format('$0,0.00[0000]')
    console.log('POOL FIAT', poolFiat)

    return poolFiat
})

const rebalance = async () => {
    /* Confirm request. */
    if (confirm(`Are you sure you want to re-balance this pool?`)) {

        // TODO Calculate amount
        // const amount = BigInt(1)

        /* Activate stakeline. */
        const result = await Pool.rebalance()
            .catch(err => {
                console.error(err.message)
                alert(err.message)
            })
        console.log('RESULT', result)

        /* Validate result. */
        if (result) {
            alert(JSON.stringify(result))
        }

    }
}


const init = async () => {
    let contractAddress
    let contractUnspent

    /* Encode the public key hash into a P2PKH nexa address. */
    contractAddress = encodeAddress(
        'nexa',
        'TEMPLATE',
        DEV_SCRIPT_PUBKEY,
    )
    console.info('\nCONTRACT ADDRESS', contractAddress)

    /* Request unspent assets. */
    contractUnspent = await listUnspent(contractAddress)
        .catch(err => console.error(err))

    /* Filter tokens. */
    contractUnspent = contractUnspent.filter(_unspent => {
        return _unspent.hasToken
    })

    // FOR DEV PURPOSES ONLY -- take the LARGEST input
    contractUnspent = [contractUnspent.sort((a, b) => Number(b.tokens) - Number(a.tokens))[0]]
    // FOR DEV PURPOSES ONLY -- add scripts
    console.log('\nCONTRACT UNSPENT', contractUnspent)

    activePool.value = contractUnspent[0]
    console.log('ACTIVE POOL', activePool.value)

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
    <main class="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
        <section class="mt-2 bg-white py-12 sm:py-16 border-2 border-rose-300 rounded-2xl shadow-md">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto mt-3 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                    <div class="p-8 sm:p-10 lg:flex-auto">
                        <h2 class="text-4xl font-bold tracking-tight text-gray-900">
                            Liquidity Pool (LP) Manager
                        </h2>

                        <h3 class="mt-1 text-xs text-gray-300 font-medium tracking-tighter leading-4">
                            {{poolid.split('').join(' ')}}
                        </h3>

                        <p class="mt-6 text-base leading-7 text-gray-600">
                            <span class="font-medium">
                                Managing a Liquidity Pool is 100% FREE Forever!
                            </span>

                            Just stake your assets in each pool that you want manage.
                            There is NO limit to how many pools you can manage per account.
                        </p>

                        <section class="max-w-2xl w-full mt-10">
                            <div class="px-5 py-2 flex flex-col items-center bg-gray-700 border-2 border-amber-300 shadow rounded-2xl">
                                <h2 class="pl-3 text-base font-medium text-amber-200 uppercase tracking-widest">
                                    Set Your Stakeline
                                </h2>

                                <input
                                    type="range"
                                    min="0"
                                    max="12"
                                    step="3"
                                    class="my-2 px-3 w-full h-8 bg-gray-200 rounded-2xl appearance-none cursor-pointer range-lg dark:bg-amber-400"
                                    v-model="stakeline"
                                />

                                <h2 class="pl-3 text-2xl font-medium text-amber-200 uppercase tracking-widest">
                                    {{displayMonths}}
                                </h2>
                            </div>

                            <div class="pl-5 text-sm text-rose-500 italic tracking-wider">
                                <h4 class="text-center">
                                    NOTE: The <span class="font-medium">LONGER</span> your stakeline, the <span class="font-medium">LESS</span> assets required for LP activation.
                                </h4>
                            </div>
                        </section>

                        <div class="mt-10 flex items-center gap-x-4">
                            <h4 class="flex-none text-xl font-semibold leading-6 tracking-wider text-sky-600">
                                What’s included in the Liquidity Pool
                            </h4>
                            <div class="h-px flex-auto bg-gray-100"></div>
                        </div>

                        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-xl leading-6 tracking-tighter font-light text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>

                                <div>
                                    <span class="text-rose-500 text-2xl font-bold">25K</span> $STUDIO Daily Airdrop

                                    <div class="pl-3 flex flex-col text-xs text-rose-400 font-medium tracking-wide">
                                        <span class="">
                                            plus <span class="text-rose-500 text-sm font-bold">2X</span> thru 1st <span class="text-rose-500 text-sm font-bold">30</span> days of stakeline
                                        </span>

                                        <span class="">
                                            plus <span class="text-rose-500 text-sm font-bold">2X</span> thru <span class="text-rose-500 text-sm font-bold">Bootstrap</span> phase
                                        </span>
                                    </div>
                                </div>
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>

                                Early Access to NEW Studios
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>

                                Premium Builder Support
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>

                                Exclusive Community Chats
                            </li>

                            <li class="flex gap-x-3">
                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>

                                Exclusive Rewards
                            </li>
                        </ul>
                    </div>

                    <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div class="h-full rounded-2xl bg-sky-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div class="mx-auto max-w-xs px-3">
                                <h2 class="text-4xl font-semibold text-sky-800">
                                    It's 100% FREE!
                                </h2>

                                <h3 class="text-xl font-semibold text-sky-800">
                                    Stake As Long As You Want
                                </h3>

                                <section v-if="activePool" class="grid grid-cols-2 gap-4">
                                    <h3>NEXA Balance</h3>
                                    <h3>{{numeral(activePool.amount).format('0,0.00')}}</h3>

                                    <h3>STUDIO Balance</h3>
                                    <h3>{{numeral(activePool.tokens).format('0,0.[000000]')}}</h3>

                                    <h3>NEXA/STUDIO</h3>
                                    <h3>{{displayPoolPrice}}</h3>

                                    <h3 v-if="System.usd">mNEXA/USD</h3>
                                    <h3 v-if="System.usd">{{numeral(System.usd).format('$0,0.00[0000]')}}</h3>

                                    <h3>mSTUDIO/USD</h3>
                                    <h3>{{displayPoolFiat}}</h3>
                                </section>

                                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span class="text-8xl font-bold tracking-wide text-sky-900 italic">
                                        {{displayProRate}}
                                    </span>

                                    <span class="text-lg font-semibold leading-6 tracking-wide text-gray-600">
                                        $AVAS
                                    </span>

                                </p>

                                <p class="text-lg font-bold tracking-widest text-rose-400">
                                    Stake x1 Liquidity Pool
                                    <br />for {{displayMonths}}
                                </p>

                                <button
                                    @click="rebalance"
                                    class="mt-10 block w-full rounded-lg bg-indigo-600 px-3 py-5 text-center text-2xl font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Re-balance to 10M
                                </button>

                                <p class="mt-6 text-base leading-5 text-gray-600">
                                    Early termination may result in loss of some or all of your remaining assets.
                                </p>
                            </div>

                            <button v-if="isShowingRecovery" @click="closeout" class="mt-5 mx-auto px-5 py-2 w-fit text-xl text-gray-800 font-bold bg-red-500 border-2 border-red-600 rounded-lg shadow hover:bg-red-400">
                                <span class="text-red-100">
                                    Closeout Stakeline
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <Footer />
</template>
