import { useState, useEffect } from "react";

export function useUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (res.ok) setUsers(await res.json());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const updateUserRole = async (userId: string, role: string) => {
    try {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, role })
      });
      if (res.ok) {
        setUsers(prev => prev.map(u => u._id === userId || u.id === userId ? { ...u, role } : u));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { users, isLoading, updateUserRole };
}
