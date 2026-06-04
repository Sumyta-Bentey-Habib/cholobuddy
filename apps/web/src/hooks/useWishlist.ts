import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/context/Toast";

export function useWishlist() {
  const { data: session } = authClient.useSession();
  const [savedTourIds, setSavedTourIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (!session) {
      setSavedTourIds([]);
      setIsLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/wishlist", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setSavedTourIds(data.tourIds || []);
        }
      } catch (error) {
        console.error("Error fetching wishlist", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, [session]);

  const toggleWishlist = async (tourId: string) => {
    if (!session) {
      toast.warning("Please login to save tours to your wishlist.");
      return;
    }

    const isSaved = savedTourIds.includes(tourId);
    
    // Optimistic UI update
    setSavedTourIds((prev) => 
      isSaved ? prev.filter((id) => id !== tourId) : [...prev, tourId]
    );

    try {
      const res = await fetch("/api/wishlist", {
        method: isSaved ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ tourId }),
      });

      if (!res.ok) {
        // Revert on failure
        setSavedTourIds((prev) => 
          isSaved ? [...prev, tourId] : prev.filter((id) => id !== tourId)
        );
        toast.error("Failed to update wishlist.");
      } else {
        toast.success(isSaved ? "Removed from Wishlist!" : "Added to Wishlist!");
      }
    } catch (error) {
      console.error("Error updating wishlist", error);
      // Revert on failure
      setSavedTourIds((prev) => 
        isSaved ? [...prev, tourId] : prev.filter((id) => id !== tourId)
      );
      toast.error("Failed to update wishlist.");
    }
  };

  return { savedTourIds, toggleWishlist, isLoading };
}
