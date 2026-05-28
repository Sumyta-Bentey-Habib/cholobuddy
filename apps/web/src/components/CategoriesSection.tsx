"use client";

import React from "react";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { useLanguage } from "@/hooks/useLanguage";
import {
  SectionContainer,
  SectionHeader,
  SectionTag,
  SectionTitle,
  CategoriesGrid,
  CategoryCard,
  IconWrapper,
  CategoryTitle,
  CategoryDesc
} from "./CategoriesSection.styles";

const categories = [
  {
    id: 1,
    icon: "hiking",
    title: "Adventure & Trekking",
    titleBn: "অ্যাডভেঞ্চার এবং ট্রেকিং",
    desc: "Thrill-seeking experiences in the wild.",
    descBn: "প্রকৃতির মাঝে রোমাঞ্চকর অভিজ্ঞতা।"
  },
  {
    id: 2,
    icon: "account_balance",
    title: "Heritage & Culture",
    titleBn: "ঐতিহ্য এবং সংস্কৃতি",
    desc: "Dive deep into historical wonders.",
    descBn: "ঐতিহাসিক বিস্ময়ের গভীরে প্রবেশ করুন।"
  },
  {
    id: 3,
    icon: "sailing",
    title: "River Cruises",
    titleBn: "নৌকা বিহার",
    desc: "Relaxing journeys on serene waters.",
    descBn: "শান্ত জলে আরামদায়ক ভ্রমণ।"
  },
  {
    id: 4,
    icon: "forest",
    title: "Wildlife Safaris",
    titleBn: "বন্যপ্রাণী সাফারি",
    desc: "Encounter nature's majestic creatures.",
    descBn: "প্রকৃতির রাজকীয় প্রাণীদের সাথে দেখা করুন।"
  }
];

export default function CategoriesSection() {
  const { containerVariants, itemVariants } = useAnimationVariants();
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTag>{t("Travel Styles")}</SectionTag>
        <SectionTitle>{t("Find Your Perfect Escape")}</SectionTitle>
      </SectionHeader>
      <CategoriesGrid
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.id} variants={itemVariants}>
            <IconWrapper className="icon-wrapper">
              <span className="material-symbols-outlined">{cat.icon}</span>
            </IconWrapper>
            <CategoryTitle>{t(cat.title)}</CategoryTitle>
            <CategoryDesc>{t(cat.desc)}</CategoryDesc>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </SectionContainer>
  );
}
