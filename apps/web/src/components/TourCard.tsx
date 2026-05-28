"use client";

import React from "react";
import Link from "next/link";
import { type Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useWishlist } from "@/hooks/useWishlist";
import { useAuth } from "@/hooks/useAuth";
import type { Tour } from "@/lib/data";
import {
  CardContainer,
  ImageWrapper,
  TourImage,
  PopularBadge,
  SaveBadge,
  HeartIcon,
  CardBody,
  CardTitle,
  LocationRow,
  InfoText,
  CardFooter,
  RatingRow,
  RatingBadgeGroup,
  RatingBadge,
  RatingLabel,
  PriceWrapper,
  StrikethroughPrice,
  PriceText,
  BookCta
} from "./TourCard.styles";

interface TourCardProps {
  tour: Tour;
  variants: Variants;
}

export default function TourCard({ tour, variants }: TourCardProps) {
  const {
    t: t,
    currentLanguage
  } = useLanguage();
  const { savedTourIds, toggleWishlist } = useWishlist();
  const { role } = useAuth();

  const tourId = (tour as any)._id || tour.id;
  const isSaved = savedTourIds.includes(tourId);

  const originalPrice = parseInt(tour.price?.toString().replace(/,/g, "") || "0") || 0;
  const strikethroughPrice = Math.round(originalPrice * 1.25).toLocaleString();

  const ratingLabel = parseFloat(tour.rating || "9.0") >= 9.2 ? "Superb" : "Excellent";

  return (
    <CardContainer variants={variants}>
      <Link href={`/trips/${tourId}`} style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}>
        {/* Image */}
        <ImageWrapper>
          <TourImage
            alt={currentLanguage === "bn" ? (tour.titleBn || tour.title) : tour.title}
            src={tour.imgUrl}
          />
          {tour.popular && (
            <PopularBadge>
              {t("Popular")}
            </PopularBadge>
          )}
          {role !== "admin" && (
            <SaveBadge
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(tourId);
              }}
              aria-label="Save to Wishlist"
            >
              <HeartIcon viewBox="0 0 24 24" $saved={isSaved}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </HeartIcon>
            </SaveBadge>
          )}
        </ImageWrapper>

        {/* Body */}
        <CardBody>
          <div>
            <CardTitle>
              {currentLanguage === "bn" ? (tour.titleBn || tour.title) : tour.title}
            </CardTitle>

            <LocationRow>
              {currentLanguage === "bn" ? (tour.locationBn || tour.location) : tour.location} {tour.distanceNote ? `· ${tour.distanceNote}` : ""}
            </LocationRow>

            <InfoText>
              {currentLanguage === "bn" ? (tour.durationBn || tour.duration) : tour.duration} · {currentLanguage === "bn" ? (tour.descriptionBn || tour.description) : tour.description}
            </InfoText>
          </div>

          {/* Footer */}
          <CardFooter>
            <RatingRow>
              {/* Rating */}
              <RatingBadgeGroup>
                <RatingBadge>{tour.rating || "9.0"}</RatingBadge>
                <RatingLabel>{t(ratingLabel)}</RatingLabel>
              </RatingBadgeGroup>

              {/* Price */}
              <PriceWrapper>
                <StrikethroughPrice>৳{strikethroughPrice}</StrikethroughPrice>
                <PriceText>৳{tour.price}</PriceText>
              </PriceWrapper>
            </RatingRow>

            {/* Book CTA */}
            <BookCta>
              {t("Book Now")}
            </BookCta>
          </CardFooter>
        </CardBody>
      </Link>
    </CardContainer>
  );
}
