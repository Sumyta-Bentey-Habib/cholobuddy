"use client";

import React from "react";
import {
  GalleryContainer,
  PrimaryWrapper,
  ThumbnailsGrid,
  ThumbnailWrapper,
  FallbackWrapper
} from "./TripGallery.styles";

interface TripGalleryProps {
  primaryImg: string;
  galleryImages: string[];
}

export default function TripGallery({ primaryImg, galleryImages }: TripGalleryProps) {
  const hasThumbnails = galleryImages && galleryImages.length > 0;

  return (
    <GalleryContainer $hasThumbnails={hasThumbnails}>
      {/* Left: 1 Large Image */}
      <PrimaryWrapper style={{ height: hasThumbnails ? undefined : "480px" }}>
        <img
          alt="Tour Primary"
          src={primaryImg}
        />
      </PrimaryWrapper>
      
      {/* Right: 4 Smaller Thumbnails in a 2x2 Grid */}
      {hasThumbnails && (
        <ThumbnailsGrid>
          {galleryImages.slice(0, 3).map((imgUrl, index) => (
            <ThumbnailWrapper key={index}>
              <img
                alt={`Tour Thumbnail ${index}`}
                src={imgUrl}
              />
            </ThumbnailWrapper>
          ))}
          
          {/* "+12 Photos" fallback node */}
          <FallbackWrapper>
            <img
              alt="Tour More"
              src={galleryImages[3] || primaryImg}
            />
            <span>
              +12 Photos
            </span>
          </FallbackWrapper>
        </ThumbnailsGrid>
      )}
    </GalleryContainer>
  );
}
