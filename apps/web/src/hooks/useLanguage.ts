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

  const registerTranslations = (items: any[]) => {
    if (!items) return;
    const list = Array.isArray(items) ? items : [items];
    list.forEach((item) => {
      if (!item) return;
      if (item.title && item.titleBn) i18n.addResource("bn", "translation", item.title, item.titleBn);
      if (item.name && item.nameBn) i18n.addResource("bn", "translation", item.name, item.nameBn);
      if (item.location && item.locationBn) i18n.addResource("bn", "translation", item.location, item.locationBn);
      if (item.description && item.descriptionBn) i18n.addResource("bn", "translation", item.description, item.descriptionBn);
      if (item.duration && item.durationBn) i18n.addResource("bn", "translation", item.duration, item.durationBn);
      if (item.day && item.dayBn) i18n.addResource("bn", "translation", item.day, item.dayBn);
      if (item.role && item.roleBn) i18n.addResource("bn", "translation", item.role, item.roleBn);

      if (item.itinerary && Array.isArray(item.itinerary)) {
        registerTranslations(item.itinerary);
      }
      if (item.activities && Array.isArray(item.activities)) {
        registerTranslations(item.activities);
      }
    });
  };

  return {
    t,
    i18n,
    currentLanguage,
    isEn,
    isBn,
    toggleLanguage,
    registerTranslations,
  };
}
