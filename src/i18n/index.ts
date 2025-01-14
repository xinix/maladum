import { createI18n } from 'vue-i18n'
import { getUserLanguage } from '@/helpers/local-storage'
import en from '@/locales/en.json'

const locale = getUserLanguage()

const i18n = createI18n({
    locale: locale == null ? 'en' : locale,
    messages: { en },
    fallbackLocale: 'en',
    fallbackWarn: false,
    warnHtmlInMessage: 'off',
    warnHtmlMessage: 'off',
})

export default i18n
