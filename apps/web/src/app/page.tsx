import React from "react";
import ExplorePageClient from "./ExplorePageClient";

export const dynamic = "force-dynamic";

export default async function ExplorePage() {
  let tours = [];
  try {
    const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
    const res = await fetch(`${apiURL}/api/tours`, { cache: "no-store" });
    if (res.ok) {
      tours = await res.json();
    } else {
      console.error("Failed to fetch tours on home page: status", res.status);
    }
  } catch (error) {
    console.error("Error fetching tours on home page server:", error);
  }

  return <ExplorePageClient initialTours={tours} />;
}
