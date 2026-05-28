"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 120px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 64px;
  gap: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const TitleCol = styled.div`
  max-width: 512px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SectionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
`;

export const LineSeparator = styled.div`
  display: none;
  height: 1px;
  background-color: rgba(196, 199, 199, 0.3);
  flex-grow: 1;
  margin: 0 32px 24px;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const EstablishedTag = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #000000;
  border: 1px solid #000000;
  padding: 8px 16px;
  border-radius: 9999px;
  text-transform: uppercase;
  user-select: none;
  align-self: flex-start;
  
  @media (min-width: 768px) {
    align-self: auto;
    margin-bottom: 12px;
  }
`;

export const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-cols: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-cols: repeat(3, 1fr);
  }
`;

export const TeamCard = styled(motion.div)`
  border: 1px solid rgba(196, 199, 199, 0.2);
  border-radius: 24px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  background-color: #edeeef;
`;

export const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(125%) brightness(95%);
  transition: all 0.6s ease;

  ${TeamCard}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%) contrast(100%) brightness(100%);
  }
`;

export const CardInfo = styled.div`
  padding: 24px;
  text-align: center;
`;

export const CuratorName = styled.h3`
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const CuratorRole = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #526069; /* secondary */
  text-transform: uppercase;
  user-select: none;
`;
