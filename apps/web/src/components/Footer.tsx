"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  FooterContainer,
  FooterGrid,
  FooterBrandColumn,
  FooterLogo,
  FooterText,
  BengaliTag,
  FooterHeading,
  FooterLinksList,
  FooterLink,
  FooterBottom,
  FooterCopyright
} from "./Footer.styles";

const footerLinks = {
  explore: [
    { label: "Destinations", href: "/" },
    { label: "Experiences", href: "/trips/sundarbans" },
    { label: "Stays", href: "/" },
    { label: "About Us", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
  ],
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterBrandColumn>
          <FooterLogo href="/">CholoBuddy</FooterLogo>
          <FooterText>
            {t("Curating moments of discovery and quiet luxury across the wild beauty of Bangladesh.")}
          </FooterText>
          <BengaliTag>
            ঢাকা · সিলেট · সুন্দরবন · কক্সবাজার
          </BengaliTag>
        </FooterBrandColumn>
        
        <div>
          <FooterHeading>{t("Explore")}</FooterHeading>
          <FooterLinksList>
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {t(link.label)}
                </FooterLink>
              </li>
            ))}
          </FooterLinksList>
        </div>
        
        <div>
          <FooterHeading>{t("Legal")}</FooterHeading>
          <FooterLinksList>
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {t(link.label)}
                </FooterLink>
              </li>
            ))}
          </FooterLinksList>
        </div>
      </FooterGrid>
      
      <FooterBottom>
        <FooterCopyright>
          {t("© 2026 CholoBuddy Luxury Travel Bangladesh — All rights reserved.")}
        </FooterCopyright>
      </FooterBottom>
    </FooterContainer>
  );
}
