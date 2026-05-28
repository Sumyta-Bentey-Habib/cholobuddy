"use client";

import React from "react";
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
import { useTours } from "@/hooks/useTours";
import {
  MainContainer,
  ToursSection,
  ToursInner,
  SectionHeader,
  TagLine,
  SectionHeading,
  ViewAllBtn,
  LoadingIndicator,
  ToursGrid,
  NoDataText,
  AlponaDivider,
  AlponaCenterMotif
} from "./page.styles";

export default function ExplorePage() {
  const { currentLanguage } = useLanguage();
  const { containerVariants, itemVariants } = useAnimationVariants();
  const { tours, isLoading } = useTours();
  const isEn = currentLanguage === "en";

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
                  {isEn ? "Recommended" : "সুপারিশকৃত"}
                </TagLine>
                <SectionHeading>
                  {isEn ? "Top Destinations" : "শীর্ষ গন্তব্য"}
                </SectionHeading>
              </div>
              <ViewAllBtn
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEn ? "View All" : "সব দেখুন"}
              </ViewAllBtn>
            </SectionHeader>

            {/* 3-Column Staggered Tour Grid */}
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <ToursGrid
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={containerVariants}
              >
                {tours.length > 0 ? (
                  tours.map((tour) => (
                    <TourCard key={tour._id || tour.id} tour={tour} variants={itemVariants} />
                  ))
                ) : (
                  <NoDataText>
                    {isEn ? "No tours available yet." : "এখনও কোন ট্যুর উপলব্ধ নেই।"}
                  </NoDataText>
                )}
              </ToursGrid>
            )}
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
