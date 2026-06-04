import { useState } from "react";

interface BookingOptions {
  pricePerTraveler: number;
  ecoTaxPerTraveler: number;
}

export function useBooking(options: BookingOptions = { pricePerTraveler: 12500, ecoTaxPerTraveler: 500 }) {
  const [guests] = useState(1);

  const { pricePerTraveler, ecoTaxPerTraveler } = options;

  const subtotal = guests * pricePerTraveler;
  const ecoTax = guests * ecoTaxPerTraveler;
  const total = subtotal + ecoTax;

  return {
    guests,
    bookingStatus: "idle" as const,
    pricePerTraveler,
    ecoTaxPerTraveler,
    subtotal,
    ecoTax,
    total,
  };
}
