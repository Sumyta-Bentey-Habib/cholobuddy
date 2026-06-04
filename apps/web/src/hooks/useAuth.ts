import { authClient } from "@/lib/auth-client";

export function useAuth() {
  const { data: session, isPending: isLoading } = authClient.useSession();

  return {
    session,
    user: session?.user,
    role: (session?.user as any)?.role || "user",
    points: (session?.user as any)?.points || 0,
    isLoading,
    signIn: authClient.signIn.email,
    signUp: authClient.signUp.email,
    signOut: authClient.signOut,
  };
}
