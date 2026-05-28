"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export type ToastType = "success" | "error" | "info" | "warning";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 380px;
  width: calc(100% - 48px);
  pointer-events: none;
`;

export const ToastItem = styled(motion.div)<{ $type: ToastType }>`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px 14px 22px;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  font-family: var(--font-inter), sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  position: relative;
  overflow: hidden;

  background: ${props => {
    switch (props.$type) {
      case "success": return "rgba(10, 25, 18, 0.85)";
      case "error": return "rgba(28, 10, 10, 0.85)";
      case "warning": return "rgba(25, 20, 5, 0.85)";
      case "info":
      default:
        return "rgba(15, 23, 42, 0.85)";
    }
  }};

  border: 1px solid ${props => {
    switch (props.$type) {
      case "success": return "rgba(52, 211, 153, 0.25)";
      case "error": return "rgba(248, 113, 113, 0.25)";
      case "warning": return "rgba(233, 196, 0, 0.25)";
      case "info":
      default:
        return "rgba(148, 163, 184, 0.25)";
    }
  }};

  color: ${props => {
    switch (props.$type) {
      case "success": return "#a7f3d0";
      case "error": return "#fca5a5";
      case "warning": return "#fde047";
      case "info":
      default:
        return "#f1f5f9";
    }
  }};

  /* Left accent line */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => {
      switch (props.$type) {
        case "success": return "#34d399";
        case "error": return "#f87171";
        case "warning": return "#e9c400";
        case "info":
        default:
          return "#94a3b8";
      }
    }};
  }
`;

export const ToastIcon = styled.span`
  font-size: 18px;
  flex-shrink: 0;
`;

export const ToastMessage = styled.span`
  flex: 1;
`;
