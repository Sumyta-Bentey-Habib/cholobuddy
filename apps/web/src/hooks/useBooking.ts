"use client";

import { useState } from "react";

export type BookingStatusType = "idle" | "booking" | "booked";

interface BookingOptions {
  pricePerTraveler: number;
  ecoTaxPerTraveler: number;
}

export function useBooking(options: BookingOptions = { pricePerTraveler: 12500, ecoTaxPerTraveler: 500 }) {
  const [guests] = useState(1);
  const [bookingStatus, setBookingStatus] = useState<BookingStatusType>("idle");

  const { pricePerTraveler, ecoTaxPerTraveler } = options;

  const subtotal = guests * pricePerTraveler;
  const ecoTax = guests * ecoTaxPerTraveler;
  const total = subtotal + ecoTax;

  const handleBook = async (tourId: string, tourTitle: string) => {
    setBookingStatus("booking");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourId, tourTitle, guests, date: "oct_24", totalAmount: total }),
      });
      if (res.ok) {
        setBookingStatus("booked");
      } else {
        setBookingStatus("idle");
      }
    } catch (error) {
      console.error(error);
      setBookingStatus("idle");
    }
  };

  const cancelBooking = async (id: string) => {
    try {
      await fetch(`/api/bookings/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    guests,
    bookingStatus,
    handleBook,
    cancelBooking,
    pricePerTraveler,
    ecoTaxPerTraveler,
    subtotal,
    ecoTax,
    total,
  };
}
