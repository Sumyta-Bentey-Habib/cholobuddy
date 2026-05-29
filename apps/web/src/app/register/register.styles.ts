"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const AuthPage = styled.div`
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #111111; /* dk-bg-soft */
  color: #ffffff;
`;

export const AuthLeft = styled.div`
  display: none;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #111111;

  @media (min-width: 1024px) {
    display: flex;
    width: 58%;
  }
`;

export const AuthRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #141414;
  position: relative;
  padding: 24px;
  min-height: 100vh;

  @media (min-width: 1024px) {
    width: 42%;
  }
`;

export const AuthBgImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.18;
`;

export const AuthBgFade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #111111 0%, transparent 60%);
`;

export const AuthGridTexture = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px);
  background-size: 60px 60px;
`;

export const AuthOrb = styled.div<{ $position: "p1" | "p2" | "1" | "2" }>`
  position: absolute;
  border-radius: 9999px;
  filter: blur(110px);
  pointer-events: none;

  width: ${props => props.$position === "p1" ? "420px" : props.$position === "p2" ? "380px" : props.$position === "1" ? "420px" : "360px"};
  height: ${props => props.$position === "p1" ? "420px" : props.$position === "p2" ? "380px" : props.$position === "1" ? "420px" : "360px"};
  top: ${props => props.$position === "p1" ? "-100px" : props.$position === "1" ? "-90px" : "auto"};
  right: ${props => props.$position === "p1" ? "-60px" : props.$position === "2" ? "-70px" : "auto"};
  bottom: ${props => props.$position === "p2" ? "-80px" : props.$position === "2" ? "-70px" : "auto"};
  left: ${props => props.$position === "p2" ? "-80px" : props.$position === "1" ? "-90px" : "auto"};
  background: ${props => props.$position === "p1" || props.$position === "2" ? "rgba(82, 96, 105, 0.12)" : "rgba(201, 169, 0, 0.1)"};
`;

export const BrandIcon = styled.div<{ $variant?: "blue" | "purple" }>`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.$variant === "blue" ? "linear-gradient(135deg, #c9a900, #705d00)" : "linear-gradient(135deg, #526069, #3b4951)"};
  box-shadow: ${props => props.$variant === "blue" ? "0 4px 14px rgba(201,169,0,.30)" : "0 4px 14px rgba(82,96,105,.30)"};
`;

export const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-cols: 1fr 1fr;
  gap: 12px;
  margin-top: 36px;
`;

export const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
`;

export const FeatureIconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(201, 169, 0, 0.25), rgba(236, 72, 153, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FeatureLabel = styled.span`
  font-family: monospace;
  font-size: 10px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const QuoteBlock = styled(motion.div)`
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const AuthGlassCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  background: rgba(22, 22, 22, 0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.11); /* dk-border-lg */
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
`;

export const GlassShimmer = styled.div<{ $variant?: "blue" | "purple" }>`
  position: absolute;
  inset: 0;
  border-radius: 16px;
  pointer-events: none;
  opacity: 0.3;
  background: ${props => props.$variant === "purple"
    ? "linear-gradient(135deg, rgba(82, 96, 105, 0.18), transparent, rgba(201, 169, 0, 0.14))"
    : "linear-gradient(135deg, rgba(201, 169, 0, 0.18), transparent, rgba(82, 96, 105, 0.15))"};
`;

export const ProgressBarWrapper = styled.div`
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #526069, #c9a900);
  border-radius: 9999px;
`;

export const SocialAuthRow = styled.div`
  position: relative;
  display: grid;
  grid-template-cols: 1fr 1fr;
  gap: 10px;
  margin-bottom: 18px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.04);
  color: #bac9d3;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  margin-bottom: 18px;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
`;

export const DividerText = styled.span`
  font-family: monospace;
  font-size: 9px;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  white-space: nowrap;
`;

export const FormLabel = styled.label`
  display: block;
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 5px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #475569;
  font-size: 17px;
  pointer-events: none;
`;

export const FormInput = styled.input<{ $hasRightIcon?: boolean; $focusVariant?: "blue" | "purple" }>`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 16px 12px 40px;
  padding-right: ${props => props.$hasRightIcon ? "48px" : "16px"};
  font-size: 14px;
  color: #ffffff;
  font-family: monospace;
  outline: none;
  transition: border-color 0.2s, background 0.2s;

  &::placeholder {
    color: #3b4951; /* dk-subtle */
  }

  &:focus {
    border-color: ${props => props.$focusVariant === "purple" ? "rgba(82,96,105,.70)" : "rgba(201,169,0,.55)"} !important;
    background: rgba(255, 255, 255, 0.08) !important;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #475569;
  cursor: pointer;
  padding: 0;
  display: flex;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px 20px;
  border-radius: 12px;
  margin-top: 4px;
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: box-shadow 0.25s, transform 0.15s;
  border: none;

  background: linear-gradient(135deg, #526069, #3b4951);
  color: #ffffff;

  &:hover:not(:disabled) {
    box-shadow: 0 8px 24px rgba(82, 96, 105, 0.4);
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    color: #475569;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: wait;
  }
`;

export const ToastNotification = styled(motion.div)<{ $type: "success" | "info" | "error" }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  background: ${props => props.$type === "success" ? "rgba(5,46,22,.85)" : props.$type === "error" ? "rgba(69,10,10,.85)" : "rgba(20,16,8,.92)"};
  border: 1px solid ${props => props.$type === "success" ? "rgba(16,185,129,.3)" : props.$type === "error" ? "rgba(239,68,68,.3)" : "rgba(82,96,105,.4)"};
  color: ${props => props.$type === "success" ? "#34d399" : props.$type === "error" ? "#f87171" : "#e9c400"};
`;

// ── Shared Left Panel wrappers ────────────────────────────────────────────────
export const LeftPanelContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px 56px;
`;

export const BrandRow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

export const BrandName = styled.span`
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #fff;
  text-transform: uppercase;
`;

export const HeadlineSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AdTagline = styled.p`
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: #c9a900;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const HeroH1 = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 16px;
`;

export const GradientSpan = styled.span`
  background: linear-gradient(135deg, #526069, #c9a900, #e9c400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroDesc = styled.p`
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.7;
  max-width: 400px;
  margin-top: 10px;
`;

export const QuoteItalic = styled.p`
  color: #475569;
  font-size: 13px;
  font-style: italic;
  line-height: 1.7;
`;

export const QuoteAuthor = styled.p`
  font-family: monospace;
  font-size: 10px;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 8px;
`;

// ── Right Panel wrappers ─────────────────────────────────────────────────────
export const FloatingHomeArea = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 50;
`;

export const HomeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.04);
  font-family: monospace;
  font-size: 11px;
  color: #bac9d3;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.20);
  }
`;

export const FloatOrb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 360px;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.05);
  filter: blur(80px);
  pointer-events: none;
`;

export const FormMotionWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
`;

export const FormHeader = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
`;

export const FormSubtitle = styled.p`
  color: #64748b;
  font-size: 13px;
  margin-bottom: 16px;
`;

export const ProgressNote = styled.p`
  font-family: monospace;
  font-size: 9px;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 4px;
`;

export const FormBody = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormFooterText = styled.p`
  text-align: center;
  font-family: monospace;
  font-size: 11px;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

export const FormLink = styled.a`
  color: #c9a900;
  font-weight: 700;
  text-decoration: none;
`;

// ── Suspense Fallback ────────────────────────────────────────────────────────
export const SuspenseFallback = styled.main`
  min-height: 100vh;
  background-color: #0b0c10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerDiv = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
