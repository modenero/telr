<template>
    <main class="bg-gray-600 p-3 border-2 border-gray-800 rounded-xl shadow-lg">

        <section>
            <span class="sr-only">Trade Amount (in {{baseid}})</span>

            <div class="mt-1">
                <input
                    v-model="amount"
                    type="text"
                    :placeholder="`Enter your trade amount (in ${baseid})`"
                    class="w-full text-gray-800 text-xl border-2 border-yellow-500 bg-yellow-100 rounded-xl"
                />
            </div>

            <div class="mt-2">
                <div v-if="min">
                    <small class="ml-3 mr-1">MIN TRADE AMOUNT</small>

                    <strong class="text-xl">{{min}}</strong>

                    <small class="ml-1">{{baseid}}</small>

                    <strong v-if="baseUsd" class="ml-1">
                        ${{(baseUsd * min).toFixed(2)}}
                    </strong>
                </div>

                <div v-if="baseid && tradeid">
                    <small class="ml-3 mr-1">TRADE PAIR</small>
                    <strong>{{baseid}}/{{tradeid}}</strong>
                </div>
            </div>

            <div v-if="rate" class="mt-2">
                <small class="ml-3">EXCHANGE RATE</small>
                <div class="ml-3">
                    <strong class="text-lg">1.0</strong> <small>{{baseid}}</small>
                    = <strong class="text-xl">{{rate}}</strong> <small>{{tradeid}}</small>

                    <strong v-if="tradeUsd" class="ml-1">
                        ${{(tradeUsd * rate).toFixed(2)}}
                    </strong>
                </div>
            </div>

            <div v-if="err && err.message" class="mt-2 p-3 border-4 border-red-500 bg-red-100 text-red-600 font-bold rounded-xl">
                <h3 class="text-xs font-bold">EXCHANGE ERROR</h3>
                <blockquote class="text-lg">{{err && err.message}}</blockquote>
            </div>
        </section>

        <section class="mt-6">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>

                <div class="my-3 relative flex justify-center">
                    <span class="px-3 bg-white text-gray-500 text-lg rounded-xl">
                        Please review your order details
                    </span>
                </div>
            </div>

        </section>

        <div class="mt-2">
            <div v-if="trackingid" class="ml-3">
                <small>TRACKING URL</small>
                <a :href="'https://changelly.com/track/' + trackingid" target="_blank" class="block text-blue-300 font-bold hover:underline">
                    https://changelly.com/track/{{trackingid}}</a>
            </div>

            <div v-if="depositAddress" class="mt-2 ml-3">
                <small class="">DEPOSIT ADDRESS</small>
                <strong class="block">{{depositAddress}}</strong>
            </div>

            <div v-if="payoutEstimate" class="mt-2 ml-3">
                <small class="">PAYOUT ESTIMATE</small>
                <strong class="ml-2 text-xl">{{payoutEstimate}}</strong>
            </div>
        </div>

        <pre class="mt-3 p-3 text-gray-800 border-4 bg-yellow-200 border-yellow-400 rounded-xl">
{{JSON.stringify(debug, null, 2)}}
        </pre>

        <section class="my-3 px-3 flex flex-row justify-center justify-between">
            <div class="flex flex-row justify-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />

                <label for="remember-me" class="ml-2 block text-sm text-gray-200">
                    I agree to <span class="underline cursor-pointer">Terms of Use &amp; Conditions</span>.
                </label>
            </div>

            <div class="text-sm">
                <a href="javascript://" class="font-medium text-lg text-gray-200 hover:text-blue-200">
                    Need help?
                </a>
            </div>
        </section>

        <div class="flex justify-center my-3">
            <button @click="submitRequest" class="py-2 px-5 text-3xl font-bold text-gray-800 text-center border-4 border-green-500 bg-green-200 rounded-xl">
                Submit Your Request
            </button>
        </div>

    </main>
</template>

<script>
/* Import modules. */
import superagent from 'superagent'

