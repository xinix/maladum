import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguage = defineStore('language', () => {
  const userLang = window.localStorage.getItem('lang')
  const lang = ref(userLang == null ? 'en' : userLang)

  function save() {
    window.localStorage.setItem('lang', lang.value)
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
