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
  return (
    <GalleryContainer>
      {/* Left: 1 Large Image */}
      <PrimaryWrapper>
        <img
          alt="Sundarbans Primary"
          src={primaryImg}
        />
      </PrimaryWrapper>
      
      {/* Right: 4 Smaller Thumbnails in a 2x2 Grid */}
      <ThumbnailsGrid>
        {galleryImages.slice(0, 3).map((imgUrl, index) => (
          <ThumbnailWrapper key={index}>
            <img
              alt={`Sundarbans Thumbnail ${index}`}
              src={imgUrl}
            />
          </ThumbnailWrapper>
        ))}
        
        {/* "+12 Photos" fallback node */}
        <FallbackWrapper>
          <img
            alt="Sundarbans More"
            src={galleryImages[3] || primaryImg}
          />
          <span>
            +12 Photos
          </span>
        </FallbackWrapper>
      </ThumbnailsGrid>
    </GalleryContainer>
  );
}
