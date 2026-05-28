import { useState, useEffect } from "react";

export function useTours() {
  const [tours, setTours] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    } catch (error) {
      console.error(error);
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTour = async (id: string) => {
    try {
      const res = await fetch(`/api/tours/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTours(prev => prev.filter(t => t._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { tours, isLoading, createTour, updateTour, deleteTour };
}
