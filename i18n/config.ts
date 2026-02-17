import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      cs: { translation: cs },
      en: { translation: en },
    },
    lng: 'cs', // default language
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
