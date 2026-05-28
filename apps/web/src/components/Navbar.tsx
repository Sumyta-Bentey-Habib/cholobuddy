"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
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
  BottomNavItem,
  DashboardButton,
  LogoutButton,
  MobileLogoutButton
} from "./Navbar.styles";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { session, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(20);
  const {
    t: t,
    currentLanguage,
    toggleLanguage
  } = useLanguage();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

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

          {session ? (
            <>
              <DashboardButton href="/dashboard">{t("common.dashboard")}</DashboardButton>
              <LogoutButton onClick={handleLogout}>{t("common.logout")}</LogoutButton>
            </>
          ) : (
            <LoginButton href="/login">{t("Login")}</LoginButton>
          )}

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

          {session ? (
            <>
              <MobileNavLink
                href="/dashboard"
                $isActive={pathname === "/dashboard"}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("common.dashboard")}
              </MobileNavLink>
              <MobileLogoutButton
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
              >
                {t("common.logout")}
              </MobileLogoutButton>
            </>
          ) : (
            <MobileNavLink
              href="/login"
              $isActive={pathname === "/login"}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("Login")}
            </MobileNavLink>
          )}

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
          { href: "/trips", icon: "luggage", label: t("Trips") },
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
