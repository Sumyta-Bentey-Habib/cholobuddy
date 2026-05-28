"use client";

import { useState, useRef, useEffect } from "react";

export interface ChatMessage {
  id: number;
  text: string;
  sender: "agent" | "user";
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    text: "আসসালামুয়ালাইকুম! Hello Explorer 🌿 How can we assist your journey across Bangladesh today?",
    sender: "agent",
    timestamp: "now",
  },
];

const AGENT_REPLIES = [
  "Thank you for reaching out! Our travel concierge will review your inquiry shortly.",
  "Great question! We'd love to help you plan the perfect Bangladesh itinerary.",
  "Our expert guides know every corner of Bangladesh — from the Sundarbans to Sajek. We'll be in touch soon!",
];

/**
 * Manages chat widget state: open/close, message list, input, send logic.
 */
export function useChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const now = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputVal.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, sender: "user", timestamp: now() },
    ]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const reply =
        AGENT_REPLIES[Math.floor(Math.random() * AGENT_REPLIES.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: reply, sender: "agent", timestamp: now() },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleOpen = () => setIsOpen((v) => !v);

  return {
    isOpen,
    toggleOpen,
    messages,
    inputVal,
    setInputVal,
    isTyping,
    handleSend,
    messagesEndRef,
  };
}
