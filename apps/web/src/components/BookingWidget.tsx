"use client";

import React from "react";
import { useBooking } from "@/hooks/useBooking";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  WidgetWrapper,
  AlertBadge,
  PricingHeader,
  WidgetTitle,
  PriceRow,
  PriceAmount,
  PriceLabel,
  FormWrapper,
  InputGroup,
  InputLabel,
  DatePickerBtn,
  DropdownMenu,
  DropdownItem,
  CounterRow,
  CounterBtn,
  CounterVal,
  InvoiceCard,
  InvoiceRow,
  InvoiceTotalRow,
  BookButton,
  SlotsText
} from "./BookingWidget.styles";

interface BookingWidgetProps {
  pricePerTraveler: number;
  ecoTaxPerTraveler: number;
  tourId: string;
  tourTitle: string;
}

export default function BookingWidget({ pricePerTraveler, ecoTaxPerTraveler, tourId, tourTitle }: BookingWidgetProps) {
  const { t } = useLanguage();
  const { session } = useAuth();
  const router = useRouter();

  const {
    guests,
    incrementGuests,
    decrementGuests,
    selectedDate,
    setSelectedDate,
    showDatePicker,
    setShowDatePicker,
    bookingStatus,
    subtotal,
    ecoTax,
    total,
  } = useBooking({ pricePerTraveler, ecoTaxPerTraveler });

  const datesList = ["oct_24", "nov_08", "dec_15"];

  const handleBookingRedirect = () => {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    router.push(
      `/payment?tourId=${tourId}&tourTitle=${encodeURIComponent(tourTitle)}&guests=${guests}&date=${selectedDate}&totalAmount=${total}`
    );
  };

  return (
    <WidgetWrapper>
      {/* Crimson Urgency Alert Badge */}
      <AlertBadge>
        <span className="material-symbols-outlined">local_fire_department</span>
        <span className="label">{t("Only 2 slots remaining!")}</span>
      </AlertBadge>

      <PricingHeader>
        <WidgetTitle>
          {t("trip_detail.widget.title")}
        </WidgetTitle>
        <PriceRow>
          <PriceAmount>৳{pricePerTraveler.toLocaleString()}</PriceAmount>
          <PriceLabel>{t("trip_detail.widget.per_traveler")}</PriceLabel>
        </PriceRow>
      </PricingHeader>

      <FormWrapper>
        {/* Date Selector */}
        <InputGroup>
          <InputLabel>{t("trip_detail.widget.select_date")}</InputLabel>
          <DatePickerBtn onClick={() => setShowDatePicker(!showDatePicker)}>
            <span className="date-val">
              {t("trip_detail.widget.dates." + selectedDate)}
            </span>
            <span className="material-symbols-outlined">calendar_today</span>
          </DatePickerBtn>

          {/* Dropdown Options */}
          {showDatePicker && (
            <DropdownMenu>
              {datesList.map((d) => (
                <DropdownItem
                  key={d}
                  onClick={() => {
                    setSelectedDate(d);
                    setShowDatePicker(false);
                  }}
                  $active={selectedDate === d}
                >
                  {t("trip_detail.widget.dates." + d)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </InputGroup>

        {/* Number of Guests Counter */}
        <InputGroup>
          <InputLabel>{t("trip_detail.widget.num_guests")}</InputLabel>
          <CounterRow>
            <CounterBtn
              onClick={decrementGuests}
              disabled={guests <= 1 || bookingStatus !== "idle"}
            >
              <span className="material-symbols-outlined">remove</span>
            </CounterBtn>
            <CounterVal>{guests}</CounterVal>
            <CounterBtn
              onClick={incrementGuests}
              disabled={guests >= 10 || bookingStatus !== "idle"}
            >
              <span className="material-symbols-outlined">add</span>
            </CounterBtn>
          </CounterRow>
        </InputGroup>

        {/* Price Breakdown Card */}
        <InvoiceCard>
          <InvoiceRow>
            <span>
              {t("trip_detail.widget.breakdown.tour_price")} ({guests} x ৳{pricePerTraveler.toLocaleString()})
            </span>
            <span>৳{subtotal.toLocaleString()}</span>
          </InvoiceRow>
          <InvoiceRow>
            <span>{t("trip_detail.widget.breakdown.eco_tax")}</span>
            <span>৳{ecoTax.toLocaleString()}</span>
          </InvoiceRow>
          
          <InvoiceTotalRow>
            <span>{t("trip_detail.widget.breakdown.total")}</span>
            <span>৳{total.toLocaleString()}</span>
          </InvoiceTotalRow>
        </InvoiceCard>

        {/* Submit button */}
        <BookButton
          onClick={handleBookingRedirect}
          disabled={bookingStatus !== "idle"}
          $status={bookingStatus}
        >
          {bookingStatus === "idle" && t("trip_detail.widget.btn_idle")}
          {bookingStatus === "booking" && t("trip_detail.widget.btn_booking")}
          {bookingStatus === "booked" && t("trip_detail.widget.btn_booked")}
        </BookButton>

        <SlotsText>
          {t("trip_detail.widget.remaining_slots")}
        </SlotsText>
      </FormWrapper>
    </WidgetWrapper>
  );
}
