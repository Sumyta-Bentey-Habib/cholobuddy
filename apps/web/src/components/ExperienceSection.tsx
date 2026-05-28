"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  SectionContainer,
  SectionHeader,
  PhilosophyTag,
  SectionTitle,
  SectionDesc,
  ImageBadgesWrapper,
  ImageWrapper,
  FloatingBadge
} from "./ExperienceSection.styles";

export default function ExperienceSection() {
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <SectionHeader>
        <PhilosophyTag>
          {t("Brand Philosophy")}
        </PhilosophyTag>
        <SectionTitle>
          {t("The CholoBuddy Experience")}
        </SectionTitle>
        <SectionDesc>
          {t(
            "Curated journeys designed for the discerning traveler, blending local authenticity with uncompromising comfort."
          )}
        </SectionDesc>
      </SectionHeader>
      <ImageBadgesWrapper>
        {/* Central Image */}
        <ImageWrapper>
          <img
            alt="Private boat cruising the tranquil rivers of Bangladesh"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNcei7yKfaIYurIvwM6XC5bHSMYmZw5IZSOI240kmXih0cArgtfkQCkVuE-FILwvbBsGyDkz72dr0GK0ZSw-BR-7UfshTo80QJM7UEYgBCS5qaabHPOfgZYNeoMfWL1ATqr7TUdTwaRhYNxYAs7cPTWT1t9LEY8-Ulc3H5cpAX38ZdRZCPY6so1c5sDeN6gI-XrmlMh-iu9ckPYX7JkNg-i9hvgq3T5gZkKICn36efJd7k-JiIgFVkBDgR38BC9FL3A68VFzhc2ls"
          />
        </ImageWrapper>

        {/* Floating Badges */}
        <FloatingBadge $top="40px" $left="10%" $delay={0}>
          <span className="material-symbols-outlined">diamond</span>
          <span>{t("Premium Stays")}</span>
        </FloatingBadge>

        <FloatingBadge $bottom="80px" $left="5%" $delay={1} $reverse>
          <span className="material-symbols-outlined">explore</span>
          <span>{t("Expert Guides")}</span>
        </FloatingBadge>

        <FloatingBadge $top="130px" $right="10%" $delay={2}>
          <span className="material-symbols-outlined">restaurant</span>
          <span>{t("Curated Dining")}</span>
        </FloatingBadge>
      </ImageBadgesWrapper>
    </SectionContainer>
  );
}
