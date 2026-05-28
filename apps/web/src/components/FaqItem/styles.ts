"use client";

import styled from "styled-components";

export const FaqContainer = styled.div<{ $hasMargin: boolean }>`
  padding-top: ${props => props.$hasMargin ? "24px" : "0px"};
`;

export const QuestionText = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 8px;
  line-height: 1.5;
`;

export const AnswerText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(68, 71, 72, 0.8);
  line-height: 1.6;
  padding-left: 16px;
  border-left: 1px solid #000000;
`;
