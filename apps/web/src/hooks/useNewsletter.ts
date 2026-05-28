"use client";

import { useState } from "react";

type NewsletterStatus = "idle" | "loading" | "success" | "error";

/**
 * Manages newsletter email subscription form state and submission.
 */
export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  const reset = () => setStatus("idle");

  return { email, setEmail, status, handleSubscribe, reset };
}
