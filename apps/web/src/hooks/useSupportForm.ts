"use client";

import { useState } from "react";

export type FormStateType = "idle" | "submitting" | "success";

export function useSupportForm() {
  const [formState, setFormState] = useState<FormStateType>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return {
    formState,
    name,
    setName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    handleSubmit,
  };
}
