"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { useLanguage } from "@/hooks/useLanguage";
import { statsData } from "@/lib/data";
import {
  SectionContainer,
  GridContainer,
  StatCard,
  StatValue,
  StatLabel
} from "./StatsSection.styles";

const statLabels: Record<string, string> = {
  "Verified Bookings": "যাচাইকৃত বুকিং",
  "Verified Partners": "যাচাইকৃত অংশীদার",
  Destinations: "গন্তব্য",
  "Happy Explorers": "সন্তুষ্ট পর্যটক",
};

export default function StatsSection() {
  const { containerVariants, itemVariants } = useAnimationVariants();
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <GridContainer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {statsData.map((stat) => (
          <StatCard key={stat.id} variants={itemVariants}>
            <span className="material-symbols-outlined">
              {stat.icon}
            </span>
            <div>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>
                {t(stat.label)}
              </StatLabel>
            </div>
          </StatCard>
        ))}
      </GridContainer>
    </SectionContainer>
  );
}
