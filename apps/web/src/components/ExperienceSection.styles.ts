"use client";

import styled, { keyframes } from "styled-components";

export const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const bounceSlowAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

export const SectionContainer = styled.section`
  padding: 120px 0;
  background-color: #f8f9fa; /* surface */
  position: relative;
  overflow: hidden;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
  padding: 0 24px;
`;

export const PhilosophyTag = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #526069; /* secondary */
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 24px;
`;

export const SectionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(25, 28, 29, 0.8);
  max-width: 672px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ImageBadgesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 672px;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid rgba(196, 199, 199, 0.2);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

interface FloatingBadgeProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $delay?: number;
  $reverse?: boolean;
}

export const FloatingBadge = styled.div<FloatingBadgeProps>`
  position: absolute;
  top: ${props => props.$top || "auto"};
  bottom: ${props => props.$bottom || "auto"};
  left: ${props => props.$left || "auto"};
  right: ${props => props.$right || "auto"};
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 20px;
  border-radius: 9999px;
  border: 1px solid rgba(196, 199, 199, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 20;
  
  animation: ${props => props.$reverse ? bounceSlowAnimation : bounceAnimation} 5s infinite ease-in-out;
  animation-delay: ${props => props.$delay || 0}s;

  span:first-child {
    color: #000000;
    font-size: 16px;
  }

  span:last-child {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #000000;
  }
`;
