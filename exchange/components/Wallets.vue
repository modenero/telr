<script setup>
/* Import modules. */
// import CryptoJS from 'crypto-js'

// const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig.public.mexcApiSecret)
// console.log(runtimeConfig.public.mexcApiSecret)

// const mexcApiKey = runtimeConfig.public.mexcApiKey
// const mexcApiSecret = runtimeConfig.public.mexcApiSecret

// const timestamp = new Date().getTime().toString()

// const params = 'timestamp=' + timestamp
// console.log(`Params: ${params}`)

// const sign = CryptoJS.enc.Hex.stringify(
//     CryptoJS.HmacSHA256(params, mexcApiSecret)
// )

// console.log(`Request-Time: ${timestamp}`)
// console.log(`mexcApiKey: ${mexcApiKey}`)
// console.log(`Signature: ${sign}`)

// const ENDPOINT = 'https://api.mexc.com/api/v3'

// const target = `${ENDPOINT}/account?signature=${sign}&timestamp=${timestamp}`

// const account = $fetch(target, {
//     header: {
//         'X-MEXC-APIKEY': mexcApiKey,
//         'Content-Type': 'application/json',
//     }
// })
// console.log('MEXC ACCOUNT', account)


</script>

<template>
    <main class="main-body flex-1 p-3 max-w-5xl mx-auto">
        <h1 class="text-4xl font-medium">
            My Wallets
        </h1>

        <p class="mt-3">
            Nexa Exchange wallets are 100% non-custodial.
            Your Keys. Your Coins.
        </p>

        <button>
            Create Web (Browser) Wallet
        </button>

        <button>
            Create Ledger Wallet
        </button>

        <section>
            <h2>MEXC</h2>

        </section>
    </main>
</template>
