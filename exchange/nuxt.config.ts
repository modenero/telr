// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nexa Exchange — Trustless Free Trade',
            meta: [
                { name: 'description', content: 'Trade Your Crypto' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: '/js/mixpanel.js' },
            ],
        },
    },

    /* Progressive Web Application Settings */
    pwa: {
        manifest: {
            name: 'Nexa Exchange — Trustless Free Trade',
            short_name: 'Nexa Exchange',
            description: `Trade Your Crypto.`,
            lang: 'en',
            theme_color: '#494454',
            background_color: '#494454',
            // useWebmanifestExtension: false,
        },
        meta: {
            name: 'Exchange — Trustless Free Trade',
            description: `Trade Your Crypto.`,
            author: `Nexa Exchange DAO`,
        },
        // icon: false, // disables the icon module
        workbox: {
            // workboxURL: 'TBD',
            // enabled: true, // FOR DEV PURPOSES ONLY
        },
    },

    /* Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',

        /* Internationalization for Nuxt */
        // '@nuxtjs/i18n',

        /* Progressive Web Application */
        '@kevinmarrec/nuxt-pwa',
    ],

    vite: {
        optimizeDeps: {
            esbuildOptions: {
                target: 'es2020',
                supported: {
                    bigint: true
                },
            }
        },
        build: {
            target: ['es2020'],
        },
    },

    runtimeConfig: {
        public: {
            mexcApiKey: process.env.MEXC_API_KEY,
            mexcApiSecret: process.env.MEXC_API_SECRET,
        },
    },

    /* Set compatibility date. */
    compatibilityDate: '2024-07-04',
})
