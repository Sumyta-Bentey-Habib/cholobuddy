import { useState, useEffect } from "react";
import { useToast } from "@/context/Toast";

export function useAdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

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
        toast.success(`Booking status updated to ${status}!`);
      } else {
        toast.error("Failed to update status.");
      }
    } catch (error) {
      console.error("Failed to update status", error);
      toast.error("Failed to update status.");
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookings(prev => prev.filter(b => b._id !== id));
        toast.success("Booking deleted successfully!");
      } else {
        toast.error("Failed to delete booking.");
      }
    } catch (error) {
      console.error("Failed to delete booking", error);
      toast.error("Failed to delete booking.");
    }
  };

  return { bookings, isLoading, updateBookingStatus, deleteBooking };
}
