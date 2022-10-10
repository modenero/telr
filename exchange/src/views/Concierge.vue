<template>
    <main class="min-h-screen bg-gradient-to-r from-pink-200 via-purple-400 to-pink-200 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <section class="flex h-screen mt-3 mx-auto bg-gray-700 border-4 border-pink-500 rounded-xl shadow-lg">
            <Destination
                class="mb-10 transition ease-in-out duration-1000 transform translate-x-0"
                :class="aniDestination"
                :request="request"
                @start-request="startRequest"
            />

            <Chooser
                class="absolute bg-white shadow sm:rounded-lg sm:px-10 transition ease-in-out duration-1000 transform translate-x-full opacity-0"
                :class="aniChooser"
                :request="request"
                @set-base="setBase"
            />

            <Monitor
                class="absolute max-w-4xl transition ease-in-out duration-1000 transform translate-x-full"
                :class="aniMonitor"
                :request="request"
                :err="err"
                :response="response"
                @submit-request="submitRequest"
             />

        </section>

        <section class="mt-10 flex flex-col w-3/5 mx-auto">
            <h1 class="text-3xl font-bold text-center">
                Recent Transactions
            </h1>

            <img
                class="mx-auto h-24 w-auto"
                :src="require('@/assets/icon.png')"
                alt="Telr.Exchange Logo"
            />

            <div class="m-3 p-3 border-4 border-pink-500 rounded-xl grid grid-cols-2 gap-4" v-for="tx of txs" :key="tx.id">
                <span class="block text-sm">Amount Expected (from)</span>
                <span class="block text-right font-medium">{{tx.amountExpectedFrom}}</span>

                <span class="block text-sm">Amount Expected (to)</span>
                <span class="block text-right font-medium">{{tx.amountExpectedTo}}</span>

                <span class="block text-sm">Age</span>
                <span class="block text-right font-medium">{{timeAgo(tx.createdAt)}}</span>

                <a :href="tx.trackUrl" target="_blank" class="col-span-2 py-2 border-2 border-pink-700 bg-pink-400 text-blue-100 text-center text-xl font-bold rounded-xl hover:bg-pink-500">
                    Open Tracking Page
                </a>
            </div>
        </section>
    </main>
</template>

<script>
/* Import modules. */
import moment from 'moment'
import superagent from 'superagent'

/* Import components. */
import Chooser from './Concierge/Chooser'
import Destination from './Concierge/Destination'
import Monitor from './Concierge/Monitor'

export default {
    components: {
        Chooser,
        Destination,
        Monitor,
    },
    data: () => {
        return {
            err: null,
            response: null,

            aniChooser: null,
            aniDestination: null,
            aniMonitor: null,

            request: null,
            txs: null,
            numTxs: null,
        }
    },
    methods: {
        startRequest() {
            this.aniDestination = 'delay-200 -translate-x-full opacity-0'

            this.aniChooser = 'delay-300 -translate-x-1/4 opacity-100'

            // console.log('REQUEST', this.request)
        },

        setBase() {
            // console.log('REQUEST (setBase)', this.request)

            this.aniChooser = 'delay-200 -translate-x-full opacity-0'

            this.aniMonitor = 'delay-300 -translate-x-1/4 opacity-100'
        },

        async submitRequest() {
            /* Reset errors. */
            this.err = {}

            // console.log('ORDER (submitOrder)', this.request);

            let params = {
                baseid: this.request['baseid'],
                tradeid: this.request['tradeid'],
                address: this.request['address'],
                amount: this.request['amount'],
            }
            // console.log('SUBMITTING', params)

            /* Build (exchange) API package. */
            let pkg = {
                id: 'telr-exchange',
                jsonrpc: '2.0',
                method: 'createTransaction',
                params,
            }

            /* Request exchange (recent) transactions. */
            const response = await superagent
                .post('https://api.telr.io/v1/exchange')
                // .post('http://127.0.0.1:5700/v1/exchange')
                .set('X-Telr-Address', '39TNrpEKRBQF3A3MS1tPKZjuswSM7yoLYb')
                .set('Content-Type', 'application/json')
                .send(pkg)
                .catch(err => console.error(err)) // eslint-disable-line no-console
            // console.log('RESPONSE', response)

            /* Validate response. */
            if (response && response.body) {
                /* Set body. */
                const body = response.body
                // console.log('BODY', body)

                if (body && body.changelly) {
                    // console.log('DETECTED CHANGELLY RESPONSE', body.changelly)

                    /* Set response. */
                    this.response = body.changelly
                }

                /* Validate errors. */
                if (body.err && body.err.message) {
                    console.error('Exchange error:', body.err.message) // eslint-disable-line no-console

                    this.err = body.err
                }

            }

        },

        timeAgo(_timestamp) {
            return moment.unix(_timestamp).fromNow()
        },

    },
    created: async function () {
        /* Initialize number of transactions. */
        this.numTxs = 0

        /* Initialize status. */
        this.request = {
            status: 'init',
        }

        /* Request exchange (recent) transactions. */
        const response = await superagent
            .get('https://api.telr.io/v1/exchange/txs')
            .catch(err => console.error(err)) // eslint-disable-line no-console
        // console.log('RESPONSE', response);

        if (response.body) {
            // console.log('BODY', response.body)

            this.txs = response.body
        }
    },

}
</script>
