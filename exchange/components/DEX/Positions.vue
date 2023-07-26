<script setup lang="ts">
/* Import modules. */
import { getTokenInfo } from '@nexajs/rostrum'

const isShowingDeposit = ref(false)
const isShowingWithdraw = ref(false)
const isShowingStaking = ref(true)

const assetid = ref(null)
const assetName = ref(null)

/* Initialize route. */
const route = useRoute()
// console.log('ROUTE', route)
console.log('PARAMS', route.params)

/* Set (route) path. */
assetid.value = route.params.assetid
console.log('assetid', assetid.value)


const init = async () => {
    let info

    if (assetid.value.length > 6) {
        info = await getTokenInfo(assetid.value)
        console.log('TOKEN INFO', info)
    } else {
        assetName.value = `Ava's Cash`
    }

    if (info) {
        assetName.value = info.name
    }
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
    <main class="px-2 py-1 bg-gradient-to-b from-gray-900 to-gray-700 border-2 border-gray-500 rounded-lg">
        <div class="text-sm text-yellow-500 font-medium uppercase tracking-widest">
            My <span class="text-xl text-yellow-300">{{assetName}}</span> Positions
        </div>

        <!-- <h2 class="flex text-base gap-1">
            <span class="text-purple-400">Nexa</span>
            <span class="text-yellow-400">Exchange</span>
            <span class="text-gray-200">Balance</span>
        </h2> -->

        <div class="mt-2">
            <ul class="flex justify-around text-sm text-gray-200 border-b border-gray-500" role="tablist">
                <li class="">
                    <a class="active" aria-controls="deposit" aria-selected="true">
                        Active
                    </a>
                </li>

                <li class="">
                    <a class="" aria-controls="withdraw" aria-selected="false">
                        Strategies
                    </a>
                </li>

                <li class="">
                    <a class="" aria-controls="staking" aria-selected="false">
                        History
                    </a>
                </li>
            </ul>

            <section class="mt-3 flex flex-col gap-2">
                <div v-if="isShowingStaking" class="flex flex-col gap-2">
                    <section>
                        <h3 class="text-gray-200 text-4xl font-medium tracking-tighter">
                            0.048
                        </h3>

                        <h4 class="text-gray-400 text-sm font-medium">
                            ~$15.00 (i)
                        </h4>
                    </section>

                    <section>
                        <h4 class="text-gray-400 text-xs font-medium uppercase tracking-widest">
                            Today's Profit (i)
                        </h4>

                        <h3 class="text-gray-200 text-lg font-medium tracking-tighter">
                            +$0.88 / +$0.32%
                        </h3>
                    </section>
                </div>

                <div class="flex flex-row justify-around text-sm text-amber-900 font-light">
                    <button class="px-3 py-1 bg-amber-300 rounded shadow">
                        Deposit
                    </button>

                    <button class="px-3 py-1 bg-amber-300 rounded shadow">
                        Withdraw
                    </button>

                    <button class="px-3 py-1 bg-amber-300 rounded shadow">
                        Transfer
                    </button>
                </div>

            </section>
        </div>
    </main>
</template>

<script lang="ts">
/* Import modules. */
import numeral from 'numeral'

export default {
    computed: {
        tokenBalanceDisplay() {
            if (!this.tokenBalance) {
                return '0.0000'
            }

            const units = this.tokenBalance.units
            const decimals = this.tokenBalance.decimals

            const amount = parseFloat(units / (1 * 10**decimals))

            return numeral(amount).format('0,0[.]0000')
        },

        exchangeBalanceDisplay() {
            if (!this.exchangeBalance) {
                return '0.0000'
            }

            const units = this.exchangeBalance.units
            const decimals = this.exchangeBalance.decimals

            const amount = parseFloat(units / (1 * 10**decimals))

            return numeral(amount).format('0,0[.]0000')
        },

    },
    methods: {
        // ...mapActions('utils', [
        //     'toast',
        // ]),

        depositTokens() {
            if (typeof this.depositAmount === 'undefined' || this.depositAmount === 0 || this.depositAmount === null) {
                // this.toast(['Error!', 'Please enter a token amount', 'danger'])

                // return Swal.fire({
                //     title: 'Deposit Error!',
                //     text: `Please enter the amount of tokens you want to deposit.`,
                //     icon: 'error',
                //     confirmButtonColor: '#3085d6',
                //     confirmButtonText: 'Okay'
                // })
            }

            /* Build deposit package. */
            // const pkg = {
            //     address: '0x505A442B3E3E9AEDF06D54572a295F8D64f8F582',
            //     amount: this.depositAmount,
            // }

            /* Deposit tokens. */
            // this.deposit(pkg) // KBBQ Token (Ropsten)

        },

        withdraw() {
            // console.log('Ready to withdraw')

        },

    },
}
</script>
