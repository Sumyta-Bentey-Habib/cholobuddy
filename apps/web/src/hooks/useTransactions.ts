"use client";

import { useState, useMemo } from "react";
import { Transaction } from "@/lib/data";

export function useTransactions(transactions: Transaction[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | Transaction["status"]>("All");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesSearch =
        tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.package.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === "All" || tx.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, searchQuery, statusFilter]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(filteredTransactions.map((tx) => tx.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
  };

  const isAllSelected = useMemo(() => {
    return (
      filteredTransactions.length > 0 &&
      filteredTransactions.every((tx) => selectedIds.includes(tx.id))
    );
  }, [filteredTransactions, selectedIds]);

  return {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    selectedIds,
    setSelectedIds,
    filteredTransactions,
    handleSelectAll,
    handleSelectOne,
    isAllSelected,
  };
}
