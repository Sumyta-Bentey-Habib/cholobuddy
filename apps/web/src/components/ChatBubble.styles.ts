"use client";

import styled, { keyframes } from "styled-components";

export const bounceDot = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

export const pulseStatus = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 768px) {
    bottom: 32px;
  }
`;

interface WindowContainerProps {
  $open: boolean;
}

export const WindowContainer = styled.div<WindowContainerProps>`
  width: 320px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 16px;
  margin-bottom: 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom right;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  transform: ${props => props.$open ? "scale(1) translateY(0)" : "scale(0.75) translateY(32px)"};
  opacity: ${props => props.$open ? 1 : 0};
  pointer-events: ${props => props.$open ? "auto" : "none"};
`;

export const WindowHeader = styled.div`
  background-color: #000000;
  padding: 16px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusIndicator = styled.span`
  width: 8px;
  height: 8px;
  background-color: #ffe16d; /* gold / tertiary */
  border-radius: 9999px;
  animation: ${pulseStatus} 2s infinite ease-in-out;
`;

export const StatusLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

export const CloseHeaderBtn = styled.span`
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const MessagesBox = styled.div`
  padding: 16px;
  height: 256px;
  overflow-y: auto;
  background-color: #f3f4f5; /* surface-container-low */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface BubbleProps {
  $isUser: boolean;
}

export const MessageRow = styled.div<BubbleProps>`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  align-self: ${props => props.$isUser ? "flex-end" : "flex-start"};
  align-items: ${props => props.$isUser ? "flex-end" : "flex-start"};
`;

export const Bubble = styled.div<BubbleProps>`
  padding: 12px;
  border-radius: 16px;
  border: 1px solid ${props => props.$isUser ? "#526069" : "rgba(196, 199, 199, 0.3)"};
  background-color: ${props => props.$isUser ? "#526069" : "#ffffff"};
  color: ${props => props.$isUser ? "#ffffff" : "#000000"};
  border-top-right-radius: ${props => props.$isUser ? "0px" : "16px"};
  border-top-left-radius: ${props => props.$isUser ? "16px" : "0px"};

  p {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const MessageTime = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 600;
  color: rgba(68, 71, 72, 0.6);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TypingIndicator = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 0.3);
  border-radius: 16px;
  border-top-left-radius: 0px;
  padding: 12px 16px;
`;

export const TypingDot = styled.span<{ $delay: number }>`
  width: 6px;
  height: 6px;
  background-color: #526069;
  border-radius: 9999px;
  animation: ${bounceDot} 1.4s infinite ease-in-out;
  animation-delay: ${props => props.$delay}ms;
`;

export const InputForm = styled.form`
  padding: 12px;
  border-top: 1px solid rgba(196, 199, 199, 0.2);
  display: flex;
  gap: 8px;
  background-color: #ffffff;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const ChatInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(196, 199, 199, 1);
  border-radius: 9999px;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: rgba(68, 71, 72, 0.6);
  }
`;

export const SendButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #526069;
  }

  span {
    font-size: 14px;
  }
`;

export const ToggleButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  span {
    font-size: 24px;
  }
`;
