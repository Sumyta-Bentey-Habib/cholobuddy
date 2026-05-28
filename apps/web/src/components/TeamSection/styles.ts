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
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamCard = styled(motion.div)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background-color: #edeeef;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(95%);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${TeamCard}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%) contrast(100%) brightness(100%);
  }
`;

export const CardInfo = styled.div`
  text-align: center;
  padding: 0 16px;
`;

export const CuratorName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 6px;
  text-transform: none;
  letter-spacing: normal;
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
