"use client";

import React from "react";
import { type Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import type { Hotel } from "@/lib/data";
import {
  CardContainer,
  ImageWrapper,
  HotelImage,
  CategoryTag,
  CardBody,
  CardTitle,
  LocationRow,
  CardFooter,
  RatingRow,
  RatingBadgeGroup,
  RatingBadge,
  RatingLabel,
  PriceWrapper,
  StrikethroughPrice,
  PriceText,
  SelectRoomBtn
} from "./styles";

interface HotelCardProps {
  hotel: Hotel;
  variants: Variants;
}

export default function HotelCard({ hotel, variants }: HotelCardProps) {
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  const originalPrice = parseInt(hotel.price.replace(/,/g, "")) || 0;
  const strikethroughPrice = Math.round(originalPrice * 1.3).toLocaleString();

  const ratingLabel = parseFloat(hotel.rating) >= 9.2 ? "Superb" : "Very Good";

  return (
    <CardContainer variants={variants}>
      {/* Image */}
      <ImageWrapper>
        <HotelImage
          alt={hotel.name}
          src={hotel.imgUrl}
        />
        <CategoryTag>
          {t(hotel.category)}
        </CategoryTag>
      </ImageWrapper>
      {/* Body */}
      <CardBody>
        <div>
          <CardTitle>{t(hotel.name)}</CardTitle>
          <LocationRow>
            {t(hotel.location)} · {t(hotel.distanceNote)}
          </LocationRow>
        </div>

        <CardFooter>
          <RatingRow>
            {/* Rating */}
            <RatingBadgeGroup>
              <RatingBadge>{hotel.rating}</RatingBadge>
              <RatingLabel>{t(ratingLabel)}</RatingLabel>
            </RatingBadgeGroup>

            {/* Price */}
            <PriceWrapper>
              <StrikethroughPrice>{t("common.currency")}{strikethroughPrice}</StrikethroughPrice>
              <PriceText>{t("common.currency")}{hotel.price}</PriceText>
            </PriceWrapper>
          </RatingRow>

          <SelectRoomBtn>
            {t("Select Room")}
          </SelectRoomBtn>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
}
