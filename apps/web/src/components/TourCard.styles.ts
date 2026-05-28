"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  background-color: #edeeef;
`;

export const TourImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(125%);
  transition: all 0.8s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%) contrast(100%);
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  user-select: none;
`;

export const SaveBadge = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 8px;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface HeartIconProps {
  $saved: boolean;
}

export const HeartIcon = styled.span<HeartIconProps>`
  font-size: 20px;
  color: ${props => props.$saved ? "#ef4444" : "#000000"};
  font-variation-settings: ${props => props.$saved ? "'FILL' 1" : "'FILL' 0"};
`;

export const CardBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  line-height: 1.35;
  margin-bottom: 6px;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #705d00; /* tertiary */
  }
`;

export const LocationRow = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  letter-spacing: 0.1em;
  margin-bottom: 16px;
`;

export const InfoText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(196, 199, 199, 0.1);
  padding-top: 16px;
`;

export const RatingBadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingBadge = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  user-select: none;
`;

export const RatingLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  letter-spacing: 0.05em;
  user-select: none;
`;

export const PriceWrapper = styled.div`
  text-align: right;
`;

export const StrikethroughPrice = styled.span`
  font-family: monospace;
  font-size: 10px;
  color: rgba(68, 71, 72, 0.4);
  text-decoration: line-through;
  margin-right: 6px;
  user-select: none;
`;

export const PriceText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #705d00; /* tertiary */
`;

export const BookCta = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid #000000;
  padding: 12px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    background-color: #000000;
    color: #ffffff;
  }
`;
