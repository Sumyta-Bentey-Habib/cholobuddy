"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const LabelSpan = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #526069; /* secondary */
  margin-bottom: 12px;
  user-select: none;
`;

export const SearchesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  user-select: none;
`;

export const SearchCard = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 16px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  span.material-symbols-outlined {
    font-size: 18px;
    color: #526069;
    transition: color 0.3s ease;
  }

  &:hover span.material-symbols-outlined {
    color: #000000;
  }
`;

export const SearchTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
`;

export const SearchDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: rgba(68, 71, 72, 0.7);
  margin-top: 2px;
  text-transform: uppercase;
`;
