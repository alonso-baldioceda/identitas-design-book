import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// translation catalog
const resources = {
  es: {
    translations: require("./intl/es.json"),
  },
  en: {
    translations: require("./intl/en.json"),
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    resources,
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

i18next.languages = ["es", "en"];

export default i18next;
