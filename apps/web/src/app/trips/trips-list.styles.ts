"use client";

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled.main`
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 96px;
  background-color: #f8f9fa;
  color: #000000;
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 0 64px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid rgba(196, 199, 199, 0.15);
  padding-bottom: 28px;
`;

export const MainTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(68, 71, 72, 0.7);
  line-height: 1.5;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(196, 199, 199, 0.4);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.03);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 480px;
  display: flex;
  align-items: center;

  span.material-symbols-outlined {
    position: absolute;
    left: 16px;
    color: rgba(68, 71, 72, 0.4);
    font-size: 20px;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border-radius: 12px;
  border: 1px solid rgba(196, 199, 199, 0.5);
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #000000;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: rgba(68, 71, 72, 0.4);
  }

  &:focus {
    border-color: #705d00;
    box-shadow: 0 0 0 3px rgba(112, 93, 0, 0.1);
  }
`;

export const StatsInfo = styled.div`
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #526069;
  letter-spacing: 0.1em;
`;

export const ToursGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NoDataText = styled.div`
  text-align: center;
  padding: 64px 0;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: rgba(68, 71, 72, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ClearFiltersBtn = styled.button`
  border: 1px solid #000000;
  padding: 8px 20px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;

  &::after {
    content: "";
    width: 48px;
    height: 48px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #000000;
    border-radius: 50%;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const NoDataIcon = styled.span`
  font-size: 48px;
  color: rgba(68, 71, 72, 0.3);
`;
