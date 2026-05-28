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
  const { currentLanguage, toggleLanguage } = useLanguage();
  const isEn = currentLanguage === "en";

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
                {isEn ? link.name : link.nameBn}
              </NavLink>
            );
          })}
        </DesktopNav>

        <ActionsWrapper>
          <LanguageButton onClick={toggleLanguage}>
            <span className="material-symbols-outlined">language</span>
            <span>{isEn ? "BN" : "EN"}</span>
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
                {isEn ? link.name : link.nameBn}
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
            <span>{isEn ? "বাংলা" : "English"}</span>
          </MobileLanguageButton>
        </MobileNav>
      </MobileDrawer>

      <BottomNavBar>
        {[
          { href: "/", icon: "explore", label: isEn ? "Explore" : "অন্বেষণ" },
          { href: "/dashboard?tab=wishlist", icon: "favorite", label: isEn ? "Saved" : "সংরক্ষিত" },
          { href: "/trips/sundarbans", icon: "luggage", label: isEn ? "Trips" : "ভ্রমণ" },
          { href: "/dashboard", icon: "person", label: isEn ? "Profile" : "প্রোফাইল" },
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
