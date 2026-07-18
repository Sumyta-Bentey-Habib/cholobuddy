import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import bnTranslations from "./locales/bn.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslations },
        bn: { translation: bnTranslations }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    });

  // Dynamically set HTML lang tag on client load
  if (typeof window !== "undefined") {
    document.documentElement.lang = i18n.language;
  }
}

// Watch language change to update HTML lang attribute and save to localStorage
if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    localStorage.setItem("language", lng);
  });
}

export default i18n;
