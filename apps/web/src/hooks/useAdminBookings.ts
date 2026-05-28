import { useState, useEffect } from "react";

export function useAdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings?all=true");
        if (res.ok) {
          setBookings(await res.json());
        }
      } catch (error) {
        console.error("Failed to fetch all bookings", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

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

  return { bookings, isLoading, updateBookingStatus, deleteBooking };
}
