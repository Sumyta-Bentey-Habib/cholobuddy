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
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === "en";

  return (
    <SectionContainer>
      <SectionHeader>
        <PhilosophyTag>
          {isEn ? "Brand Philosophy" : "ব্র্যান্ড দর্শন"}
        </PhilosophyTag>
        <SectionTitle>
          {isEn ? "The CholoBuddy Experience" : "চলোবাডি অভিজ্ঞতা"}
        </SectionTitle>
        <SectionDesc>
          {isEn
            ? "Curated journeys designed for the discerning traveler, blending local authenticity with uncompromising comfort."
            : "বিচক্ষণ ভ্রমণকারীর জন্য কিউরেটেড যাত্রা, স্থানীয় সত্যতা এবং অসাধারণ আরামের মিশেল।"}
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
          <span>{isEn ? "Premium Stays" : "প্রিমিয়াম থাকার ব্যবস্থা"}</span>
        </FloatingBadge>

        <FloatingBadge $bottom="80px" $left="5%" $delay={1} $reverse>
          <span className="material-symbols-outlined">explore</span>
          <span>{isEn ? "Expert Guides" : "বিশেষজ্ঞ গাইড"}</span>
        </FloatingBadge>

        <FloatingBadge $top="130px" $right="10%" $delay={2}>
          <span className="material-symbols-outlined">restaurant</span>
          <span>{isEn ? "Curated Dining" : "বিশেষ ডাইনিং"}</span>
        </FloatingBadge>
      </ImageBadgesWrapper>
    </SectionContainer>
  );
}
