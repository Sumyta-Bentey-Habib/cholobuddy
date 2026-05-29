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

export const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: linear-gradient(135deg, #c9a900, #705d00);
  box-shadow: 0 4px 14px rgba(201, 169, 0, 0.30);
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

// Table Styles
export const DashTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Blue Button
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
`;

// Ghost Button
export const GhostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(25, 28, 29, 0.1);
  background: rgba(25, 28, 29, 0.02);
  color: #191c1d;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(25, 28, 29, 0.05);
    border-color: rgba(25, 28, 29, 0.2);
  }
`;

// Select Box
export const Select = styled.select`
  background: transparent;
  border: 1px solid rgba(82, 96, 105, 0.15);
  border-radius: 4px;
  padding: 6px;
  font-family: monospace;
  font-size: 12px;
  color: #000000;
  outline: none;
  cursor: pointer;
`;

// Fields / Input Form
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  color: #526069;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  user-select: none;
`;

export const FieldInput = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(82, 96, 105, 0.15);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 14px;
  color: #000000;
  font-family: monospace;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8e9aa2;
  }

  &:focus {
    border-color: rgba(201,169,0,.60);
    box-shadow: 0 0 0 2px rgba(201,169,0,0.15);
  }
`;

// Chart Elements
export const ChartContainer = styled.div`
  height: 192px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  padding-top: 24px;
  border-bottom: 1px solid rgba(82, 96, 105, 0.1);
  user-select: none;
`;

export const ChartBarColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
`;

export const ChartBar = styled.div<{ $percent: number }>`
  width: 100%;
  background: linear-gradient(to top, #526069, #3b4951);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
  height: ${props => props.$percent}px;

  &:hover {
    background: #000000;
  }
`;

export const ChartBarLabel = styled.span`
  font-family: monospace;
  font-size: 9px;
  font-weight: 700;
  color: rgba(25, 28, 29, 0.4);
  margin-top: 4px;
`;

// ── Sidebar extras ─────────────────────────────────────────────────────
export const SidebarBrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

export const BrandName = styled.span`
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #000000;
  text-transform: uppercase;
`;

export const UserCardInner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserAvatarLg = styled(UserAvatar)`
  width: 40px;
  height: 40px;
  font-size: 13px;
`;

export const UserInfo = styled.div`
  min-width: 0;
`;

export const UserName = styled.p`
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 3px;
`;

export const StatusDot = styled.span<{ $color?: string }>`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: ${props => props.$color || "#705d00"};
  display: inline-block;
`;

export const UserRole = styled.p`
  font-family: monospace;
  font-size: 9px;
  color: #526069;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const NavActiveDot = styled.span`
  margin-left: auto;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #c9a900;
  display: inline-block;
`;

// ── Topbar ───────────────────────────────────────────────────────────────────
export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TopbarTitle = styled.h1`
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const TopbarSubtitle = styled.p`
  font-family: monospace;
  font-size: 9px;
  color: #526069;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2px;
`;

export const HomeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 8px;
  border: 1px solid rgba(82, 96, 105, 0.15);
  background: #f1f3f5;
  font-family: monospace;
  font-size: 11px;
  color: #526069;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
    color: #000000;
  }
`;

export const UserAvatarSm = styled(UserAvatar)`
  width: 32px;
  height: 32px;
  font-size: 11px;
`;

// ── Tab wrappers ────────────────────────────────────────────────────────────
export const TabPane = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TabPaneGap20 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// ── Stat card internals ──────────────────────────────────────────────────
export const StatCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StatLabel = styled.p`
  font-family: monospace;
  font-size: 9px;
  color: #526069;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const StatValue = styled.p`
  font-family: monospace;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-top: 8px;
`;

// ── Chart header ────────────────────────────────────────────────────────────
export const ChartHeaderRow = styled.div`
  margin-bottom: 20px;
`;

export const ChartTitle = styled.h3`
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const ChartDesc = styled.p`
  color: #526069;
  font-size: 12px;
  margin-top: 4px;
`;

// ── Section headers ──────────────────────────────────────────────────────────
export const SectionTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const SectionCount = styled.span`
  font-family: monospace;
  font-size: 10px;
  color: #526069;
  text-transform: uppercase;
`;

// ── Table extras ────────────────────────────────────────────────────────────
export const TableHeaderRow = styled.tr`
  border-bottom: 1px solid rgba(82, 96, 105, 0.08);
`;

export const TableTh = styled.th`
  padding: 14px 20px;
  text-align: left;
  font-family: monospace;
  font-size: 9px;
  font-weight: 700;
  color: #526069;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const TableTr = styled.tr`
  border-bottom: 1px solid rgba(82, 96, 105, 0.08);
`;

export const TableTdMono = styled.td`
  padding: 14px 20px;
  font-family: monospace;
  font-size: 11px;
  color: #8e9aa2;
`;

export const TableTdTitle = styled.td`
  padding: 14px 20px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableTdBold = styled.td`
  padding: 14px 20px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  color: #000000;
`;

export const TableTdPad = styled.td`
  padding: 14px 20px;
`;

export const DeleteBtn = styled.button`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  color: rgba(239, 68, 68, 0.7);
  border: 1px solid rgba(239, 68, 68, 0.2);
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;

  &:hover {
    background: rgba(239, 68, 68, 0.08);
    color: #ef4444;
    border-color: rgba(239, 68, 68, 0.3);
  }
`;

export const EditBtn = styled.button`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  color: #705d00;
  border: 1px solid rgba(82, 96, 105, 0.15);
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;
  margin-right: 8px;

  &:hover {
    background: rgba(201, 169, 0, 0.08);
    border-color: rgba(201, 169, 0, 0.3);
  }
`;

export const TableImgTd = styled.td`
  padding: 14px 20px;
`;

export const TableImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 12px;
`;

// ── Tour form ─────────────────────────────────────────────────────────────────
export const TourFormTitle = styled.h4`
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
`;

export const TourFormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TourFormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const TourFormGridCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
`;

export const TourFormActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
  text-transform: uppercase;
`;

export const TextareaField = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(82, 96, 105, 0.15);
  border-radius: 12px;
  padding: 10px;
  font-size: 14px;
  color: #000000;
  font-family: monospace;
  outline: none;
  resize: vertical;
  transition: all 0.2s ease;

  &::placeholder {
    color: #8e9aa2;
  }

  &:focus {
    border-color: rgba(201,169,0,.60);
    box-shadow: 0 0 0 2px rgba(201,169,0,0.15);
  }
`;
