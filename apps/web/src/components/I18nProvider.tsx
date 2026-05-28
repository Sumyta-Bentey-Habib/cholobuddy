"use client";

import { useEffect, useState } from "react";
import "@/i18n"; // Import to initialize i18next

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent layout shift / flash of default language on localstorage hit
  if (!mounted) {
    return <div className="invisible">{children}</div>;
  }

  return <>{children}</>;
}
