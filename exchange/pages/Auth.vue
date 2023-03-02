<script setup>
/* Import modules. */
import QRCode from 'qrcode'
import { ref } from 'vue'

const authString = ref(null)
// if (authenticated) {
//     return this.$router.push('/')
// }

/* Initialize social medial logins. */
let bannerUrl = ref(null)
let enableSocials = ref(false)

// bannerUrl.value = 'https://images.unsplash.com/photo-1542438927-433fdaaec56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
bannerUrl.value = 'https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
// bannerUrl.value = 'https://images.unsplash.com/photo-1600408987023-15d4ec3a9499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80'

authString.value = 'hey there Nexican!'

const qr = computed(() => {
    let dataString

    dataString = authString.value

    /* Initialize (string) value. */
    let strValue = ''

    /* Initialize scanner parameters. */
    const params = {
        type: 'svg',
        width: 300,
        height: 300,
        color: {
            dark: '#000',
            light: '#fff'
        }
    }

    QRCode.toString(dataString, params, (err, value) => {
        if (err) {
            return console.error('QR Code ERROR:', err) // eslint-disable-line no-console
        }

        /* Set (string) value. */
        strValue = value
    })

    /* Return (string) value. */
    return strValue
})
</script>

<template>
    <main class="main-body flex-1 my-5 p-3 max-w-5xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-indigo-500 rounded-xl shadow-md">
        <div class="flex flex-1 flex-col justify-center py-6 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <section class="flex flex-col items-center">
                    <img
                        class="h-14 w-auto"
                        src="~/assets/images/logo.png"
                        alt="Telr Exchange Logo"
                    />

                    <h2 class="mt-6 text-3xl font-bold tracking-tight text-rose-400">
                        Authorization Required
                    </h2>

                    <h3 class="mt-3 px-10 text-base font-medium text-gray-700 text-center">
                        Please scan the QR Code shown below with your Wallet/ID app
                    </h3>

                    <p class="hidden mt-2 text-sm text-gray-600">
                        Or
                        <a href="javascript://" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
                    </p>
                </section>

                <section class="mt-7 flex justify-center">
                    <div
                        class="w-fit border-4 border-rose-500 rounded-xl overflow-hidden shadow-md"
                        v-html="qr"
                    />
                </section>
            </div>
        </div>
    </main>
</template>

<script>
// /* Import components. */
// import Navbar from '@/components/Navbar.vue'

// export default {
//     components: {
//         Navbar,
//     },
//     data: () => {
//         return {
//             bannerUrl: null,
//             email: null,
//             enableSocials: null
//         }
//     },
//     computed: {
//         authenticated () {
//             return this.$store.state.profile.authenticated
//         },

//     },
//     methods: {
//         async signIn () {
//             if (!this.email) {
//                 return alert('Please enter an email address')
//             }

//             /* Request email auth. */
//             await this.$store.dispatch('profile/signin', { email: this.email })

//             if (this.authenticated) {
//                 return this.$router.push('/')
//             }
//         }
//     },
//     created: function () {
//     },
//     mounted: function () {
//         //
//     },
// }
</script>
