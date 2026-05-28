"use client";

import { useState } from "react";

export type BookingStatusType = "idle" | "booking" | "booked";

interface BookingOptions {
  pricePerTraveler: number;
  ecoTaxPerTraveler: number;
}

export function useBooking(options: BookingOptions = { pricePerTraveler: 12500, ecoTaxPerTraveler: 500 }) {
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState("oct_24");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<BookingStatusType>("idle");

  const { pricePerTraveler, ecoTaxPerTraveler } = options;

  const subtotal = guests * pricePerTraveler;
  const ecoTax = guests * ecoTaxPerTraveler;
  const total = subtotal + ecoTax;

  const incrementGuests = () => {
    if (guests < 10) setGuests((g) => g + 1);
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests((g) => g - 1);
  };

  const handleBook = async (tourId: string, tourTitle: string) => {
    setBookingStatus("booking");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tourId, tourTitle, guests, date: selectedDate, totalAmount: total }),
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
    setGuests,
    incrementGuests,
    decrementGuests,
    selectedDate,
    setSelectedDate,
    showDatePicker,
    setShowDatePicker,
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
