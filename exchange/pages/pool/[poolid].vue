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
// nexa:nprqq9xh03064ut44k5pp3zkvr4vh422ez7ukfqqzjefztzvcc03hr97t3m7h40wagnyzezlzqpzcqg5gh6mn4qa6u33g8mjr3e8w9wxjrldhw7kqqqq47nsfsmf
const DEV_SCRIPT_PUBKEY = hexToBin('0014d77c5faaf175ada810c45660eacbd54ac8bdcb240014b2912c4cc61f1b8cbe5c77ebd5eeea2641645f10022c011445f5b9d41dd723141f721c727715c690fedbbbd60000')

// FOR DEV PURPOSES ONLY
// const TOKEN_ID_HEX = '9732745682001b06e332b6a4a0dd0fffc4837c707567f8cbfe0f6a9b12080000' // STUDIO
const TOKEN_ID_HEX = 'a15c9e7e68170259fd31bc26610b542625c57e13fdccb5f3e1cb7fb03a420000' // NXL

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

    // tokensQty = parseFloat(activePool.value.tokens / BigInt(100)) // reduce by ??
    tokensQty = parseFloat(activePool.value.tokens / BigInt(10000)) // reduce by # decimals

    // satoshisQty = parseFloat(activePool.value.satoshis / BigInt(10000)) // reduce by ?? + decimals
    satoshisQty = parseFloat(activePool.value.satoshis / BigInt(100)) // reduce by # decimals

    poolPrice = numeral((tokensQty / satoshisQty) * 1e6).format('0,0.00[0000]')
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

    // tokensQty = parseFloat(activePool.value.tokens / BigInt(100)) // reduce by ??
    tokensQty = parseFloat(activePool.value.tokens / BigInt(10000)) // reduce by # decimals

    // satoshisQty = parseFloat(activePool.value.satoshis / BigInt(10000)) // reduce by ?? + decimals
    satoshisQty = parseFloat(activePool.value.satoshis / BigInt(100)) // reduce by # decimals

    poolFiat = numeral(System.usd / ((tokensQty / satoshisQty) * 1e6)).format('$0,0.00[0000]')
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

    /* Filter by "active" token. */
    contractUnspent = contractUnspent.filter(_unspent => {
        return _unspent.tokenidHex === TOKEN_ID_HEX
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
    <main>
        <div class="relative isolate overflow-hidden pt-16">
            <!-- Secondary navigation -->
            <header class="pb-4 pt-6 sm:pb-6">
                <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                    <h1 class="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
                    <div class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                        <a href="javascript://" class="text-indigo-600">Last 7 days</a>
                        <a href="javascript://" class="text-gray-700">Last 30 days</a>
                        <a href="javascript://" class="text-gray-700">All-time</a>
                    </div>

                    <button
                        @click="rebalance"
                        class="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <svg class="-ml-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        </svg>
                        Re-balance to 10M
                    </button>
                </div>
            </header>

            <!-- Stats -->
            <div v-if="activePool" class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                    <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8">
                        <dt class="text-sm font-medium leading-6 text-gray-500">
                            $NEXA Balance
                        </dt>

                        <dd class="text-xs font-medium text-gray-700">
                            +4.75%
                        </dd>

                        <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                            {{numeral(activePool.amount).format('0,0.00')}}
                        </dd>
                    </div>

                    <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
                        <dt class="text-sm font-medium leading-6 text-gray-500">
                            $STUDIO Balance
                        </dt>

                        <dd class="text-xs font-medium text-rose-600">
                            +54.02%
                        </dd>

                        <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                            {{numeral(activePool.tokens).format('0,0.[000000]')}}
                        </dd>
                    </div>

                    <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 lg:border-l">
                        <dt class="text-sm font-medium leading-6 text-gray-500">
                            mNEXA / NXL
                        </dt>

                        <dd class="text-xs font-medium text-gray-700">
                            -1.39%
                        </dd>

                        <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                            {{displayPoolPrice}}
                        </dd>
                    </div>

                    <div class="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
                        <dt class="text-sm font-medium leading-6 text-gray-500">
                            mSTUDIO / USD
                        </dt>

                        <dd class="text-xs font-medium text-rose-600">
                            +10.18%
                        </dd>

                        <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                            {{displayPoolFiat}}
                        </dd>
                    </div>
                </dl>
            </div>

            <div
                class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                aria-hidden="true"
            >
                <div
                    class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                    style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%);"
                ></div>
            </div>
        </div>

        <div class="space-y-16 py-16 xl:space-y-20">
            <!-- Recent activity table -->
            <div>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">Recent activity</h2>
                </div>
                <div class="mt-6 overflow-hidden border-t border-gray-100">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <table class="w-full text-left">
                                <thead class="sr-only">
                                    <tr>
                                        <th>Amount</th>
                                        <th class="hidden sm:table-cell">Client</th>
                                        <th>More details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-sm leading-6 text-gray-900">
                                        <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                                            <time datetime="2023-03-22">Today</time>
                                            <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                                            <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="relative py-5 pr-6">
                                            <div class="flex gap-x-6">
                                                <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div class="flex-auto">
                                                    <div class="flex items-start gap-x-3">
                                                        <div class="text-sm font-medium leading-6 text-gray-900">$7,600.00 USD</div>
                                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                                                    </div>
                                                    <div class="mt-1 text-xs leading-5 text-gray-500">$500.00 tax</div>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                                            <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                                        </td>
                                        <td class="hidden py-5 pr-6 sm:table-cell">
                                            <div class="text-sm leading-6 text-gray-900">Reform</div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Website redesign</div>
                                        </td>
                                        <td class="py-5 text-right">
                                            <div class="flex justify-end">
                                                <a href="javascript://" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                                                    View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00012, Reform</span>
                                                </a>
                                            </div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00012</span></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative py-5 pr-6">
                                            <div class="flex gap-x-6">
                                                <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div class="flex-auto">
                                                    <div class="flex items-start gap-x-3">
                                                        <div class="text-sm font-medium leading-6 text-gray-900">$10,000.00 USD</div>
                                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">Withdraw</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                                            <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                                        </td>
                                        <td class="hidden py-5 pr-6 sm:table-cell">
                                            <div class="text-sm leading-6 text-gray-900">Tom Cook</div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Salary</div>
                                        </td>
                                        <td class="py-5 text-right">
                                            <div class="flex justify-end">
                                                <a href="javascript://" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                                                    View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00011, Tom Cook</span>
                                                </a>
                                            </div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00011</span></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="relative py-5 pr-6">
                                            <div class="flex gap-x-6">
                                                <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div class="flex-auto">
                                                    <div class="flex items-start gap-x-3">
                                                        <div class="text-sm font-medium leading-6 text-gray-900">$2,000.00 USD</div>
                                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div>
                                                    </div>
                                                    <div class="mt-1 text-xs leading-5 text-gray-500">$130.00 tax</div>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                                            <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                                        </td>
                                        <td class="hidden py-5 pr-6 sm:table-cell">
                                            <div class="text-sm leading-6 text-gray-900">Tuple</div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Logo design</div>
                                        </td>
                                        <td class="py-5 text-right">
                                            <div class="flex justify-end">
                                                <a href="javascript://" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                                                    View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00009, Tuple</span>
                                                </a>
                                            </div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00009</span></div>
                                        </td>
                                    </tr>

                                    <tr class="text-sm leading-6 text-gray-900">
                                        <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                                            <time datetime="2023-03-21">Yesterday</time>
                                            <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                                            <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="relative py-5 pr-6">
                                            <div class="flex gap-x-6">
                                                <svg class="hidden h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div class="flex-auto">
                                                    <div class="flex items-start gap-x-3">
                                                        <div class="text-sm font-medium leading-6 text-gray-900">$14,000.00 USD</div>
                                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                                                    </div>
                                                    <div class="mt-1 text-xs leading-5 text-gray-500">$900.00 tax</div>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                                            <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                                        </td>
                                        <td class="hidden py-5 pr-6 sm:table-cell">
                                            <div class="text-sm leading-6 text-gray-900">SavvyCal</div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Website redesign</div>
                                        </td>
                                        <td class="py-5 text-right">
                                            <div class="flex justify-end">
                                                <a href="javascript://" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                                                    View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #00010, SavvyCal</span>
                                                </a>
                                            </div>
                                            <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#00010</span></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent client list-->
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div class="flex items-center justify-between">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Recent clients</h2>
                        <a href="javascript://" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">View all<span class="sr-only">, clients</span></a>
                    </div>
                    <ul role="list" class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                        <li class="overflow-hidden rounded-xl border border-gray-200">
                            <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="Tuple" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                                <div class="text-sm font-medium leading-6 text-gray-900">Tuple</div>
                                <div class="relative ml-auto">
                                    <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open options</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                        </svg>
                                    </button>

                                    <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                                    <div
                                        class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu-0-button"
                                        tabindex="-1"
                                    >
                                        <!-- Active: "bg-gray-50", Not Active: "" -->
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-0-item-0">View<span class="sr-only">, Tuple</span></a>
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-0-item-1">Edit<span class="sr-only">, Tuple</span></a>
                                    </div>
                                </div>
                            </div>
                            <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Last invoice</dt>
                                    <dd class="text-gray-700"><time datetime="2022-12-13">December 13, 2022</time></dd>
                                </div>
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Amount</dt>
                                    <dd class="flex items-start gap-x-2">
                                        <div class="font-medium text-gray-900">$2,000.00</div>
                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        <li class="overflow-hidden rounded-xl border border-gray-200">
                            <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                <img src="https://tailwindui.com/img/logos/48x48/savvycal.svg" alt="SavvyCal" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                                <div class="text-sm font-medium leading-6 text-gray-900">SavvyCal</div>
                                <div class="relative ml-auto">
                                    <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-1-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open options</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                        </svg>
                                    </button>

                                    <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                                    <div
                                        class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu-1-button"
                                        tabindex="-1"
                                    >
                                        <!-- Active: "bg-gray-50", Not Active: "" -->
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-1-item-0">View<span class="sr-only">, SavvyCal</span></a>
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-1-item-1">Edit<span class="sr-only">, SavvyCal</span></a>
                                    </div>
                                </div>
                            </div>
                            <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Last invoice</dt>
                                    <dd class="text-gray-700"><time datetime="2023-01-22">January 22, 2023</time></dd>
                                </div>
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Amount</dt>
                                    <dd class="flex items-start gap-x-2">
                                        <div class="font-medium text-gray-900">$14,000.00</div>
                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        <li class="overflow-hidden rounded-xl border border-gray-200">
                            <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                <img src="https://tailwindui.com/img/logos/48x48/reform.svg" alt="Reform" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                                <div class="text-sm font-medium leading-6 text-gray-900">Reform</div>
                                <div class="relative ml-auto">
                                    <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-2-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open options</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                                        </svg>
                                    </button>

                                    <!--
                    Dropdown menu, show/hide based on menu state.

                    Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                                    <div
                                        class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu-2-button"
                                        tabindex="-1"
                                    >
                                        <!-- Active: "bg-gray-50", Not Active: "" -->
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-2-item-0">View<span class="sr-only">, Reform</span></a>
                                        <a href="javascript://" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-2-item-1">Edit<span class="sr-only">, Reform</span></a>
                                    </div>
                                </div>
                            </div>
                            <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Last invoice</dt>
                                    <dd class="text-gray-700"><time datetime="2023-01-23">January 23, 2023</time></dd>
                                </div>
                                <div class="flex justify-between gap-x-4 py-3">
                                    <dt class="text-gray-500">Amount</dt>
                                    <dd class="flex items-start gap-x-2">
                                        <div class="font-medium text-gray-900">$7,600.00</div>
                                        <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">Paid</div>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>

    <!-- <main class="max-w-6xl mx-auto px-3 py-5 flex flex-col gap-5">
        <Settings />
    </main> -->

    <Footer />
</template>
