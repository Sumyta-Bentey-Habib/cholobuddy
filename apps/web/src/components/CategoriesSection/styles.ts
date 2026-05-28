"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 120px 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const SectionTag = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #705d00;
  display: block;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 600;
  color: #000000;
`;

export const CategoriesGrid = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #705d00;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    background: #ffffff;
    
    &::before {
      transform: scaleX(1);
    }
    
    .icon-wrapper {
      background: #705d00;
      color: #ffffff;
      transform: scale(1.1);
    }
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(112, 93, 0, 0.1);
  color: #705d00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  transition: all 0.4s ease;

  span {
    font-size: 32px;
  }
`;

export const CategoryTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 12px;
`;

export const CategoryDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
`;
