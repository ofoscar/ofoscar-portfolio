import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Translation resources
import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'], // languages to not persist (i.e. cimode)
    },

    interpolation: {
      escapeValue: false,
    },

    // Ensure language changes are saved immediately
    saveMissing: false,
  });

export default i18n;
