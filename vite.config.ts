import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    server: {
        host: 'maladum.test',
        open: true,
        port: 8765,
    },
    base: '/maladum/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
    plugins: [
        vue(),
        mkcert(),
        createHtmlPlugin({
            minify: false,
            pages: [
                {
                    filename: 'index.html',
                    template: 'index.html',
                    injectOptions: {
                        data: {
                            version: process.env.npm_package_version,
                        },
                    },
                },
                {
                    filename: '404.html',
                    template: '404.html',
                    injectOptions: {
                        data: {
                            version: process.env.npm_package_version,
                        },
                    },
                },
            ],
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'logo.svg'],
            manifest: {
                name: 'Maladum index',
                short_name: 'Maladum',
                description: 'Awesome index for Maladum inventory items',
                theme_color: '#62929a',
                background_color: '#efecec',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
