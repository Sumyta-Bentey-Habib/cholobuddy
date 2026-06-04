import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/context/Toast";

export function useBookings() {
  const { data: session } = authClient.useSession();
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (!session) {
      setBookings([]);
      setIsLoading(false);
      return;
    }
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings", { credentials: "include" });
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
  }, [session]);

  const deleteBooking = async (id: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE", credentials: "include" });
      if (res.ok) {
        setBookings(prev => prev.filter(b => b._id !== id));
        toast.success("Booking cancelled successfully!");
      } else {
        toast.error("Failed to cancel booking.");
      }
    } catch (error) {
      console.error("Failed to delete booking", error);
      toast.error("Failed to cancel booking.");
    }
  };

  return { bookings, isLoading, deleteBooking };
}
