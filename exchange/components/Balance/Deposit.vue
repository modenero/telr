<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

const token = ref({})
const tokenBalance = ref(0)
const exchangeBalance = ref(0)
const depositAmount = ref(null)

const tokenName = computed(() => {
    if (!token.value) {
        return 'n/a'
    }

    return token.value.title
})

const tokenSymbol = computed(() => {
    if (!token.value) {
        return 'n/a'
    }

    return token.value.symbol
})

/* Retrieve current token. */
// token.value = await getToken('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582')
token.value.title = `Ava's DAO`
token.value.symbol = 'AVAS'
// console.log('CURRENT TOKEN', token.value)

/* Retrieve account balance. */
// this.tokenBalance = await this.getWalletBalance('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582', '0x830ad555fCe0547782E14d67d22002082916e660')
// console.log('BALANCE', this.tokenBalance)

/* Retrieve exchange balance. */
// this.exchangeBalance = await this.getExchangeBalance('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582', '0x830ad555fCe0547782E14d67d22002082916e660')
// console.log('BALANCE', this.exchangeBalance)
</script>

<template>
    <main role="tabpanel" class="">
        <div class="grid grid-cols-4">
            <span class="col-span-2 text-xs text-gray-400 border-b border-gray-400">
                Token name
            </span>

            <span class="text-xs text-gray-400 text-right border-b border-gray-400">
                Wallet
            </span>

            <span class="text-xs text-gray-400 text-right border-b border-gray-400">
                Exchange
            </span>

            <span class="mt-2 col-span-2 text-sm text-gray-200 truncate">
                {{tokenName}}
                <span class="text-xs text-gray-400">{{tokenSymbol}}</span>
            </span>

            <span class="mt-2 text-sm text-gray-200 text-right">
                {{tokenBalanceDisplay}}
            </span>

            <span class="mt-2 text-sm text-gray-200 text-right">
                {{exchangeBalanceDisplay}}
            </span>
        </div>

        <div class="mt-3 mb-1 grid grid-cols-2 gap-3">
            <input
                type="number"
                class="w-full flex px-2 py-1 bg-gray-900 border border-gray-200 text-gray-200 text-sm rounded placeholder:text-gray-200"
                placeholder="Amount"
                v-model="depositAmount"
            />

            <button
                class="w-full py-1 bg-yellow-700 border border-gray-200 rounded"
                @click="depositTokens"
            >
                <span class="text-gray-50 text-sm">
                    Deposit
                </span>
            </button>
        </div>
    </main>
</template>
