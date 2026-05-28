"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  background-color: #f8f9fa; /* surface */
  min-height: 100vh;
  color: #191c1d;
`;

// Hero Banner
export const HeroBanner = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

export const HeroBannerBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuANy2V4hSBNCOTiyPi8RdbELSJxMNneVFN2UtqdGD83091csfqli6ROLdkG5vpOWpErqGac2DCfarapDwpVUp1NTnkcNRWqxBB_6erdShAqWFpe-FtQAhRfLfvLAwnxbbw8GQfWIiozy26LNzZdSaRDuWJND0m21yvmELS6_3tZgzKrQPRrXKJ1_IYo4UgINZE0QGCXkkSKKmek5AJ8qvXu_JCh6IpzQYYs9NbNH3gKzsIYgd1NyBWB58Wjcr8UmbapakBpF3h0U0Y');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) contrast(125%) brightness(95%);
`;

export const FadeToWhite = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 0.8) 70%, rgba(248, 249, 250, 1) 100%);
`;

export const HeroBannerContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 896px;
  margin: 0 auto;
`;

export const CategoryTag = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
`;

export const BannerTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 900;
  color: #000000;
  margin-bottom: 32px;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
`;

// Story Section
export const StorySection = styled.section`
  max-width: 768px;
  margin: 0 auto;
  padding: 96px 24px;
  text-align: center;
`;

export const StoryTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 48px;
  text-transform: uppercase;
  letter-spacing: -0.01em;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.3;
  }
`;

export const StoryBody = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #444748;
  line-height: 1.65;
  
  p {
    margin-bottom: 32px;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

// Blueprint Separator Motif
export const MotifSeparator = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='10' viewBox='0 0 40 10'%3E%3Cline x1='0' y1='5' x2='40' y2='5' stroke='%23526069' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='10' stroke='%23705d00' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: 40px 10px;
  height: 10px;
  width: 100%;
`;

// Trust Compliance Section
export const TrustSection = styled.section`
  padding: 96px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  display: flex;
  justify-content: center;
`;

export const TrustGrid = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-cols: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-cols: repeat(3, 1fr);
    padding: 0 64px;
  }
`;

export const TrustCard = styled.div`
  border: 1px solid rgba(196, 199, 199, 0.2);
  border-radius: 24px;
  padding: 32px;
  background-color: #f3f4f5; /* surface-container-low */
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  }
`;

export const TrustCardTitle = styled.h4`
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000000;
  letter-spacing: 0.15em;
  margin-bottom: 16px;
`;

export const TrustCardBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
`;

// Alpona Center Motif Divider
export const AlponaDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 64px 0;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(196, 199, 199, 0.3);
  }
`;

export const AlponaCenterMotif = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #526069;
  background-color: #705d00;
  transform: rotate(45deg);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 4px;
    height: 4px;
    background-color: #ffffff;
  }
`;

// Philosophy Section (Dark panel)
export const PhilosophySection = styled.section`
  padding: 96px 24px;
  background-color: #000000; /* primary */
  color: #ffffff;
  border-radius: 24px;
  margin: 0 24px 96px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0 64px 96px;
  }
`;

export const PhilosophyGrid = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-cols: 1fr;
  gap: 64px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-cols: 1fr 1fr;
    padding: 0 32px;
  }
`;

export const PhilosophyLeftPanel = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 48px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const PhilosophyTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  line-height: 1.1;
  color: #ffffff;
`;

export const PhilosophyDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const DotIndicatorsRow = styled.div`
  display: flex;
  gap: 16px;
  user-select: none;
`;

export const DotIndicator = styled.div<{ $variant?: "filled" | "shaded" | "outline" }>`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  
  border: ${props => props.$variant === "filled" ? "none" : props.$variant === "shaded" ? "1px solid #526069" : "1px solid #ffffff"};
  background-color: ${props => props.$variant === "filled" ? "#ffffff" : props.$variant === "shaded" ? "#526069" : "transparent"};
`;

export const PhilosophyRightPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const PhilosophyItem = styled(motion.div)`
  display: flex;
  gap: 24px;
  items-align: flex-start;
`;

export const PhilosophyNum = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 800;
  color: #ffe16d; /* gold / tertiary-fixed */
  user-select: none;
  line-height: 1;
`;

export const PhilosophyItemTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const PhilosophyItemDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`;

// Begin Journey Section
export const BeginJourneySection = styled.section`
  padding: 96px 24px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

export const BeginJourneyCard = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 96px;
    margin: 0 64px;
  }
`;

export const BeginJourneyTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 32px;
  user-select: none;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const BeginJourneyForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 512px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const BeginJourneyInput = styled.input`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 9999px;
  padding: 16px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  outline: none;
  color: #000000;

  &::placeholder {
    color: rgba(25, 28, 29, 0.3);
  }
`;

export const BeginJourneyBtn = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 16px 48px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #526069;
    border-color: #526069;
  }
`;
