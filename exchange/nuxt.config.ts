// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nexa Exchange — Moving Your Crypto Safu',
            meta: [
                { name: 'description', content: 'Enjoy the experience of Trustless & Free trade of your precious assets.' },
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
            name: 'Nexa Exchange — Moving Your Crypto Safu',
            short_name: 'Exchange',
            description: `Enjoy the experience of Trustless & Free trade of your precious assets.`,
            lang: 'en',
            theme_color: '#494454',
            background_color: '#494454',
            // useWebmanifestExtension: false,
        },
        meta: {
            name: 'Exchange — Moving Your Crypto Safu',
            description: `Enjoy the experience of Trustless & Free trade of your precious assets.`,
            author: `TΞLR Exchange`,
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

    // vite: {
    //     optimizeDeps: {
    //         esbuildOptions: {
    //             target: 'es2020',
    //             supported: {
    //                 bigint: true
    //             },
    //         }
    //     },
    //     build: {
    //         target: ['es2020'],
    //     },
    // },

    runtimeConfig: {
        public: {
            mexcApiKey: process.env.MEXC_API_KEY,
            mexcApiSecret: process.env.MEXC_API_SECRET,
        },
    },

    /* Route Rules */
    routeRules: {
        /* Add CORS headers to root. */
        // NOTE: We need this to make <token>.json available to web apps.
        // '/**': { cors: true },

        /* Disable server-side rendering for ALL areas. */
        '/**': { ssr: false },

        /* Disable server-side rendering for Admin area. */
        // '/admin/**': { ssr: false },
    },

    /* Set compatibility date. */
    compatibilityDate: '2024-09-08',
})
