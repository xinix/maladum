import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserLanguage, setUserLanguage } from '@/helpers/local-storage.ts'

export const useLanguage = defineStore('language', () => {
    const userLang = getUserLanguage()
    const lang = ref(userLang == null ? 'en' : userLang)

    function save() {
        setUserLanguage(lang.value)
    }

    function apply() {
        const el = document.querySelector('html')
        if (!el) return
        el.setAttribute('lang', lang.value)
    }

    return {
        lang,
        save,
        apply,
    }
})
