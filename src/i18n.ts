import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/pt/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN }
}

const navigatorLang = navigator.language == 'pt-BR' || navigator.language == 'en-US' ? navigator.language.split('-')[0] : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: navigatorLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
})

export default i18n