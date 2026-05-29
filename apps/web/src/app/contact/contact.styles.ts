"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
  background-color: #f8f9fa; /* surface */
  min-height: 100vh;
  color: #191c1d;
`;

export const ContactHero = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

export const ContactHeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNcei7yKfaIYurIvwM6XC5bHSMYmZw5IZSOI240kmXih0cArgtfkQCkVuE-FILwvbBsGyDkz72dr0GK0ZSw-BR-7UfshTo80QJM7UEYgBCS5qaabHPOfgZYNeoMfWL1ATqr7TUdTwaRhYNxYAs7cPTWT1t9LEY8-Ulc3H5cpAX38ZdRZCPY6so1c5sDeN6gI-XrmlMh-iu9ckPYX7JkNg-i9hvgq3T5gZkKICn36efJd7k-JiIgFVkBDgR38BC9FL3A68VFzhc2ls');
  background-size: cover;
  background-position: center;
`;

export const HeroFade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 0.8) 70%, rgba(248, 249, 250, 1) 100%);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HeroSub = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.20em;
  color: #000000;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  font-weight: 900;
  color: #000000;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
`;

// Layout
export const ContactMain = styled.section`
  padding: 120px 24px;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 120px 64px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 64px;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-cols: 1fr 1fr;
  }
`;

// Info Column (Left)
export const InfoColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const InfoHeader = styled.div`
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #444748;
    line-height: 1.65;
  }
`;

export const InfoCard = styled(motion.div)`
  display: flex;
  items-align: flex-start;
  gap: 20px;
`;

export const InfoIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  border: 1px solid rgba(196, 199, 199, 0.3);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.3s ease;

  span {
    font-size: 20px;
    color: #000000;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const InfoLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #444748;
  opacity: 0.6;
  margin-bottom: 4px;
`;

export const InfoValue = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

// Form Column (Right)
export const FormColumn = styled(motion.div)`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.2);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
`;

export const FormLabel = styled.label`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #000000;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e1e3e4;
  padding: 8px 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #000000;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: #000000;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e1e3e4;
  padding: 8px 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #000000;
  background: transparent;
  resize: none;

  &:focus {
    outline: none;
    border-bottom-color: #000000;
  }
`;

export const InquiryGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

interface InquiryBtnProps {
  $active?: boolean;
}

export const InquiryBtn = styled.button<InquiryBtnProps>`
  padding: 8px 16px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
  
  border: 1px solid ${props => props.$active ? "#000000" : "rgba(196, 199, 199, 0.5)"};
  background-color: ${props => props.$active ? "#000000" : "transparent"};
  color: ${props => props.$active ? "#ffffff" : "#444748"};

  &:hover {
    border-color: #000000;
    color: ${props => props.$active ? "#ffffff" : "#000000"};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border-radius: 9999px;
  padding: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #526069;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  gap: 16px;

  span {
    font-size: 48px;
    color: #c9a900;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #444748;
    max-width: 320px;
    line-height: 1.5;
  }
`;

export const FollowJourney = styled(motion.div)`
  margin-top: 16px;
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #444748;
    opacity: 0.6;
    margin-bottom: 16px;
  }
  
  div {
    display: flex;
    gap: 16px;
  }
`;

export const SocialHandle = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 8px 16px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const FormFieldWrapper = styled.div<{ $mb?: string }>`
  margin-bottom: ${props => props.$mb || "24px"};
`;
