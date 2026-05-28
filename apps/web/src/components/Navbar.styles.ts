"use client";

import styled from "styled-components";
import Link from "next/link";

interface HeaderContainerProps {
  $scrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%) ${props => props.$scrolled ? "scale(0.99)" : "scale(1)"};
  width: 92%;
  max-width: 1280px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 50;
  transition: all 0.5s ease;
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 9999px;
  box-shadow: ${props => props.$scrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.35)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"};
`;

export const BrandLink = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  user-select: none;
  letter-spacing: -0.02em;
  text-decoration: none;
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

interface NavLinkProps {
  $isActive: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
  padding-bottom: 2px;
  text-decoration: none;
  
  color: ${props => props.$isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"};
  border-bottom: 1px solid ${props => props.$isActive ? "#ffffff" : "transparent"};

  &:hover {
    color: #ffffff;
    transform: scale(1.05);
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LanguageButton = styled.button`
  display: none;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  span.material-symbols-outlined {
    font-size: 16px;
  }
`;

export const LoginButton = styled(Link)`
  display: none;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  background-color: #ffffff;
  color: #000000;
  padding: 10px 20px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e4e4e7;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const MobileMenuToggle = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    display: none;
  }

  span {
    font-size: 16px;
  }
`;

export const MobileDrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (min-width: 768px) {
    display: none;
  }
`;

interface MobileDrawerProps {
  $open: boolean;
}

export const MobileDrawer = styled.div<MobileDrawerProps>`
  position: fixed;
  top: 80px;
  right: 16px;
  width: 256px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  z-index: 45;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  transform: ${props => props.$open ? "translateY(0) scale(1)" : "translateY(-16px) scale(0.95)"};
  opacity: ${props => props.$open ? 1 : 0};
  pointer-events: ${props => props.$open ? "auto" : "none"};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  user-select: none;
`;

export const MobileNavLink = styled(Link)<NavLinkProps>`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: ${props => props.$isActive ? "700" : "500"};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding-bottom: 4px;
  border-bottom: 1px solid ${props => props.$isActive ? "#ffffff" : "transparent"};
  text-decoration: none;
  color: ${props => props.$isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"};
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const MobileLanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  span {
    font-size: 14px;
  }
`;

// Bottom Mobile Navigation
export const BottomNavBar = styled.nav`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 9999px;
  user-select: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

interface BottomNavItemProps {
  $isActive: boolean;
}

export const BottomNavItem = styled(Link)<BottomNavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${props => props.$isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"};
  background-color: ${props => props.$isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"};

  span:first-child {
    font-size: 16px;
  }

  span:last-child {
    font-family: 'Inter', sans-serif;
    font-size: 9px;
    font-weight: 500;
    margin-top: 2px;
  }
`;
