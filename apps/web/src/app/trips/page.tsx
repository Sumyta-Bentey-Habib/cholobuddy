import React from "react";
import TripsListClient from "./TripsListClient";

export const dynamic = "force-dynamic";

export default async function TripsPage() {
  let tours = [];
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    const res = await fetch(`${apiURL}/api/tours`, { cache: "no-store" });
    if (res.ok) {
      tours = await res.json();
    } else {
      console.error("Failed to fetch tours: status", res.status);
    }
  } catch (error) {
    console.error("Error fetching tours on server:", error);
  }

  return <TripsListClient initialTours={tours} />;
}
