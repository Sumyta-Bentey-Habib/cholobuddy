"use client";

import React from "react";
import { useSearch } from "@/hooks/useSearch";
import { useLanguage } from "@/hooks/useLanguage";
import {
  WidgetContainer,
  FormRow,
  TabSwitcher,
  TabButton,
  InputGroup,
  InputLabel,
  SelectBox,
  IconInputRow,
  TextInput,
  NumberInput,
  SubmitWrapper,
  SearchBtn
} from "./SearchWidget.styles";

const DESTINATIONS = [
  { value: "coxs-bazar", label: "Cox's Bazar", labelBn: "কক্সবাজার" },
  { value: "sylhet", label: "Sylhet Tea Gardens", labelBn: "সিলেট চা-বাগান" },
  { value: "sundarbans", label: "Sundarbans", labelBn: "সুন্দরবন" },
  { value: "sajek", label: "Sajek Valley", labelBn: "সাজেক ভ্যালি" },
  { value: "dhaka", label: "Dhaka", labelBn: "ঢাকা" },
];

export default function SearchWidget() {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === "en";
  const {
    searchTab,
    setSearchTab,
    destination,
    setDestination,
    guests,
    setGuests,
    dates,
    setDates,
    handleSearch,
  } = useSearch();

  return (
    <WidgetContainer>
      <FormRow onSubmit={handleSearch}>
        {/* Tab Switcher */}
        <TabSwitcher>
          {[
            { value: "hotels", icon: "🛌", label: isEn ? "Stays" : "থাকার ব্যবস্থা" },
            { value: "tours", icon: "🗺️", label: isEn ? "Tours" : "ট্যুর" },
          ].map((tab) => (
            <TabButton
              key={tab.value}
              type="button"
              onClick={() => setSearchTab(tab.value as "hotels" | "tours")}
              $active={searchTab === tab.value}
            >
              {tab.icon} {tab.label}
            </TabButton>
          ))}
        </TabSwitcher>

        {/* Destination */}
        <InputGroup>
          <InputLabel>
            {isEn ? "Destination" : "গন্তব্য"}
          </InputLabel>
          <SelectBox
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {DESTINATIONS.map((d) => (
              <option key={d.value} value={d.value}>
                {isEn ? d.label : d.labelBn}
              </option>
            ))}
          </SelectBox>
        </InputGroup>

        {/* Dates */}
        <InputGroup>
          <InputLabel>
            {isEn ? "Dates" : "তারিখ"}
          </InputLabel>
          <IconInputRow>
            <span className="material-symbols-outlined">calendar_month</span>
            <TextInput
              placeholder={isEn ? "When are you going?" : "কখন যাচ্ছেন?"}
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </IconInputRow>
        </InputGroup>

        {/* Guests */}
        <InputGroup>
          <InputLabel>
            {isEn ? "Guests" : "অতিথি"}
          </InputLabel>
          <IconInputRow>
            <span className="material-symbols-outlined">group</span>
            <NumberInput
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
            />
          </IconInputRow>
        </InputGroup>

        {/* Submit */}
        <SubmitWrapper>
          <SearchBtn type="submit">
            {isEn ? "Search" : "খুঁজুন"}
          </SearchBtn>
        </SubmitWrapper>
      </FormRow>
    </WidgetContainer>
  );
}
