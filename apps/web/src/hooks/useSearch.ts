"use client";

import { useState } from "react";

export type SearchTabType = "tours" | "hotels";

export interface SearchState {
  searchTab: SearchTabType;
  destination: string;
  guests: number;
  dates: string;
}

/**
 * Manages the search widget's form state: tab selection, destination, guests, dates.
 */
export function useSearch() {
  const [searchTab, setSearchTab] = useState<SearchTabType>("tours");
  const [destination, setDestination] = useState("coxs-bazar");
  const [guests, setGuests] = useState(2);
  const [dates, setDates] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { searchTab, destination, guests, dates });
  };

  return {
    searchTab,
    setSearchTab,
    destination,
    setDestination,
    guests,
    setGuests,
    dates,
    setDates,
    handleSearch,
  };
}
