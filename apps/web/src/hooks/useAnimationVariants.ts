"use client";

import type { Variants } from "framer-motion";

/**
 * Returns a consistent set of Framer Motion animation variants
 * used across multiple pages/sections for stagger reveals.
 */
export function useAnimationVariants() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -2 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return {
    containerVariants,
    itemVariants,
    fadeInVariants,
    scaleInVariants,
    slideInLeftVariants,
  };
}
