"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #f8f9fa; /* background */
  color: #000000; /* primary */
`;


export const ToursSection = styled.section`
  padding: 96px 24px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

export const ToursInner = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 64px;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const TagLine = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #526069; /* secondary */
  letter-spacing: 0.15em;
  display: block;
`;

export const SectionHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ViewAllBtn = styled(motion.button)`
  border: 1px solid #000000;
  padding: 10px 24px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  align-self: flex-start;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    align-self: auto;
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;

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

export const ToursGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NoDataText = styled.div`
  text-align: center;
  padding: 40px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(68, 71, 72, 0.6);
`;

export const AlponaDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 48px 0;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(196, 199, 199, 0.3);
  }
`;

export const AlponaCenterMotif = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #526069;
  background-color: #705d00;
  transform: rotate(45deg);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 4px;
    height: 4px;
    background-color: #ffffff;
  }
`;