export default {
    props: {
        err: Object,
        request: Object,
        response: Object,
    },
    data: () => {
        return {
            aniTest: null,
            waiting: null,

            amount: null,
            min: null,
            rate: null,

            baseid: null,
            tradeid: null,

            baseUsd: null,
            tradeUsd: null,

            exchangeid: null,
            trackingid: null,
            waitingid: null,
            depositAddress: null,
            payoutEstimate: null,
        }
    },
    watch: {
        amount: function (_amount) {
            this.request['amount'] = _amount
        },

        request: {
            handler() {
                this.updateMin()
                this.updateRate()
            },
            deep: true,
        },

        response: {
            handler() {
                this.updateTracking()
                this.handleWaiting()
            },
            deep: true,
        },

    },
    computed: {
        debug() {
            if (this.waiting) return this.waiting

            return this.request
        },

    },
    methods: {
        back() {
            this.$emit('back')
        },

        submitRequest() {
            this.$emit('submit-request')
        },

        async updateMin() {
            let result

            const baseid = this.request.baseid
            const tradeid = this.request.tradeid

            if (!baseid || !tradeid) return

            result = await superagent
                .get(`https://api.telr.io/v1/exchange/min/${baseid}/${tradeid}`)
                // .get(`http://127.0.0.1:5700/v1/exchange/min/${baseid}/${tradeid}`)
                .catch(err => console.error(err)) // eslint-disable-line no-console
            // console.log('UPDATE MIN (result):', result)

            if (result && result.body) {
                this.min = result.body.min

                this.baseid = result.body.baseid
                this.tradeid = result.body.tradeid

            }

            if (this.min) {
                result = await superagent
                    .get(`https://api.telr.io/v1/ticker/quote/${baseid}`)
                    .catch(err => console.error(err)) // eslint-disable-line no-console
                // console.log('BASE QUOTE (result):', result)


                if (result && result.body) {
                    this.baseUsd = result.body.price
                }

            }
        },

        async updateRate() {
            const baseid = this.request.baseid
            const tradeid = this.request.tradeid

            if (!baseid || !tradeid) return

            let result = await superagent
                .get(`https://api.telr.io/v1/exchange/rate/${baseid}/${tradeid}`)
                // .get(`http://127.0.0.1:5700/v1/exchange/rate/${baseid}/${tradeid}`)
                .catch(err => console.error(err)) // eslint-disable-line no-console
            // console.log('UPDATE RATE (result):', result)

            if (result && result.body) {
                this.rate = result.body.result
            }

            if (this.rate) {
                result = await superagent
                    .get(`https://api.telr.io/v1/ticker/quote/${tradeid}`)
                    .catch(err => console.error(err)) // eslint-disable-line no-console
                // console.log('TRADE QUOTE (result):', result)


                if (result && result.body) {
                    this.tradeUsd = result.body.price
                }

            }
        },

        updateTracking() {
            if (this.response) {
                const changelly = this.response
                // console.log('UPDATE TRACKING', changelly)

                /*Set exchange id. */
                this.exchangeid = 'changelly'

                /* Set tracking id. */
                this.trackingid = changelly.id

                /* Set deposit address. */
                this.depositAddress = changelly.payinAddress

                /* Set deposit address. */
                this.payoutEstimate = changelly.amountExpectedTo

            } else {
                console.error('Tracking update FAILED!') // eslint-disable-line no-console
            }
        },

        async handleWaiting() {
            if (!this.waitingid) {
                this.waitingid = setInterval(this.handleWaiting, 5000)
            }

            let result = await superagent
                .get(`https://api.telr.io/v1/exchange/txs/${this.trackingid}`)
                // .get(`http://127.0.0.1:5700/v1/exchange/txs/${this.trackingid}`)
                .catch(err => console.error(err)) // eslint-disable-line no-console
            // console.log('WAITING (result):', result)

            if (result && result.body) {
                this.waiting = result.body
            }
        },


    },

}
</script>
