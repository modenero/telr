// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Exchange — Trustless Free Trade',
            meta: [
                { name: 'description', content: 'Trade Your Crypto' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        },
    },

    /* Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',
    ],

    runtimeConfig: {
        public: {
            mexcApiKey: process.env.MEXC_API_KEY,
            mexcApiSecret: process.env.MEXC_API_SECRET,
        },
    }
})
