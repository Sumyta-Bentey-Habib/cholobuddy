"use client";

import styled, { keyframes } from "styled-components";

export const pulseStatus = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const WidgetWrapper = styled.div`
  position: sticky;
  top: 112px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

export const AlertBadge = styled.div`
  background-color: #FFEBEF;
  color: #D90429;
  border: 1px solid #FFCCD5;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  user-select: none;
  border-radius: 12px;

  span.material-symbols-outlined {
    font-size: 16px;
    animation: ${pulseStatus} 1.5s infinite ease-in-out;
  }

  span.label {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  padding-bottom: 16px;
`;

export const WidgetTitle = styled.h3`
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(68, 71, 72, 0.6);
  user-select: none;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const PriceAmount = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 800;
  color: #705d00; /* tertiary */
`;

export const PriceLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(68, 71, 72, 0.7);
  letter-spacing: 0.05em;
  user-select: none;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const InputLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #000000;
  user-select: none;
`;

export const DatePickerBtn = styled.button`
  width: 100%;
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f5;
  }

  span.date-val {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  span.material-symbols-outlined {
    font-size: 16px;
    color: #000000;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 12px;
  overflow: hidden;
  z-index: 20;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  
  & > * {
    border-bottom: 1px solid rgba(196, 199, 199, 0.1);
  }
  & > *:last-child {
    border-bottom: none;
  }
`;

interface DropdownItemProps {
  $active: boolean;
}

export const DropdownItem = styled.button<DropdownItemProps>`
  width: 100%;
  padding: 14px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  text-align: left;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-color: ${props => props.$active ? "#f3f4f5" : "#ffffff"};
  color: ${props => props.$active ? "#705d00" : "#000000"};
  font-weight: ${props => props.$active ? "700" : "500"};

  &:hover {
    background-color: #f3f4f5;
  }
`;

export const CounterRow = styled.div`
  display: flex;
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 12px;
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  user-select: none;
`;

export const CounterBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #f3f4f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    font-size: 14px;
  }
`;

export const CounterVal = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  border-left: 1px solid rgba(196, 199, 199, 1);
  border-right: 1px solid rgba(196, 199, 199, 1);
`;

export const InvoiceCard = styled.div`
  background-color: #f3f4f5; /* surface-container-low */
  border: 1px solid rgba(196, 199, 199, 0.2);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InvoiceRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 12px;
  color: #444748;
  user-select: none;
`;

export const InvoiceTotalRow = styled.div`
  border-top: 1px solid rgba(196, 199, 199, 0.1);
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;

  span:last-child {
    color: #705d00;
  }
`;

interface SubmitBtnProps {
  $status: "idle" | "booking" | "booked";
}

export const BookButton = styled.button<SubmitBtnProps>`
  width: 100%;
  padding: 16px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid ${props => props.$status === "booked" ? "#705d00" : "#000000"};
  cursor: ${props => props.$status === "booking" ? "wait" : "pointer"};
  transition: all 0.3s ease;

  background-color: ${props => {
    if (props.$status === "idle") return "#000000";
    if (props.$status === "booking") return "#edeeef";
    return "#705d00";
  }};

  color: ${props => {
    if (props.$status === "idle") return "#ffffff";
    if (props.$status === "booking") return "rgba(25, 28, 29, 0.4)";
    return "#ffffff";
  }};

  &:hover:not(:disabled) {
    background-color: ${props => props.$status === "idle" ? "#526069" : "#705d00"};
    border-color: ${props => props.$status === "idle" ? "#526069" : "#705d00"};
  }
`;

export const SlotsText = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: rgba(68, 71, 72, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  user-select: none;
`;
