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
} from "./styles";

interface BookingWidgetProps {
  pricePerTraveler: number;
  ecoTaxPerTraveler: number;
  tourId: string;
  tourTitle: string;
  endDate?: string;
}

export default function BookingWidget({ pricePerTraveler, ecoTaxPerTraveler, tourId, tourTitle, endDate }: BookingWidgetProps) {
  const { t, currentLanguage } = useLanguage();
  const { session, role } = useAuth();
  const router = useRouter();
  const isAdmin = role === "admin";

  const {
    guests,
    bookingStatus,
    subtotal,
    ecoTax,
    total,
  } = useBooking({ pricePerTraveler, ecoTaxPerTraveler });

  const isExpired = (() => {
    if (!endDate) return false;
    const end = new Date(endDate);
    const today = new Date();
    end.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return end < today;
  })();

  const handleBookingRedirect = () => {
    if (isAdmin) return;
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    router.push(
      `/payment?tourId=${tourId}&tourTitle=${encodeURIComponent(tourTitle)}&guests=${guests}&date=oct_24&totalAmount=${total}`
    );
  };

  return (
    <WidgetWrapper>
      {/* Crimson Urgency Alert Badge */}
      {!isExpired && !isAdmin && (
        <AlertBadge>
          <span className="material-symbols-outlined">local_fire_department</span>
          <span className="label">{t("Only 2 slots remaining!")}</span>
        </AlertBadge>
      )}

      <PricingHeader>
        <WidgetTitle>
          {t("trip_detail.widget.title")}
        </WidgetTitle>
        <PriceRow>
          <PriceAmount>{t("common.currency")}{pricePerTraveler.toLocaleString()}</PriceAmount>
          <PriceLabel>{t("trip_detail.widget.per_traveler")}</PriceLabel>
        </PriceRow>
      </PricingHeader>

      <FormWrapper>
        {/* Price Breakdown Card */}
        <InvoiceCard>
          <InvoiceRow>
            <span>
              {t("trip_detail.widget.breakdown.tour_price")} ({guests} x {t("common.currency")}{pricePerTraveler.toLocaleString()})
            </span>
            <span>{t("common.currency")}{subtotal.toLocaleString()}</span>
          </InvoiceRow>
          <InvoiceRow>
            <span>{t("trip_detail.widget.breakdown.eco_tax")}</span>
            <span>{t("common.currency")}{ecoTax.toLocaleString()}</span>
          </InvoiceRow>
          
          <InvoiceTotalRow>
            <span>{t("trip_detail.widget.breakdown.total")}</span>
            <span>{t("common.currency")}{total.toLocaleString()}</span>
          </InvoiceTotalRow>
        </InvoiceCard>

        {/* Submit button */}
        <BookButton
          onClick={handleBookingRedirect}
          disabled={bookingStatus !== "idle" || isExpired || isAdmin}
          $status={isExpired ? "booked" : (isAdmin ? "booked" : bookingStatus)}
        >
          {isAdmin && t("trip_detail.widget.btn_admin_blocked")}
          {!isAdmin && isExpired && t("trip_detail.widget.booking_closed")}
          {!isAdmin && !isExpired && bookingStatus === "idle" && t("trip_detail.widget.btn_idle")}
          {!isAdmin && !isExpired && bookingStatus === "booking" && t("trip_detail.widget.btn_booking")}
          {!isAdmin && !isExpired && bookingStatus === "booked" && t("trip_detail.widget.btn_booked")}
        </BookButton>

        {!isExpired && !isAdmin && (
          <SlotsText>
            {t("trip_detail.widget.remaining_slots")}
          </SlotsText>
        )}
      </FormWrapper>
    </WidgetWrapper>
  );
}
