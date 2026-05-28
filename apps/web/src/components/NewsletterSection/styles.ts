"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.section`
  padding: 96px 24px;
  background-color: #f3f4f5; /* surface-container-low */
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled(motion.div)`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
  max-width: 672px;
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
  margin-top: 16px;
  margin-bottom: 48px;
  max-width: 512px;
  line-height: 1.6;
`;

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #705d00; /* tertiary */
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;

  span {
    font-size: 20px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 512px;
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 9999px;
  background-color: #ffffff;
  padding: 4px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #526069; /* secondary */
  }
`;

export const EmailInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: rgba(68, 71, 72, 0.6);
  }
`;

export const SubscribeButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 12px 32px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #526069;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
