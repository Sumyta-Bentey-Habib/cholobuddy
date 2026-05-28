"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";
import Hero from "@/components/Hero";
import SearchWidget from "@/components/SearchWidget";
import RecentSearches from "@/components/RecentSearches";
import ExperienceSection from "@/components/ExperienceSection";
import TourCard from "@/components/TourCard";
import HotelCard from "@/components/HotelCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import { hotelsData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { useTours } from "@/hooks/useTours";
import {
  MainContainer,
  SearchSection,
  RulerMotif,
  RecentSection,
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
  AlponaCenterMotif,
  HotelsSection,
  HotelsInner,
  HotelsTag,
  HotelsHeading,
  HotelsScroll
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

        {/* Search Widget */}
        <SearchSection>
          <SearchWidget />
        </SearchSection>

        {/* Blueprint Divider */}
        <RulerMotif />

        {/* Recent Searches */}
        <RecentSection>
          <RecentSearches />
        </RecentSection>

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
              <ViewAllBtn>
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

        {/* Top Rated Hotels (Dark Horizontal Scroll) */}
        <HotelsSection>
          <HotelsInner>
            <HotelsTag>
              {isEn ? "Verified Stays" : "যাচাইকৃত থাকার ব্যবস্থা"}
            </HotelsTag>
            <HotelsHeading>
              {isEn ? "Top Rated Hotels" : "শীর্ষ রেটেড হোটেল"}
            </HotelsHeading>
          </HotelsInner>

          <HotelsScroll
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="custom-scrollbar"
          >
            {hotelsData.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} variants={itemVariants} />
            ))}
          </HotelsScroll>
        </HotelsSection>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Newsletter */}
        <NewsletterSection />
      </MainContainer>

      <Footer />
      <ChatBubble />
    </>
  );
}
