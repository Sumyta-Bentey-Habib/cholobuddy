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
  const {
    t: t,
    currentLanguage
  } = useLanguage();

  return (
    <Container>
      <LabelSpan>
        {t("Recent Searches")}
      </LabelSpan>
      <SearchesRow>
        {recentSearchesData.map((search) => (
          <SearchCard key={search.id}>
            <span className="material-symbols-outlined">history</span>
            <div>
              <SearchTitle>{search.destination}</SearchTitle>
              <SearchDesc>
                {search.guests} {t("guest")}
                {search.guests > 1 ? (t("s")) : ""} · {search.type} ·{" "}
                {search.dates}
              </SearchDesc>
            </div>
          </SearchCard>
        ))}
      </SearchesRow>
    </Container>
  );
}
