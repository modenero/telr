<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

const buyAmount = ref(null)
const buyPrice = ref(null)
const buyTotal = ref(null)

const expirationTime = ref(null)
const expirationMeasure = ref(null)

/* Retrieve current token. */
// this.token = await this.getToken('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582')
// console.log('CURRENT TOKEN', this.token)

expirationTime.value = 24
expirationMeasure.value = 'hours'



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

</script>

<template>
    <main role="tabpanel" class="">
        <div class="">
            <h3 class="my-1 text-gray-400 text-xs">
                Amount of {{tokenSymbol}} tokens to buy
            </h3>

            <div class="relative">
                <input
                    type="number"
                    class="w-full flex pl-2 pr-12 py-2 bg-gray-900 border border-gray-200 text-gray-200 text-sm rounded placeholder:text-gray-200"
                    placeholder="Amount"
                    v-model="buyAmount"
                />

                <div class="-mt-8 mx-2 w-fit absolute right-0">
                    <span class="text-gray-400 text-sm">
                        {{tokenSymbol}}
                    </span>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <h3 class="my-1 text-gray-400 text-xs">
                Price per {{tokenSymbol}} token
            </h3>

            <div class="relative">
                <input
                    type="number"
                    class="w-full flex pl-2 pr-12 py-2 bg-gray-900 border border-gray-200 text-gray-200 text-sm rounded placeholder:text-gray-200"
                    placeholder="Amount"
                    v-model="updateBuyTotal"
                />

                <div class="-mt-8 mx-2 w-fit absolute right-0">
                    <span class="text-gray-400 text-sm">
                        USDT
                    </span>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <h3 class="my-1 text-gray-400 text-xs">
                Total order value
            </h3>

            <div class="relative">
                <input
                    type="number"
                    class="w-full flex pl-2 pr-12 py-2 bg-gray-900 border border-gray-200 text-gray-200 text-sm rounded placeholder:text-gray-200"
                    placeholder="Amount"
                    v-model="updateBuyPrice"
                />

                <div class="-mt-8 mx-2 w-fit absolute right-0">
                    <span class="text-gray-400 text-sm">
                        USDT
                    </span>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <h3 class="my-1 text-gray-400 text-xs">
                Order expiration time
            </h3>

            <div class="relative">
                <input
                    type="number"
                    class="w-full flex pl-2 pr-12 py-2 bg-gray-900 border border-gray-200 text-gray-200 text-sm rounded placeholder:text-gray-200"
                    placeholder="Amount"
                    :value="expirationTime" readonly
                />

                <div class="-mt-8 mx-2 w-fit absolute right-0">
                    <span class="text-gray-400 text-sm">
                        {{expirationMeasure}}
                    </span>
                </div>
            </div>
        </div>

        <button
            class="group mt-5 mb-2 py-2 w-full flex justify-center border border-green-500 rounded hover:bg-green-500"
            @click="buyOrder"
        >
            <span class="text-base text-gray-200 font-medium group-hover:text-green-900">
                Create Buy Order
            </span>
        </button>
    </main>
</template>
