"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export interface ChatMessage {
  id: number;
  text: string;
  sender: "agent" | "user";
  timestamp: string;
}

/**
 * Manages chat widget state: open/close, message list, input, send logic.
 */
export function useChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize and translate initial message reactively
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: t("chat.initial_message"),
        sender: "agent",
        timestamp: "now",
      },
    ]);
  }, [t]);

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
      const agentReplies = [
        t("chat.replies.review"),
        t("chat.replies.itinerary"),
        t("chat.replies.guides"),
      ];
      const reply =
        agentReplies[Math.floor(Math.random() * agentReplies.length)];
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
