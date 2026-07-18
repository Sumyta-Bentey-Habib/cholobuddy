"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import {
  LegalContainer,
  LegalHero,
  LegalHeroBg,
  HeroFade,
  HeroContent,
  HeroSub,
  HeroTitle,
  LegalMain,
  ReadingContent,
} from "../legal.styles";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <LegalContainer>
      <Navbar />
      <main>
        <LegalHero>
          <LegalHeroBg />
          <HeroFade />
          <HeroContent>
            <HeroSub>{t("privacy_page.subtitle")}</HeroSub>
            <HeroTitle>{t("privacy_page.title")}</HeroTitle>
          </HeroContent>
        </LegalHero>

        <LegalMain>
          <ReadingContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t("privacy_page.sec1_title")}</h2>
            <p>{t("privacy_page.sec1_text")}</p>

            <h2>{t("privacy_page.sec2_title")}</h2>
            <p>{t("privacy_page.sec2_text")}</p>

            <h2>{t("privacy_page.sec3_title")}</h2>
            <p>{t("privacy_page.sec3_text")}</p>
          </ReadingContent>
        </LegalMain>
      </main>
      <Footer />
    </LegalContainer>
  );
}
