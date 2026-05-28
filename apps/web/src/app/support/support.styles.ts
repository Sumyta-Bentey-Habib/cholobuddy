"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SupportContainer = styled.main`
  padding-top: 74px;
  background-color: #f8f9fa;
  min-height: 100vh;
  color: #191c1d;
`;

export const SupportHeader = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 64px 24px;
  text-align: center;
  border-bottom: 1px solid #000000;
`;

export const SupportTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #ffffff;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const AlponaBorderTop = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='10' viewBox='0 0 40 10'%3E%3Cline x1='0' y1='5' x2='40' y2='5' stroke='%23526069' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='10' stroke='%23705d00' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: 40px 10px;
  height: 10px;
  width: 100%;
`;

export const GridSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-cols: repeat(12, 1fr);
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    grid-column: span 4;
  }
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-column: span 8;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

export const SidebarTitle = styled.h3`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(25, 28, 29, 0.6);
  margin-bottom: 16px;
  user-select: none;
`;

export const CategoryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CategoryBtn = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 9999px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all 0.3s ease;

  background-color: ${props => props.$active ? "#000000" : "#ffffff"};
  color: ${props => props.$active ? "#ffffff" : "#000000"};
  border: 1px solid ${props => props.$active ? "#000000" : "rgba(196, 199, 199, 0.3)"};

  &:hover {
    background-color: ${props => props.$active ? "#000000" : "#f1f3f4"};
  }

  .material-symbols-outlined {
    font-size: 16px;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.span`
  display: block;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(25, 28, 29, 0.6);
  margin-bottom: 4px;
  user-select: none;
`;

export const InfoValue = styled.p`
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000000;
  line-height: 1.5;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: rgba(196, 199, 199, 0.2);
  margin: 24px 0;
`;

export const MapWrapper = styled.div`
  border: 1px solid rgba(196, 199, 199, 0.3);
  background-color: #ffffff;
  padding: 4px;
  position: relative;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const MapBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 4px 12px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  z-index: 10;
`;

export const MapContainer = styled.div`
  height: 192px;
  overflow: hidden;
  filter: grayscale(100%) contrast(1.3) brightness(0.95);
  border-radius: 16px;
`;

export const FaqTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #000000;
  border-left: 2px solid #705d00;
  padding-left: 16px;
  margin-bottom: 24px;
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
