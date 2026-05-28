import { useState, useEffect } from "react";

export function useBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");
        if (res.ok) {
          setBookings(await res.json());
        }
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const deleteBooking = async (id: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookings(prev => prev.filter(b => b._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  };

  return { bookings, isLoading, deleteBooking };
}
