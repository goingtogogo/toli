import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en.json'
import ru from './translations/ru.json'

const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
}

const deviceLanguage = Localization.getLocales()[0]?.languageCode || 'en'
const defaultLanguage = deviceLanguage === 'ru' ? 'ru' : 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'en',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
})

AsyncStorage.getItem('preferredLanguage').then((savedLanguage) => {
  if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
    i18n.changeLanguage(savedLanguage)
  }
})

export default i18n
