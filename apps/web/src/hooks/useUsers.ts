import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useToast } from "@/context/Toast";

export function useUsers() {
  const { data: session } = authClient.useSession();
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    if (!session) {
      setUsers([]);
      setIsLoading(false);
      return;
    }
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users", { credentials: "include" });
        if (res.ok) setUsers(await res.json());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [session]);

  const updateUserRole = async (userId: string, role: string) => {
    try {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userId, role })
      });
      if (res.ok) {
        setUsers(prev => prev.map(u => u._id === userId || u.id === userId ? { ...u, role } : u));
        toast.success(`User role updated to ${role}!`);
      } else {
        toast.error("Failed to update user role.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user role.");
    }
  };

  return { users, isLoading, updateUserRole };
}
