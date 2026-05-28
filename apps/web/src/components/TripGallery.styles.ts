"use client";

import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 8px;
  border: 1px solid rgba(196, 199, 199, 0.15);
  padding: 8px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    grid-template-cols: 1fr 1fr;
  }
`;

export const PrimaryWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(196, 199, 199, 0.1);

  @media (min-width: 768px) {
    aspect-ratio: auto;
    height: 384px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(125%);
    transition: all 0.7s ease;
    cursor: pointer;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const ThumbnailsGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr 1fr;
  gap: 8px;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(196, 199, 199, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(125%);
    transition: all 0.7s ease;
    cursor: pointer;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const FallbackWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(196, 199, 199, 0.1);
  background-color: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(125%);
    opacity: 0.3;
    transition: all 0.7s ease;
  }

  &:hover img {
    opacity: 0.5;
  }

  span {
    position: relative;
    z-index: 10;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
`;
