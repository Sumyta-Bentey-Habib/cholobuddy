"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  flex: none;
  width: 350px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 32px;
  overflow: hidden;
  snap-align: start;
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
  height: 192px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  background-color: #edeeef;
`;

export const HotelImage = styled.img`
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

export const CategoryTag = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  color: #000000;
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

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const CardTitle = styled.h5`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

export const LocationRow = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
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
  padding-top: 12px;
`;

export const RatingBadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RatingBadge = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  user-select: none;
`;

export const RatingLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 9px;
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
  font-size: 9px;
  color: rgba(68, 71, 72, 0.4);
  text-decoration: line-through;
  margin-right: 4px;
  user-select: none;
`;

export const PriceText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #705d00; /* tertiary */
`;

export const SelectRoomBtn = styled.button`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #526069;
    border-color: #526069;
  }
`;
