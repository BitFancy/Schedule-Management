// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title:    'neodeliver',
            charset:  'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
    ],
    css: ['~/assets/css/global.scss'],
})