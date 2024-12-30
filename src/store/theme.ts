import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTheme = defineStore('theme', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const defaultTheme = prefersDark ? 'dark' : 'light'
  const theme = ref<'dark' | 'light'>(
    (window.localStorage.getItem('theme') as 'dark' | 'light') || defaultTheme,
  )

  const dark = computed(() => theme.value === 'dark')
  const light = computed(() => theme.value === 'light')

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function save() {
    window.localStorage.setItem('theme', theme.value)
  }

  function apply() {
    /* html[data-theme='light'] */
    const el = document.querySelector('html')
    if (!el) return
    if (light.value) {
      el.dataset.theme = 'light'
    } else {
      delete el.dataset.theme
    }
  }

  return { theme, dark, light, toggle, save, apply }
})
