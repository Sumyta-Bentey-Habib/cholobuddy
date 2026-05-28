"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripGallery from "@/components/TripGallery";
import BookingWidget from "@/components/BookingWidget";
import { itineraryData } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import {
  PageContainer,
  TitleSection,
  TitleRow,
  CategoryBadge,
  MainTitle,
  MetaLocation,
  ReviewsBadge,
  ReviewsTextCol,
  RatingBox,
  GallerySection,
  MotifSeparator,
  ColumnsLayout,
  LeftContentCol,
  InclusionsBox,
  InclusionTitle,
  InclusionGrid,
  InclusionCard,
  ItineraryWrapper,
  SectionHeaderRow,
  SectionHeading,
  SectionSubText,
  Timeline,
  TimelineItem,
  TimelineNode,
  TimelineCard,
  TimelineHeader,
  DayDetailsBox,
  DayActivitiesList,
  ActivityItem,
  DayImageContainer,
  ReviewsBreakdown,
  ReviewHeaderTitle,
  ReviewsGrid,
  ReviewProgressBarCol,
  ReviewProgressBarLabel,
  ProgressBarTrack,
  ProgressBarFill,
  SidebarCol,
  SpinnerWrapper,
  ErrorText
} from "./trips.styles";

export default function TripDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { t, currentLanguage } = useLanguage();


  const [tour, setTour] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchTour = async () => {
      try {
        const res = await fetch(`/api/tours/${id}`);
        if (res.ok) setTour(await res.json());
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <PageContainer style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SpinnerWrapper />
        </PageContainer>
        <Footer />
      </>
    );
  }

  if (!tour) {
    return (
      <>
        <Navbar />
        <PageContainer style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ErrorText>Tour not found</ErrorText>
        </PageContainer>
        <Footer />
      </>
    );
  }

  const pricePerTraveler = tour.price ? parseInt(tour.price.toString().replace(/,/g, "")) : 12500;
  const ecoTaxPerTraveler = Math.round(pricePerTraveler * 0.04);

  const itinerary = itineraryData; // Fallback for now if tour doesn't have itinerary

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const galleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_uf03Ji-brjcYeNrDvd4nEfLZwoqK52jEhmt1rF7tm_74HCmzIHhbqQ7OBbAReL5lzlpsChWCEsz2nXtLOADpaPecpE8wKxFEZyWIErh-EFlurAj-yeJt6Sdg4bUhup2Juby9qJEgtGiP9sacLQDZIu5XEJa0OpMgMBSmzhTEOt2v-FaVL5E2KcqK3U5-1_S-f0w5LMtS5Ub39hJMKT-cIfZdUEQp9JAMKbF5abIN98E9OxgzRe8M5GiNIlqvlQzbMqInaOmObI4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DqD5aT366-hZ-WvXh9eXo9E-a6K-dO-tX-bJ-m-T_Ld5H-t_bM5S7TzY0c5E_h5kHlQ8C7lWd7y-K4qN-d-tUfT-7D2_hK_9wK_m7sL8w7L-N9x-SgKeUa8T-xL_hLq5sV_ZqL9XF5f_d_JbM-O-0fD_gQ-rLp8aQd-W-h7mF8a5w-xT5-M_LqF_D3",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCocIWxyMeW0YZ35I6KZskUjE6kPb3qgLg6ZS_fNoz40OxZRnJFtnKsHyn93GkHGMgXJ4ZJ4EQA5agUysxxJDnUZ2UylHqhzw34IDKipiQP7464KQJV4rbO2KWjwADiXSKLUJ0_keaDWTAZn0gCgJvRflUlR47pr24RwH-kkWmIqlTL6L8w6lphXNNvlAf582TkF5hSzf0XBhxc2jSH02HbmlEdDseZAQsEj456-b1B-OT_B8GIW2OE6Cl6412WggjKC774KkqsBHc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCTng-Dp_AENjc_fhw3mx-fiss9bYNKD2Fht4as4R6K7uQFBdaj_HmXV51z0oDZueY6y3k3sY8I_5fMLIAR4pKQ-dRLWNO5hR56WZcDsZF-06P474EYmcER_QQUO46KvFebfF6_HX2XGhzQzfOmt_xcCyqZCjTYfkAOUma3LhLqsv-FlJxMT_DnR2rOeNN6CN_DiKc75-9N3IwtiCOqPzzqas4tqnx0RrYqNru0sDw5Ylv34nc6SpE2wrllwXvbUqT-_J-hPIibmXk"
  ];

  return (
    <>
      <Navbar />

      <PageContainer>
        {/* Trip Title Block */}
        <TitleSection>
          <TitleRow>
            <div>
              <CategoryBadge>
                <span>
                  {t("trip_detail.badge")}
                </span>
              </CategoryBadge>
              <MainTitle>
                {t("trip_detail.title")}
              </MainTitle>
              <MetaLocation>
                📍 Khulna division, Bangladesh • 2.5 km from forest base
              </MetaLocation>
            </div>

            {/* Top Review Badge */}
            <ReviewsBadge>
              <ReviewsTextCol>
                <p>Superb</p>
                <p>120 Verified Reviews</p>
              </ReviewsTextCol>
              <RatingBox>
                9.4
              </RatingBox>
            </ReviewsBadge>
          </TitleRow>
        </TitleSection>

        {/* Top Image Gallery */}
        <GallerySection>
          <TripGallery
            primaryImg={tour.imgUrl}
            galleryImages={tour.galleryImages || galleryImages}
          />
        </GallerySection>

        {/* Blueprint Ruler Divider */}
        <MotifSeparator />

        {/* Architectural 2-Column Content Layout */}
        <ColumnsLayout>
          {/* Left Column: Facilities, Timeline Itinerary & Review Bars */}
          <LeftContentCol>
            {/* Top Facilities Indicators */}
            <InclusionsBox>
              <InclusionTitle>Key Facilities & Inclusions</InclusionTitle>
              <InclusionGrid>
                <InclusionCard>
                  <span className="material-symbols-outlined">directions_boat</span>
                  <span className="label">AC Cruiser</span>
                </InclusionCard>
                <InclusionCard>
                  <span className="material-symbols-outlined">tour</span>
                  <span className="label">Expert Guide</span>
                </InclusionCard>
                <InclusionCard>
                  <span className="material-symbols-outlined">restaurant</span>
                  <span className="label">All Meals</span>
                </InclusionCard>
                <InclusionCard>
                  <span className="material-symbols-outlined">medical_services</span>
                  <span className="label">First Aid</span>
                </InclusionCard>
              </InclusionGrid>
            </InclusionsBox>

            {/* Timeline Itinerary */}
            <ItineraryWrapper>
              <SectionHeaderRow>
                <SectionHeading>
                  {t("trip_detail.itinerary_title")}
                </SectionHeading>
                <SectionSubText>
                  {t("trip_detail.itinerary_desc")}
                </SectionSubText>
              </SectionHeaderRow>

              {/* Itinerary Timeline List */}
              <Timeline
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {itinerary.map((dayItem, idx) => (
                  <TimelineItem key={idx} variants={itemVariants}>
                    {/* Timeline Node */}
                    <TimelineNode />

                    <TimelineCard>
                      <TimelineHeader>
                        <span>
                          {t(`trip_detail.days.day${idx + 1}_num`)}
                        </span>
                        <h3>
                          {t(`trip_detail.days.day${idx + 1}_title`)}
                        </h3>
                      </TimelineHeader>

                      <DayDetailsBox>
                        <p className="desc">
                          {t(`trip_detail.days.day${idx + 1}_desc`)}
                        </p>

                        {dayItem.activities.length > 0 && (
                          <DayActivitiesList>
                            {dayItem.activities.map((act, actIdx) => (
                              <ActivityItem key={actIdx}>
                                <span className="material-symbols-outlined">{act.icon}</span>
                                <span>{t(`trip_detail.days.day${idx + 1}_act${actIdx + 1}`)}</span>
                              </ActivityItem>
                            ))}
                          </DayActivitiesList>
                        )}

                        {dayItem.imgUrl && (
                          <DayImageContainer>
                            <img
                              alt={dayItem.title}
                              src={dayItem.imgUrl}
                            />
                          </DayImageContainer>
                        )}
                      </DayDetailsBox>
                    </TimelineCard>
                  </TimelineItem>
                ))}
              </Timeline>
            </ItineraryWrapper>

            {/* Review Categories Progress Bars */}
            <ReviewsBreakdown>
              <ReviewHeaderTitle>Review Breakdown</ReviewHeaderTitle>
              <ReviewsGrid>
                <ReviewProgressBarCol>
                  <ReviewProgressBarLabel>
                    <span>Location</span>
                    <span>9.8</span>
                  </ReviewProgressBarLabel>
                  <ProgressBarTrack>
                    <ProgressBarFill $width="98%" />
                  </ProgressBarTrack>
                </ReviewProgressBarCol>
                <ReviewProgressBarCol>
                  <ReviewProgressBarLabel>
                    <span>Cleanliness</span>
                    <span>9.4</span>
                  </ReviewProgressBarLabel>
                  <ProgressBarTrack>
                    <ProgressBarFill $width="94%" />
                  </ProgressBarTrack>
                </ReviewProgressBarCol>
                <ReviewProgressBarCol>
                  <ReviewProgressBarLabel>
                    <span>Service & Staff</span>
                    <span>9.2</span>
                  </ReviewProgressBarLabel>
                  <ProgressBarTrack>
                    <ProgressBarFill $width="92%" />
                  </ProgressBarTrack>
                </ReviewProgressBarCol>
                <ReviewProgressBarCol>
                  <ReviewProgressBarLabel>
                    <span>Value for Money</span>
                    <span>9.0</span>
                  </ReviewProgressBarLabel>
                  <ProgressBarTrack>
                    <ProgressBarFill $width="90%" />
                  </ProgressBarTrack>
                </ReviewProgressBarCol>
              </ReviewsGrid>
            </ReviewsBreakdown>
          </LeftContentCol>

          {/* Right Column: Sticky Booking Widget */}
          <SidebarCol
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <BookingWidget
              pricePerTraveler={pricePerTraveler}
              ecoTaxPerTraveler={ecoTaxPerTraveler}
              tourId={id}
              tourTitle={tour.title}
            />
          </SidebarCol>
        </ColumnsLayout>
      </PageContainer>

      <Footer />
    </>
  );
}
