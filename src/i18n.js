import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zhTranslation from "./locales/zh.json";
import enTranslation from "./locales/en.json"; 
import kmTranslation from "./locales/km.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zhTranslation },
      en: { translation: enTranslation },
      km: { translation: kmTranslation }
    },
    fallbackLng: "zh",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18n;
