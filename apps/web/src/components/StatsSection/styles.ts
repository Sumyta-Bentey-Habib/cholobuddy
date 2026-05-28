"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 120px 24px;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Decorative glowing orb */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 60%;
    height: 200%;
    background: radial-gradient(circle, rgba(112, 93, 0, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const GridContainer = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 64px;
  }
`;

export const StatCard = styled(motion.div)`
  padding: 40px 32px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  /* Hover glow */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, rgba(255, 225, 109, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 225, 109, 0.3); /* gold accent */
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 225, 109, 0.1);
    
    &::after {
      opacity: 1;
    }
    
    span.material-symbols-outlined {
      color: #ffe16d;
      transform: scale(1.1);
    }
  }

  span.material-symbols-outlined {
    margin-bottom: 32px;
    font-size: 40px;
    color: rgba(255, 255, 255, 0.7);
    user-select: none;
    transition: all 0.4s ease;
    position: relative;
    z-index: 10;
  }
`;

export const StatValue = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
  position: relative;
  z-index: 10;
`;

export const StatLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
  position: relative;
  z-index: 10;
`;
