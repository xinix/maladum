import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const TokenPage = () => import('@/pages/TokenPage.vue')
const SettingsPage = () => import('@/pages/SettingsPage.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: { search: true },
    },
    {
        path: '/item/:slug',
        component: TokenPage,
        name: 'token',
        props: true,
        meta: { search: true, back: true },
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsPage,
        meta: { back: true },
    },
]

export function setupRouter() {
    const router = createRouter({
        history: createWebHistory('/maladum/'),
        routes,
    })
    router.afterEach(() => {
        const el = document.getElementById('app')

        if (el != null) {
            setTimeout(() => {
                window.scrollTo({
                    top: el.offsetTop,
                    behavior: 'smooth',
                })
            }, 200)
        }
    })
    return router
}
