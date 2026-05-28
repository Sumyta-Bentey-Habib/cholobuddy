"use client";

import styled from "styled-components";
import Link from "next/link";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 96px 0 48px;
  border-top: 1px solid rgba(196, 199, 199, 0.3);
  background-color: #f8f9fa; /* surface-bright */
  user-select: none;
`;

export const FooterGrid = styled.div`
  max-w: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-cols: 1fr;
  gap: 32px;
  margin-bottom: 48px;
  
  @media (min-width: 768px) {
    grid-template-cols: repeat(4, 1fr);
    padding: 0 64px;
  }
`;

export const FooterBrandColumn = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const FooterLogo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  display: block;
  margin-bottom: 16px;
  text-decoration: none;
`;

export const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #444748;
  max-width: 384px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const BengaliTag = styled.p`
  font-family: 'Hind Siliguri', 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(68, 71, 72, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const FooterHeading = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #000000;
  margin-bottom: 16px;
`;

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #444748;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const FooterBottom = styled.div`
  max-w: 1280px;
  margin: 0 auto;
  padding: 32px 24px 0;
  border-top: 1px solid rgba(196, 199, 199, 0.1);
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
    padding: 32px 64px 0;
  }
`;

export const FooterCopyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #444748;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;
