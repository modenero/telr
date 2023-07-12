<script setup lang="ts">
/* Import modules. */
import { getTokenInfo } from '@nexajs/rostrum'

const isShowingDeposit = ref(true)
const isShowingWithdraw = ref(false)
const isShowingStaking = ref(false)

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
        <div class="text-lg text-yellow-500 font-medium">
            Instant Buy {{assetName}}
        </div>

        <h2 class="flex text-base gap-1">
            <span class="text-purple-400">Nexa</span>
            <span class="text-yellow-400">Exchange</span>
            <span class="text-gray-200">Balance</span>
        </h2>

        <div class="mt-2">
            <ul class="flex justify-between text-sm text-gray-200 border-b border-gray-500" role="tablist">
                <li class="">
                    <a class="active" aria-controls="deposit" aria-selected="true">
                        Deposit
                    </a>
                </li>

                <li class="">
                    <a class="" aria-controls="withdraw" aria-selected="false">
                        Withdraw
                    </a>
                </li>

                <li class="">
                    <a class="" aria-controls="staking" aria-selected="false">
                        Staking/Pools
                    </a>
                </li>
            </ul>

            <section class="mt-3">
                <BalanceDeposit v-if="isShowingDeposit" />

                <div v-if="isShowingWithdraw" role="tabpanel" class="tab-pane fade" id="withdraw">
                    <table class="table table-borderless table-balances">
                        <thead>
                            <tr>
                                <th style="width:50%">Token name</th>
                                <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance in your personal Ethereum wallet, which you have connected to Nexa Exchange in the account dropdown (upper right).">Wallet</th>
                                <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="This is the balance you have deposited from your personal Ethereum wallet to the Nexa Exchange smart contract.">Exchange</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <a href="javascript://" class="nowrap">{{tokenName}}<span class="d-md-none"> ({{tokenSymbol}})</span></a>
                                </td>
                                <td>
                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.0000</span>
                                </td>
                                <td>
                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">0.0000</span>
                                </td>
                            </tr>

                            <tr class="">
                                <td>
                                    <div class="form-group">
                                        <input type="number" class="form-control form-control-sm" id="cacheInBaseToken" placeholder="Amount" />
                                    </div>
                                </td>

                                <td colspan="2">
                                    <button type="button" class="btn btn-info btn-sm btn-block" @click="withdraw">
                                        Withdraw
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="isShowingStaking" role="tabpanel" class="tab-pane fade" id="staking">
                    <table class="table table-borderless table-balances">
                        <thead>
                            <tr>
                                <th style="width:50%">Token name</th>
                                <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="">Wallet</th>
                                <th style="width:25%" data-toggle="tooltip" data-placement="bottom" title="">Exchange</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <a href="javascript://" class="nowrap">{{tokenName}}
                                        <span class="d-md-none">
                                            ({{tokenSymbol}})
                                        </span>
                                    </a>
                                </td>

                                <td>
                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">
                                        0.0000
                                    </span>
                                </td>

                                <td>
                                    <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="0.000000000000">
                                        0.0000
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="3">
                                    <div class="form-row balance-inline-form">
                                        <div class="col-sm-4 form-group">
                                            <input
                                                type="number"
                                                class="form-control form-control-sm"
                                                id="validationDefault01"
                                                value=""
                                                placeholder="Amt"
                                            >
                                        </div>

                                        <div class="col-sm-5 form-group">
                                            <input
                                                type="text"
                                                class="form-control form-control-sm"
                                                id="validationDefault02"
                                                value=""
                                                placeholder="Addr"
                                            >
                                        </div>

                                        <div class="col-sm-3">
                                            <button class="btn btn-info btn-sm btn-block">
                                                Stake
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

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
