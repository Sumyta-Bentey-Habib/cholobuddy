"use client";

import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const isEn = currentLanguage === "en";
  const isBn = currentLanguage === "bn";

  const toggleLanguage = () => {
    const nextLng = currentLanguage === "en" ? "bn" : "en";
    i18n.changeLanguage(nextLng);
  };

  return {
    t,
    i18n,
    currentLanguage,
    isEn,
    isBn,
    toggleLanguage,
  };
}
