"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const DashPage = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #f8f9fa;
  color: #000000;
  overflow: hidden;
`;

export const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const DashSidebar = styled.aside<{ $open: boolean }>`
  width: 256px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid rgba(82, 96, 105, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 40;
  transition: transform 0.3s ease;
  transform: ${props => props.$open ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 1024px) {
    position: relative;
    transform: none;
  }
`;

export const DashMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100vh;
  overflow: hidden;
`;

export const DashTopbar = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(82, 96, 105, 0.08);
  background-color: #ffffff;
`;

export const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: #526069;
  cursor: pointer;
  padding: 0;

  @media (max-width: 1023px) {
    display: block;
  }
`;

export const DashContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

// Sidebar Elements
export const SidebarBrandWrapper = styled.div`
  padding: 24px;
  border-bottom: 1px solid rgba(82, 96, 105, 0.08);
`;

export const BrandIcon = styled.div<{ $variant?: "blue" | "purple" }>`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.$variant === "purple" ? "linear-gradient(135deg, #526069, #3b4951)" : "linear-gradient(135deg, #c9a900, #705d00)"};
  box-shadow: ${props => props.$variant === "purple" ? "0 4px 14px rgba(82, 96, 105, 0.30)" : "0 4px 14px rgba(201, 169, 0, 0.30)"};
`;

export const SidebarUserCard = styled.div`
  margin: 16px;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(201, 169, 0, 0.1), rgba(82, 96, 105, 0.1));
  border: 1px solid rgba(82, 96, 105, 0.08);
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #c9a900, #705d00);
  flex-shrink: 0;
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  font-size: 11px;
`;

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;

export const DashNavBtn = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  background-color: transparent;

  border: 1px solid ${props => props.$active ? "rgba(201, 169, 0, 0.35)" : "transparent"};
  color: ${props => props.$active ? "#000000" : "#526069"};
  background: ${props => props.$active ? "linear-gradient(135deg, rgba(201, 169, 0, 0.08), rgba(82, 96, 105, 0.05))" : "transparent"};
  box-shadow: ${props => props.$active ? "0 2px 12px rgba(201, 169, 0, 0.04)" : "none"};

  &:hover {
    background-color: ${props => props.$active ? "" : "#f1f3f5"};
    color: #000000;
  }
`;

export const SidebarFooter = styled.div`
  padding: 16px;
  border-top: 1px solid rgba(82, 96, 105, 0.08);
`;

export const SignOutBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  color: rgba(239, 68, 68, 0.7);
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.08);
    color: #ef4444;
    border-color: rgba(239, 68, 68, 0.2);
  }
`;

// Hero Banner Style
export const DashHero = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff, #f1f3f5);
  border: 1px solid rgba(82, 96, 105, 0.15);
  padding: 32px;
`;

export const DashHeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.06;
`;

// Stats grid & cards
export const StatsGrid = styled.div`
  display: grid;
  grid-template-cols: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
`;

export const StatCardBlue = styled.div`
  background: linear-gradient(135deg, rgba(201, 169, 0, 0.08), rgba(112, 93, 0, 0.04));
  border: 1px solid rgba(201, 169, 0, 0.15);
  border-radius: 16px;
  padding: 24px;
`;

export const StatCardGreen = styled.div`
  background: linear-gradient(135deg, rgba(82, 96, 105, 0.08), rgba(59, 73, 81, 0.04));
  border: 1px solid rgba(82, 96, 105, 0.18);
  border-radius: 16px;
  padding: 24px;
`;

export const StatCardAmber = styled.div`
  background: linear-gradient(135deg, rgba(255, 225, 109, 0.06), rgba(201, 169, 0, 0.04));
  border: 1px solid rgba(255, 225, 109, 0.12);
  border-radius: 16px;
  padding: 24px;
`;

// Common Card Panel
export const DashCard = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(82, 96, 105, 0.08);
  border-radius: 16px;
  overflow: hidden;
`;

// Status Pills
export const StatusPill = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 9999px;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  background: ${props => props.$status === "Completed" ? "rgba(82,96,105,.10)" : props.$status === "Pending" ? "rgba(201,169,0,.09)" : "rgba(186,26,26,.08)"};
  color: ${props => props.$status === "Completed" ? "#526069" : props.$status === "Pending" ? "#705d00" : "#ba1a1a"};
  border: 1px solid ${props => props.$status === "Completed" ? "rgba(82,96,105,.20)" : props.$status === "Pending" ? "rgba(201,169,0,.20)" : "rgba(186,26,26,.20)"};
`;

// Image Tour Cards (Grid layout)
export const TourGrid = styled.div`
  display: grid;
  grid-template-cols: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
`;

export const ImageCard = styled(motion.div)<{ $wishlist?: boolean }>`
  background-color: #ffffff;
  border: 1px solid rgba(82, 96, 105, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${props => props.$wishlist ? "rgba(82,96,105,.25)" : "rgba(201,169,0,.35)"};
    box-shadow: ${props => props.$wishlist ? "0 12px 32px rgba(82,96,105,.06)" : "0 12px 32px rgba(201,169,0,.08)"};
  }
`;

// Table Styles
export const DashTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Textarea = styled.textarea`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(82, 96, 105, 0.15);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 14px;
  color: #000000;
  font-family: monospace;
  outline: none;
  resize: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8e9aa2;
  }

  &:focus {
    border-color: rgba(201,169,0,.60);
    box-shadow: 0 0 0 2px rgba(201,169,0,0.15);
  }
`;

// Gradient buttons
export const BlueButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border: none;
  background: linear-gradient(135deg, #000000, #526069);
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    box-shadow: 0 8px 24px rgba(82,96,105,.40);
    transform: scale(1.01);
  }
  
  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    background: #f1f3f5;
    color: #8e9aa2;
    border: 1px solid rgba(82, 96, 105, 0.08);
    cursor: wait;
  }
`;

export const PinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: linear-gradient(135deg, #c9a900, #526069);
  color: #000000;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(201,169,0,.28);
    transform: scale(1.01);
  }
`;
