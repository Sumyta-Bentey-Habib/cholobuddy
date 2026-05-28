"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroHeader = styled.header`
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 96px;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export const HeroBg = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GradientFade = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%);
`;

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 20;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 64px;
  }
`;

export const LabelSpan = styled(motion.span)`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 16px;
  user-select: none;
`;

export const Headline = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
  max-width: 768px;
  margin-bottom: 32px;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
`;

export const HeroBtn = styled(motion.button)`
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  margin-bottom: 64px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ThumbnailsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-left: 32px;
  user-select: none;
`;

export const ThumbnailCard = styled(motion.div)<{ $zIndex: number }>`
  width: 128px;
  height: 128px;
  border-radius: 40px;
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  margin-left: -32px;
  z-index: ${props => props.$zIndex};

  @media (min-width: 768px) {
    width: 192px;
    height: 192px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LabelsRow = styled(motion.div)`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`;

export const LabelItem = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(0, 0, 0, 0.5);
`;
