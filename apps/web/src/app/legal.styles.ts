"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const LegalContainer = styled.div`
  background-color: #f8f9fa; /* surface */
  min-height: 100vh;
  color: #191c1d;
`;

export const LegalHero = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 350px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

export const LegalHeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  filter: brightness(0.85);
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
  padding-bottom: 60px;
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
  color: #526069;
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
    font-size: 56px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
`;

export const LegalMain = styled.section`
  padding: 80px 24px 120px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ReadingContent = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(25, 28, 29, 0.85);

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: #000000;
    margin-top: 48px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  p {
    margin-bottom: 24px;
  }

  ul, ol {
    margin-bottom: 24px;
    padding-left: 24px;

    li {
      margin-bottom: 12px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid rgba(196, 199, 199, 0.4);
    margin: 48px 0;
  }
`;
