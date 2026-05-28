import { useState, useEffect } from "react";
import { useToast } from "@/context/Toast";

export function useTours() {
  const [tours, setTours] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("/api/tours");
        if (res.ok) setTours(await res.json());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTours();
  }, []);

  const createTour = async (data: any) => {
    try {
      const res = await fetch("/api/tours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const result = await res.json();
        setTours(prev => [...prev, { _id: result.tourId, ...data }]);
        toast.success("Tour created successfully!");
      } else {
        toast.error("Failed to create tour.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create tour.");
    }
  };

  const updateTour = async (id: string, data: any) => {
    try {
      const res = await fetch(`/api/tours/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setTours(prev => prev.map(t => t._id === id ? { ...t, ...data } : t));
        toast.success("Tour updated successfully!");
      } else {
        toast.error("Failed to update tour.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update tour.");
    }
  };

  const deleteTour = async (id: string) => {
    try {
      const res = await fetch(`/api/tours/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTours(prev => prev.filter(t => t._id !== id));
        toast.success("Tour deleted successfully!");
      } else {
        toast.error("Failed to delete tour.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete tour.");
    }
  };

  return { tours, isLoading, createTour, updateTour, deleteTour };
}
