"use client";

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled.main`
  min-height: 100vh;
  padding-top: 96px;
  background-color: #f8f9fa; /* background */
  color: #000000; /* primary */
`;

export const TitleSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 0;

  @media (min-width: 768px) {
    padding: 32px 64px 0;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  padding-bottom: 24px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const CategoryBadge = styled.div`
  display: inline-block;
  background-color: #526069; /* secondary */
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid #526069;
  margin-bottom: 12px;
  user-select: none;

  span {
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  line-height: 1.1;
  color: #000000;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const MetaLocation = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(68, 71, 72, 0.6);
  margin-top: 8px;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

export const ReviewsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 24px;
  padding: 14px;
  user-select: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
`;

export const ReviewsTextCol = styled.div`
  text-align: right;
  
  p:first-child {
    font-family: monospace;
    font-size: 14px;
    font-weight: 700;
    color: #000000;
  }

  p:last-child {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    color: rgba(68, 71, 72, 0.6);
    text-transform: uppercase;
  }
`;

export const RatingBox = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-size: 18px;
  font-family: monospace;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 16px;
`;

export const GallerySection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 0;

  @media (min-width: 768px) {
    padding: 32px 64px 0;
  }
`;

export const MotifSeparator = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='10' viewBox='0 0 40 10'%3E%3Cline x1='0' y1='5' x2='40' y2='5' stroke='%23526069' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='10' stroke='%23705d00' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: 40px 10px;
  height: 10px;
  width: 100%;
  margin-top: 32px;
`;

export const ColumnsLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
  display: grid;
  grid-template-cols: 1fr;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-cols: repeat(12, 1fr);
    padding: 64px;
  }
`;

export const LeftContentCol = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-column: span 7;
  }
`;

export const InclusionsBox = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
`;

export const InclusionTitle = styled.h3`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  user-select: none;
  letter-spacing: 0.1em;
`;

export const InclusionGrid = styled.div`
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 16px;
  user-select: none;

  @media (min-width: 480px) {
    grid-template-cols: repeat(4, 1fr);
  }
`;

export const InclusionCard = styled.div`
  border: 1px solid rgba(196, 199, 199, 0.1);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4px;

  span.material-symbols-outlined {
    color: #526069; /* secondary */
    font-size: 24px;
  }

  span.label {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
  }
`;

export const ItineraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  border-left: 2px solid #526069;
  padding-left: 24px;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const SectionSubText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
`;

export const Timeline = styled(motion.div)`
  position: relative;
  padding-left: 32px;
  border-left: 1px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
`;

export const TimelineNode = styled.div`
  position: absolute;
  left: -38px;
  top: 4px;
  width: 14px;
  height: 14px;
  background-color: #526069;
  border: 1px solid #000000;
  transform: rotate(45deg);
  z-index: 10;
  
  /* Shimmer animate */
  animation: pulseNode 1.5s infinite ease-in-out;
  @keyframes pulseNode {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

export const TimelineCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TimelineHeader = styled.div`
  span {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #526069;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 700;
    user-select: none;
  }

  h3 {
    font-family: monospace;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const DayDetailsBox = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

  p.desc {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #000000;
    line-height: 1.6;
  }
`;

export const DayActivitiesList = styled.ul`
  list-style: none;
  padding: 16px 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid rgba(196, 199, 199, 0.1);
  user-select: none;
`;

export const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #000000;
  font-weight: 700;

  span.material-symbols-outlined {
    color: #526069;
    font-size: 14px;
  }
`;

export const DayImageContainer = styled.div`
  border: 1px solid rgba(196, 199, 199, 0.1);
  border-radius: 16px;
  overflow: hidden;
  height: 192px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(125%);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
      filter: grayscale(0%);
    }
  }
`;

// Reviews Breakdown Section
export const ReviewsBreakdown = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
`;

export const ReviewHeaderTitle = styled.h3`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.6);
  user-select: none;
  letter-spacing: 0.10em;
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 24px;
  user-select: none;

  @media (min-width: 480px) {
    grid-template-cols: 1fr 1fr;
  }
`;

export const ReviewProgressBarCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewProgressBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  background-color: #edeeef;
  height: 6px;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $width: string }>`
  background-color: #000000;
  height: 100%;
  width: ${props => props.$width};
`;

// Right Sidebar Col
export const SidebarCol = styled(motion.aside)`
  @media (min-width: 1024px) {
    grid-column: span 5;
  }
`;

export const SpinnerWrapper = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #000000;
  border-radius: 50%;
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorText = styled.p`
  font-family: monospace;
  color: #000000;
  font-weight: 700;
  text-transform: uppercase;
`;

// ── Extra helpers for trips/[id]/page.tsx ───────────────────────────────────────
export const CenteredContainer = styled.main`
  min-height: 100vh;
  padding-top: 96px;
  background-color: #f8f9fa;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TourDescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
`;

export const TourDescHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  border-left: 2px solid #526069;
  padding-left: 16px;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TourDescText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.7;
  white-space: pre-line;
`;
