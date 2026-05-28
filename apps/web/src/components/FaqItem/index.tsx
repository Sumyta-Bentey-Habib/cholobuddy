"use client";

import React from "react";
import { FaqContainer, QuestionText, AnswerText } from "./styles";

interface FaqItemProps {
  question: string;
  answer: string;
  idx: number;
}

export default function FaqItem({ question, answer, idx }: FaqItemProps) {
  return (
    <FaqContainer $hasMargin={idx > 0}>
      <QuestionText>Q: {question}</QuestionText>
      <AnswerText>{answer}</AnswerText>
    </FaqContainer>
  );
}
