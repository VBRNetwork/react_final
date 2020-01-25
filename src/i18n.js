import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import translationEN from '../src/libs/translations/translation_en';
import translationRO from '../src/libs/translations/translation_ro';
const resources = {
    en: {translation: translationEN},
    ro: {translation: translationRO}
};
i18n.use(LanguageDetector).use(reactI18nextModule)
.init({resources,fallbackLng: 'en',debug: true,
    keySeparator: false,interpolation: {escapeValue: false},
    react:{wait: true},
});
export default i18n;