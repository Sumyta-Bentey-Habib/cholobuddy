"use client";

import { useEffect, useState } from "react";
import i18n from "@/i18n"; // Import initialized i18next instance

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "bn" || saved === "en") {
      if (i18n.language !== saved) {
        i18n.changeLanguage(saved);
      }
    }
    setMounted(true);
  }, []);

  // Prevent layout shift / flash of default language on localstorage hit
  if (!mounted) {
    return <div className="invisible">{children}</div>;
  }

  return <>{children}</>;
}
