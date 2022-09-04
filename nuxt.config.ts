import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: './client',

    ssr: true,

    meta: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },

    modules: [
        // '@nuxtjs/auth-next',
    ],

    // auth: {
    //     strategies: {
    //         laravelSanctum: {
    //             provider: 'laravel/sanctum',
    //             url: process.env.APP_URL || 'http://localhost:80',
    //         },
    //     },
    // },

})
