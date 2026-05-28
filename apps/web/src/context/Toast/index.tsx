"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import * as S from "./styles";

import type { ToastType } from "./styles";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
  };
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context.toast;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const toast = useMemo(() => ({
    success: (msg: string) => addToast(msg, "success"),
    error: (msg: string) => addToast(msg, "error"),
    info: (msg: string) => addToast(msg, "info"),
    warning: (msg: string) => addToast(msg, "warning"),
  }), [addToast]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <S.ToastContainer>
        <AnimatePresence>
          {toasts.map((t) => (
            <S.ToastItem
              key={t.id}
              $type={t.type}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              layout
            >
              <S.ToastIcon className="material-symbols-outlined">
                {t.type === "success" && "check_circle"}
                {t.type === "error" && "error"}
                {t.type === "warning" && "warning"}
                {t.type === "info" && "info"}
              </S.ToastIcon>
              <S.ToastMessage>{t.message}</S.ToastMessage>
            </S.ToastItem>
          ))}
        </AnimatePresence>
      </S.ToastContainer>
    </ToastContext.Provider>
  );
}
