"use client";

import React, { useState, useEffect } from "react";
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
  const { t, registerTranslations } = useLanguage();
  const { containerVariants, itemVariants } = useAnimationVariants();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    registerTranslations(initialTours);
  }, [initialTours, registerTranslations]);

  const filteredTours = initialTours.filter((tour) => {
    const title = t(tour.title) || "";
    const location = t(tour.location) || "";
    const description = t(tour.description) || "";
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
              {t("trips.list.title")}
            </MainTitle>
            <Subtitle>
              {t("trips.list.subtitle")}
            </Subtitle>
          </HeaderSection>

          {/* Search and Filters */}
          <FiltersWrapper>
            <SearchContainer>
              <span className="material-symbols-outlined">search</span>
              <SearchInput
                type="text"
                placeholder={t("trips.list.search_placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
            <StatsInfo>
              {t("trips.list.found_count", { count: filteredTours.length })}
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
                {t("trips.list.no_results")}
              </p>
              {searchQuery && (
                <ClearFiltersBtn onClick={() => setSearchQuery("")}>
                  {t("trips.list.clear_search")}
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
