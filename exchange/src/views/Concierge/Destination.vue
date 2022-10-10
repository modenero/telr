<template>
    <main class="w-96 p-3">
        <div>
            <div class="p-3 flex justify-center">
                <h2 class="text-2xl font-bold">
                    Trade 100+ EXCHANGES from the TELR Concierge
                </h2>
            </div>

            <p class="w-full text-sm my-2">
                TELR is an exchange aggregator, offering you the best trade rates from:
                <strong>THORChain, instant, decentralized and trustless</strong> exchanges.
            </p>

            <div class="flex justify-end">
                <button class="my-1 py-1 px-3 bg-pink-700 text-sm font-bold border-2 border-pink-500 rounded-lg">
                    Need help?
                </button>
            </div>
        </div>

        <div class="mt-1">
            <span class="sr-only">Destination account / address</span>

            <input
                v-model="address"
                type="text"
                placeholder="Enter the destination address"
                class="block w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div class="mt-6">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>

                <div class="relative flex justify-center text-sm">
                    <span class="py-1 px-3 bg-gray-50 text-gray-500 font-bold rounded-lg">
                        Please select from the options below
                    </span>
                </div>
            </div>

        </div>

        <div class="flex gap-4 my-3 p-3 border-4 border-purple-500 bg-gray-700 rounded-xl">
            <div @click="setTradeCurrency('BCH')" class="w-24 cursor-pointer group">
                <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                    <span class="sr-only">Exchange Bitcoin Cash</span>

                    <!-- source: https://cryptofonts.com/font.php -->
                    <i class="cf cf-bch text-6xl text-green-600 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                </div>

                <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                    Bitcoin Cash
                    <span class="block">BCH</span>
                </span>
            </div>

            <div @click="setTradeCurrency('BNBBSC')" class="w-24 cursor-pointer group">
                <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                    <span class="sr-only">Exchange Binance Smart Chain</span>

                    <!-- source: https://cryptofonts.com/font.php -->
                    <i class="cf cf-bnb text-6xl text-yellow-600 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                </div>

                <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                    Binance
                    <span class="block">BSC</span>
                </span>
            </div>

        </div>

        <div>
            <button
                @click="startRequest"
                class="w-full flex justify-center py-2 px-4 border-4 border-purple-200 rounded-xl shadow-lg text-2xl font-medium text-gray-100 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Start a New Request
            </button>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        request: Object,
    },
    data: () => {
        return {
            aniTest: null,
            address: null,
            amount: null,
        }
    },
    watch: {
        address: function (_address) {
            console.log('CHANGED ADDRESS', _address)

            let parts
            let tokenid
            let address

            if (_address.includes(':')) {
                parts = _address.split(':')

                tokenid = parts[0].toLowerCase()
                address = parts[1]

                switch(tokenid) {
                case 'avalanche':
                    this.request['tradeid'] = 'AVAXC'
                    this.address = address
                    break
                case 'bitcoincash':
                    this.request['tradeid'] = 'BCH'
                    this.address = address
                    break
                case 'dash':
                    this.request['tradeid'] = 'DASH'
                    this.address = address
                    break
                }
            }
            console.log('CHANGED TOKENID', tokenid)
        },

    },
    methods: {
        startRequest() {
            this.request['status'] = 'tradeid-verified'

            this.request['address'] = this.address
            this.request['amount'] = this.amount

            this.$emit('start-request')

        },

        setTradeCurrency(_tradeid) {
            this.request['status'] = 'tradeid-verified'
            this.request['tradeid'] = _tradeid

            this.$emit('set-tradeid')
        },

    },

}
</script>
