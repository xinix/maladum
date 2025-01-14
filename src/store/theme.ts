import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getUserTheme, setUserTheme } from '@/helpers/local-storage.ts'

export const useTheme = defineStore('theme', () => {
    const theme = ref<'dark' | 'light'>(getUserTheme())

    const dark = computed(() => theme.value === 'dark')
    const light = computed(() => theme.value === 'light')

    function toggle() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    function save() {
        setUserTheme(theme.value)
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
