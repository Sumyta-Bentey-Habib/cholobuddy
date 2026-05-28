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
  const {
    t: t,
    currentLanguage
  } = useLanguage();
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
            { value: "hotels", icon: "🛌", label: t("Stays") },
            { value: "tours", icon: "🗺️", label: t("Tours") },
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
            {t("Destination")}
          </InputLabel>
          <SelectBox
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {DESTINATIONS.map((d) => (
              <option key={d.value} value={d.value}>
                {t(d.label)}
              </option>
            ))}
          </SelectBox>
        </InputGroup>

        {/* Dates */}
        <InputGroup>
          <InputLabel>
            {t("Dates")}
          </InputLabel>
          <IconInputRow>
            <span className="material-symbols-outlined">calendar_month</span>
            <TextInput
              placeholder={t("When are you going?")}
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </IconInputRow>
        </InputGroup>

        {/* Guests */}
        <InputGroup>
          <InputLabel>
            {t("Guests")}
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
            {t("Search")}
          </SearchBtn>
        </SubmitWrapper>
      </FormRow>
    </WidgetContainer>
  );
}
