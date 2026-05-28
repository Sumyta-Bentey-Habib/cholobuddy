"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/hooks/useLanguage";
import { navLinks } from "@/lib/data";
import {
  HeaderContainer,
  BrandLink,
  DesktopNav,
  NavLink,
  ActionsWrapper,
  LanguageButton,
  LoginButton,
  MobileMenuToggle,
  MobileDrawerBackdrop,
  MobileDrawer,
  MobileNav,
  MobileNavLink,
  MobileLanguageButton,
  BottomNavBar,
  BottomNavItem
} from "./Navbar.styles";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(20);
  const {
    t: t,
    currentLanguage,
    toggleLanguage
  } = useLanguage();

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <BrandLink href="/">CholoBuddy</BrandLink>

        <DesktopNav>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <NavLink
                key={link.href}
                href={link.href}
                $isActive={isActive}
              >
                {t(link.name)}
              </NavLink>
            );
          })}
        </DesktopNav>

        <ActionsWrapper>
          <LanguageButton onClick={toggleLanguage}>
            <span className="material-symbols-outlined">language</span>
            <span>{t("BN")}</span>
          </LanguageButton>

          <LoginButton href="/login">Login</LoginButton>

          <MobileMenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </MobileMenuToggle>
        </ActionsWrapper>
      </HeaderContainer>
      {mobileMenuOpen && <MobileDrawerBackdrop onClick={() => setMobileMenuOpen(false)} />}
      <MobileDrawer $open={mobileMenuOpen}>
        <MobileNav>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <MobileNavLink
                key={link.href}
                href={link.href}
                $isActive={isActive}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.name)}
              </MobileNavLink>
            );
          })}

          <MobileLanguageButton
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
          >
            <span className="material-symbols-outlined">translate</span>
            <span>{t("বাংলা")}</span>
          </MobileLanguageButton>
        </MobileNav>
      </MobileDrawer>
      <BottomNavBar>
        {[
          { href: "/", icon: "explore", label: t("Explore") },
          { href: "/dashboard?tab=wishlist", icon: "favorite", label: t("Saved") },
          { href: "/trips/sundarbans", icon: "luggage", label: t("Trips") },
          { href: "/dashboard", icon: "person", label: t("Profile") },
        ].map(({ href, icon, label }) => {
          const isActive = pathname === href;
          return (
            <BottomNavItem
              key={href}
              href={href}
              $isActive={isActive}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span>{label}</span>
            </BottomNavItem>
          );
        })}
      </BottomNavBar>
    </>
  );
}
