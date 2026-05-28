"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 120px 0;
  background-color: #f4f1ea; /* warm luxury beige */
  position: relative;
  overflow: hidden;
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
  grid-template-columns: 1fr;
  gap: 32px;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
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
  padding: 48px 32px;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  /* Large decorative quote mark */
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    right: 20px;
    font-family: 'Playfair Display', serif;
    font-size: 140px;
    color: rgba(112, 93, 0, 0.05); /* very faint gold */
    line-height: 1;
    pointer-events: none;
    transition: color 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);

    &::before {
      color: rgba(112, 93, 0, 0.1);
    }
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
