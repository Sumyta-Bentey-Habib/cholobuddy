"use client";

import React from "react";
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
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterBrandColumn>
          <FooterLogo href="/">CholoBuddy</FooterLogo>
          <FooterText>
            Curating moments of discovery and quiet luxury across the wild beauty
            of Bangladesh.
          </FooterText>
          <BengaliTag>
            ঢাকা · সিলেট · সুন্দরবন · কক্সবাজার
          </BengaliTag>
        </FooterBrandColumn>
        
        <div>
          <FooterHeading>Explore</FooterHeading>
          <FooterLinksList>
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </FooterLinksList>
        </div>
        
        <div>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinksList>
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </FooterLinksList>
        </div>
      </FooterGrid>
      
      <FooterBottom>
        <FooterCopyright>
          © 2026 CholoBuddy Luxury Travel Bangladesh — All rights reserved.
        </FooterCopyright>
      </FooterBottom>
    </FooterContainer>
  );
}
