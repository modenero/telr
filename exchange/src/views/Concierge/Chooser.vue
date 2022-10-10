<template>
    <main class="p-2">

        <section class="my-3 p-1 border-4 border-gray-500 bg-gray-800 rounded-xl shadow-xl">
            <div class="my-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>

                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 border-2 border-gray-400 bg-gray-200 text-gray-800 font-bold rounded-xl">
                            YOUR MOST RECENT TRADES
                        </span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-3 px-1">

                <div @click="setBaseCurrency('BCH')" class="cursor-pointer group">
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

                <div @click="setBaseCurrency('ETH')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Ethereum</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-eth text-6xl text-indigo-400 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Ethereum
                        <span class="block">ETH</span>
                    </span>
                </div>

                <div @click="setBaseCurrency('BTC')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Legacy Bitcoin</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-btc text-6xl text-yellow-500 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Legacy Bitcoin
                        <span class="block">BTC</span>
                    </span>
                </div>

            </div>
        </section>

        <section class="my-3 p-1 border-4 border-gray-500 bg-gray-800 rounded-xl shadow-xl">
            <div class="my-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300 group-hover:bg-blue-800 group-hover:text-gray-100"></div>
                    </div>

                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 border-2 border-gray-400 bg-gray-200 text-gray-800 font-bold rounded-xl">
                            NOW TRENDING <small class="font-bold">(by daily volume)</small>
                        </span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-3 px-1">

                <div @click="setBaseCurrency('DOGE')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Doge</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-doge text-6xl text-yellow-600 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Doge
                        <span class="block">DOGE</span>
                    </span>
                </div>

                <div @click="setBaseCurrency('USDC')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange USDC</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-usdc text-6xl text-yellow-400 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Coinbase
                        <span class="block">USDC<small>.AVAX</small></span>
                    </span>
                </div>

                <div @click="setBaseCurrency('USDT')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange USDT</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-usdt text-6xl text-indigo-400 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Tether
                        <span class="block">USDT<small>.ETH</small></span>
                    </span>
                </div>

            </div>
        </section>

        <section class="my-3 p-1 border-4 border-gray-500 bg-gray-800 rounded-xl shadow-xl">
            <div class="my-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>

                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 border-2 border-gray-400 bg-gray-200 text-gray-800 font-bold rounded-xl">
                            TOP 20 CRYPTOS <small class="font-bold">(by market cap)</small>
                        </span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-3 px-1">

                <div @click="setBaseCurrency('AVAXC')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Avalanche</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-avax text-6xl text-red-600 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Avalanche (C-chain)
                        <span class="block">AVAX</span>
                    </span>
                </div>

                <div @click="setBaseCurrency('XMR')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Monero</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-xmr text-6xl text-yellow-500 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Monero
                        <span class="block">XMR</span>
                    </span>
                </div>

                <div @click="setBaseCurrency('DASH')" class="cursor-pointer group">
                    <div class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-sm font-medium text-gray-500 group-hover:bg-blue-800">
                        <span class="sr-only">Exchange Dash</span>

                        <!-- source: https://cryptofonts.com/font.php -->
                        <i class="cf cf-dash text-6xl text-blue-700 group-hover:bg-blue-800 group-hover:text-gray-100"></i>
                    </div>

                    <span class="mt-1 block text-xs text-center text-gray-100 font-bold">
                        Dash
                        <span class="block">DASH</span>
                    </span>
                </div>

            </div>
        </section>

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
        }
    },
    methods: {
        setBaseCurrency(_base) {
            this.request['status'] = 'base-verified'
            this.request['baseid'] = _base

            this.$emit('set-base')
        },

    },

}
</script>
