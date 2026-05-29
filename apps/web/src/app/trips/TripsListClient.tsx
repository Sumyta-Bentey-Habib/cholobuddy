"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { useLanguage } from "@/hooks/useLanguage";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import {
  PageContainer,
  ContentWrapper,
  HeaderSection,
  MainTitle,
  Subtitle,
  FiltersWrapper,
  SearchContainer,
  SearchInput,
  StatsInfo,
  ToursGrid,
  NoDataText,
  NoDataIcon,
  ClearFiltersBtn
} from "./trips-list.styles";

interface TripsListClientProps {
  initialTours: any[];
}

export default function TripsListClient({ initialTours }: TripsListClientProps) {
  const { currentLanguage } = useLanguage();
  const { containerVariants, itemVariants } = useAnimationVariants();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = initialTours.filter((tour) => {
    const title = (currentLanguage === "bn" ? (tour.titleBn || tour.title) : tour.title) || "";
    const location = (currentLanguage === "bn" ? (tour.locationBn || tour.location) : tour.location) || "";
    const description = (currentLanguage === "bn" ? (tour.descriptionBn || tour.description) : tour.description) || "";
    const query = searchQuery.toLowerCase();
    
    return (
      title.toLowerCase().includes(query) ||
      location.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Navbar />
      <PageContainer>
        <ContentWrapper>
          {/* Page Header */}
          <HeaderSection>
            <MainTitle>
              {currentLanguage === "bn" ? "সকল ভ্রমণ পরিকল্পনা" : "All Tour Plans"}
            </MainTitle>
            <Subtitle>
              {currentLanguage === "bn"
                ? "বাংলাদেশ জুড়ে আমাদের সিগনেচার লাক্সারি ইকো-ক্রুজ এবং এক্সক্লুসিভ ভ্রমণ পরিকল্পনার সংগ্রহ।"
                : "A curated collection of our signature luxury eco-cruises and exclusive itineraries across Bangladesh."}
            </Subtitle>
          </HeaderSection>

          {/* Search and Filters */}
          <FiltersWrapper>
            <SearchContainer>
              <span className="material-symbols-outlined">search</span>
              <SearchInput
                type="text"
                placeholder={currentLanguage === "bn" ? "গন্তব্য বা ভ্রমণের নাম দিয়ে খুঁজুন..." : "Search by destination or tour name..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
            <StatsInfo>
              {currentLanguage === "bn"
                ? `মোট ${filteredTours.length} টি ভ্রমণ পরিকল্পনা পাওয়া গেছে`
                : `Found ${filteredTours.length} ${filteredTours.length === 1 ? "tour plan" : "tour plans"}`}
            </StatsInfo>
          </FiltersWrapper>

          {/* Tours Grid / States */}
          {filteredTours.length > 0 ? (
            <ToursGrid
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
            >
              {filteredTours.map((tour) => (
                <TourCard key={tour._id || tour.id} tour={tour} variants={itemVariants} />
              ))}
            </ToursGrid>
          ) : (
            <NoDataText>
              <NoDataIcon className="material-symbols-outlined">
                travel_explore
              </NoDataIcon>
              <p>
                {currentLanguage === "bn"
                  ? "আপনার অনুসন্ধানের সাথে মিলে যাওয়া কোনো ভ্রমণ পরিকল্পনা পাওয়া যায়নি।"
                  : "No tour plans found matching your search."}
              </p>
              {searchQuery && (
                <ClearFiltersBtn onClick={() => setSearchQuery("")}>
                  {currentLanguage === "bn" ? "অনুসন্ধান মুছুন" : "Clear Search"}
                </ClearFiltersBtn>
              )}
            </NoDataText>
          )}
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
}
