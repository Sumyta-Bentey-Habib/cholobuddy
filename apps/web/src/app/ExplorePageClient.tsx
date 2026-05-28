"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import TourCard from "@/components/TourCard";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import {
  MainContainer,
  ToursSection,
  ToursInner,
  SectionHeader,
  TagLine,
  SectionHeading,
  ViewAllBtn,
  ToursGrid,
  NoDataText,
  AlponaDivider,
  AlponaCenterMotif
} from "./page.styles";

interface ExplorePageClientProps {
  initialTours: any[];
}

export default function ExplorePageClient({ initialTours }: ExplorePageClientProps) {
  const { t } = useLanguage();
  const { containerVariants, itemVariants } = useAnimationVariants();

  return (
    <>
      <Navbar />
      <MainContainer>
        {/* Hero */}
        <Hero />

        {/* CholoBuddy Experience */}
        <ExperienceSection />

        {/* Featured Tours */}
        <ToursSection>
          <ToursInner>
            <SectionHeader>
              <div>
                <TagLine>
                  {t("Recommended")}
                </TagLine>
                <SectionHeading>
                  {t("Top Destinations")}
                </SectionHeading>
              </div>
              <ViewAllBtn
                as={Link}
                href="/trips"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                {t("View All")}
              </ViewAllBtn>
            </SectionHeader>

            {/* 3-Column Staggered Tour Grid */}
            <ToursGrid
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              {initialTours.length > 0 ? (
                initialTours.slice(0, 3).map((tour) => (
                  <TourCard key={tour._id || tour.id} tour={tour} variants={itemVariants} />
                ))
              ) : (
                <NoDataText>
                  {t("No tours available yet.")}
                </NoDataText>
              )}
            </ToursGrid>
          </ToursInner>
        </ToursSection>

        {/* Alpona Divider Motif */}
        <AlponaDivider>
          <AlponaCenterMotif />
        </AlponaDivider>

        {/* Travel Categories */}
        <CategoriesSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Newsletter */}
        <NewsletterSection />
      </MainContainer>
      <Footer />
    </>
  );
}
