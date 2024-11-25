import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { search: true },
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
          top: 0,
          behavior: 'smooth',
        })
      }, 200)
    }
  })
  return router
}
