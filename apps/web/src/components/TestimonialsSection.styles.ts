"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 120px 0;
  background-color: #f8f9fa; /* surface-bright */
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 64px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: calc((100vw - 1280px)/2 + 64px);
    padding: 0;
  }
`;

export const GridContainer = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-cols: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-cols: repeat(3, 1fr);
    padding: 0 64px;
  }
`;

export const ColumnWrapper = styled(motion.div)<{ $marginTop?: string }>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    margin-top: ${props => props.$marginTop || "0"};
  }
`;

export const TestimonialCard = styled.div`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(82, 96, 105, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
  color: #705d00; /* tertiary */
  margin-bottom: 16px;
  
  span {
    font-size: 16px;
  }
`;

export const TestimonialQuote = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #191c1d;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const AuthorName = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;

export const AuthorLocation = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: rgba(68, 71, 72, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 2px;
`;
