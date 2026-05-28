"use client";

import styled from "styled-components";

export const WidgetContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 24px;
  width: 100%;
  max-width: 1024px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(82, 96, 105, 0.05);
`;

export const FormRow = styled.form`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    & > * {
      border-right: 1px solid rgba(196, 199, 199, 0.3);
      padding: 0 24px;
    }
    & > *:first-child {
      padding-left: 0;
    }
    & > *:last-child {
      border-right: none;
      padding-right: 0;
    }
  }

  @media (max-width: 767px) {
    & > * {
      border-bottom: 1px solid rgba(196, 199, 199, 0.3);
      padding: 16px 0;
    }
    & > *:first-child {
      padding-top: 0;
    }
    & > *:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const TabSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
`;

interface TabButtonProps {
  $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  flex: 1;
  padding: 10px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  border-radius: 9999px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  
  background-color: ${props => props.$active ? "#000000" : "#f3f4f5"};
  color: ${props => props.$active ? "#ffffff" : "#000000"};

  &:hover {
    background-color: ${props => props.$active ? "#000000" : "#edeeef"};
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(25, 28, 29, 0.6);
  margin-bottom: 6px;
  user-select: none;
`;

export const SelectBox = styled.select`
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  width: 100%;
  outline: none;
  cursor: pointer;
  padding: 4px 0;
  appearance: none;
`;

export const IconInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span.material-symbols-outlined {
    font-size: 18px;
    color: #000000;
  }
`;

export const TextInput = styled.input`
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  width: 100%;
  outline: none;
  padding: 4px 0;

  &::placeholder {
    color: rgba(68, 71, 72, 0.6);
  }
`;

export const NumberInput = styled.input`
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  width: 100%;
  outline: none;
  padding: 4px 0;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBtn = styled.button`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 14px 28px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #526069;
    border-color: #526069;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;
