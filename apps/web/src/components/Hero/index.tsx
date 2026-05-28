"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { heroThumbnails } from "@/lib/data";
import {
  HeroHeader,
  HeroBg,
  GradientFade,
  HeroContent,
  LabelSpan,
  Headline,
  HeroBtn,
  ThumbnailsWrapper,
  ThumbnailCard,
  LabelsRow,
  LabelItem
} from "./styles";

export default function Hero() {
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const contentY = useTransform(scrollY, [0, 800], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handlePlanTrip = () => {
    window.location.href = "/trips";
  };

  return (
    <HeroHeader>
      {/* Background */}
      <HeroBg style={{ y: bgY }}>
        <img
          alt="Misty Sajek Valley, Bangladesh"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh5PZhzrRLO_dBRY3zR3gEtEa3xx8T6NitI_Mc7GcG66aKAI4Kkpzm0I9UzhQf5PF86f-p09ktNR1Bm8wkJXYh_sQDUZnDppCT-qVnNNLsnyeCWi4OXk8DR4J0K_v4KsDbMyzqwIXvdiL6eDJCAfF9zFRtW1EjeqD55CVm_0SmDhKgBt3Tow0Rt33LUYFf8ZZk9DAI7-sXCyZfjNFL5Ve0k1FrP1HOMkFo24FGGUH4Dj9iczQclgQixUiJqD5Ab0fzHpvK4m5Zjhs"
        />
        <GradientFade />
      </HeroBg>
      {/* Content */}
      <HeroContent style={{ y: contentY, opacity: contentOpacity }}>
        <LabelSpan
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("Bangladesh")} &nbsp;·&nbsp; {t("Discover")}
        </LabelSpan>

        <Headline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("Discover the Wild Beauty of Bangladesh")}
        </Headline>

        <HeroBtn
          onClick={handlePlanTrip}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("Plan My Trip")}
        </HeroBtn>

        {/* Squircle Thumbnails */}
        <ThumbnailsWrapper
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
              }
            }
          }}
        >
          {heroThumbnails.map((thumb, i) => (
            <ThumbnailCard
              key={thumb.alt}
              $zIndex={i === 0 ? 30 : i === 1 ? 20 : 10}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40, 
                  scale: 0.8, 
                  rotate: i === 0 ? -15 : i === 2 ? 15 : 0 
                },
                show: { 
                  opacity: 1, 
                  y: i === 1 ? -16 : 0, 
                  scale: 1, 
                  rotate: 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 }
                }
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: i === 0 ? -5 : i === 2 ? 5 : 0, 
                zIndex: 40,
                transition: { duration: 0.3 }
              }}
            >
              <img
                alt={thumb.alt}
                src={thumb.src}
              />
            </ThumbnailCard>
          ))}
        </ThumbnailsWrapper>

        {/* Thumbnail Labels */}
        <LabelsRow
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {heroThumbnails.map((thumb) => (
            <LabelItem key={thumb.label}>
              {thumb.label}
            </LabelItem>
          ))}
        </LabelsRow>
      </HeroContent>
    </HeroHeader>
  );
}
