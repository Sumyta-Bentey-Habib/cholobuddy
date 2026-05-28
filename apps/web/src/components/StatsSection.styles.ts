"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 96px 24px;
  background-color: #f3f4f5; /* surface-container-low */
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-cols: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-cols: repeat(4, 1fr);
    padding: 0 64px;
  }
`;

export const StatCard = styled(motion.div)`
  padding: 32px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.2);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  span.material-symbols-outlined {
    margin-bottom: 24px;
    font-size: 32px;
    color: #526069; /* secondary */
    user-select: none;
  }
`;

export const StatValue = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 8px;
`;

export const StatLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(68, 71, 72, 0.6);
  user-select: none;
`;
