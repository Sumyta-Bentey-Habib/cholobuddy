"use client";

import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { recentSearchesData } from "@/lib/data";
import {
  Container,
  LabelSpan,
  SearchesRow,
  SearchCard,
  SearchTitle,
  SearchDesc
} from "./RecentSearches.styles";

export default function RecentSearches() {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === "en";

  return (
    <Container>
      <LabelSpan>
        {isEn ? "Recent Searches" : "সাম্প্রতিক অনুসন্ধান"}
      </LabelSpan>
      <SearchesRow>
        {recentSearchesData.map((search) => (
          <SearchCard key={search.id}>
            <span className="material-symbols-outlined">history</span>
            <div>
              <SearchTitle>{search.destination}</SearchTitle>
              <SearchDesc>
                {search.guests} {isEn ? "guest" : "অতিথি"}
                {search.guests > 1 ? (isEn ? "s" : "") : ""} · {search.type} ·{" "}
                {search.dates}
              </SearchDesc>
            </div>
          </SearchCard>
        ))}
      </SearchesRow>
    </Container>
  );
}
