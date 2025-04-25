import { createI18n } from "vue-i18n"
import en from '../locales/en.json'
import nanTW from '../locales/nan-tw.json'
import zh from '../locales/zh.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'nanTW',
    globalInjection: true,
    messages: {
      zh,
      en,
      'nan-TW': nanTW,
    }
})

export default i18n