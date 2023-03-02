<script setup lang="ts">
/* Import modules. */
import { ref } from 'vue'

const sellAmount = ref(null)
const sellPrice = ref(null)
const sellTotal = ref(null)

const expirationTime = ref(null)
const expirationMeasure = ref(null)

/* Retrieve current token. */
// this.token = await this.getToken('0x505A442B3E3E9AEDF06D54572a295F8D64f8F582')
// console.log('CURRENT TOKEN', this.token)

expirationTime.value = 24
expirationMeasure.value = 'hours'

</script>

<template>
    <main role="tabpanel" class="">
        <div class="form-group">
            <label for="sellAmount">
                Amount of {{tokenSymbol}} tokens to sell
            </label>

            <div class="input-group">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    id="sellAmount"
                    v-model="sellAmount"
                >

                <div class="input-group-append">
                    <span class="input-group-text">
                        {{tokenSymbol}}
                    </span>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="sellPrice">
                Price per {{tokenSymbol}} token
            </label>

            <div class="input-group">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    id="sellPrice"
                    v-model="sellPrice"
                    @blur="updateSellTotal"
                >

                <div class="input-group-append">
                    <span class="input-group-text">
                        USDT
                    </span>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="sellTotal">
                Total order value
            </label>

            <div class="input-group">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    id="sellTotal"
                    v-model="sellTotal"
                    @blur="updateSellPrice"
                >

                <div class="input-group-append">
                    <span class="input-group-text">
                        USDT
                    </span>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="sellExpires" data-toggle="tooltip" data-placement="bottom" title="">
                Order expiration time
            </label>

            <div class="input-group">
                <input
                    type="text"
                    class="form-control form-control-sm"
                    id="sellExpires"
                    :value="expirationTime" readonly
                >

                <div class="input-group-append">
                    <span class="input-group-text">
                        {{expirationMeasure}}
                    </span>
                </div>
            </div>
        </div>

        <span class="text-warning"></span>

        <div class="form-group">
            <button
                type="button"
                class="btn btn-danger btn-sm btn-block"
                @click="sellOrder"
            >
                Create Sell Order
            </button>
        </div>
    </main>
</template>
