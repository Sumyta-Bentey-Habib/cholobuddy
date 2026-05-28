"use client";

import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const FormDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(25, 28, 29, 0.8);
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-cols: 1fr 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(25, 28, 29, 0.6);
  user-select: none;
`;

export const TextInput = styled.input`
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 12px;
  background-color: #ffffff;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: rgba(25, 28, 29, 0.3);
  }
`;

export const SelectBox = styled.select`
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 12px;
  background-color: #ffffff;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  outline: none;
  cursor: pointer;
  appearance: none;
`;

export const MessageBox = styled.textarea`
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 12px;
  background-color: #ffffff;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #000000;
  outline: none;
  resize: none;

  &::placeholder {
    color: rgba(25, 28, 29, 0.3);
  }
`;

interface SubmitBtnProps {
  $status: "idle" | "submitting" | "success";
}

export const SubmitButton = styled.button<SubmitBtnProps>`
  width: 100%;
  padding: 16px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid #000000;
  cursor: ${props => props.$status === "submitting" ? "wait" : "pointer"};
  transition: all 0.3s ease;

  background-color: ${props => {
    if (props.$status === "idle" || props.$status === "success") return "#000000";
    return "#f3f4f5";
  }};

  color: ${props => {
    if (props.$status === "idle" || props.$status === "success") return "#ffffff";
    return "rgba(25, 28, 29, 0.5)";
  }};

  border-color: ${props => {
    if (props.$status === "idle" || props.$status === "success") return "#000000";
    return "rgba(196, 199, 199, 0.3)";
  }};

  &:hover:not(:disabled) {
    background-color: #526069;
    border-color: #526069;
    color: #ffffff;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;
