"use client";

import React from "react";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { testimonialsData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import {
  SectionContainer,
  SectionTitle,
  GridContainer,
  ColumnWrapper,
  TestimonialCard,
  StarsWrapper,
  TestimonialQuote,
  AuthorName,
  AuthorLocation
} from "./styles";

export default function TestimonialsSection() {
  const { containerVariants, itemVariants } = useAnimationVariants();
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <SectionContainer>
      <SectionTitle>
        {t("Loved by Discerning Travelers")}
      </SectionTitle>
      <GridContainer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {testimonialsData.map((review, i) => (
          <ColumnWrapper
            key={review.id}
            variants={itemVariants}
            $marginTop={i === 0 ? "48px" : i === 2 ? "96px" : "0px"}
          >
            <TestimonialCard>
              <StarsWrapper>
                {Array.from({ length: review.rating }).map((_, si) => (
                  <span
                    key={si}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </StarsWrapper>

              <TestimonialQuote>
                “{t(review.quote)}”
              </TestimonialQuote>

              <div>
                <AuthorName>— {t(review.author)}</AuthorName>
                <AuthorLocation>{t(review.location)}</AuthorLocation>
              </div>
            </TestimonialCard>
          </ColumnWrapper>
        ))}
      </GridContainer>
    </SectionContainer>
  );
}
