// @ts-nocheck
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.key === "amount") {
      return sortConfig.direction === "ascending"
        ? Number(aValue) - Number(bValue)
        : Number(bValue) - Number(aValue);
    }

    if (sortConfig.key === "date") {
      return sortConfig.direction === "ascending"
        ? new Date(aValue).getTime() - new Date(bValue).getTime()
        : new Date(bValue).getTime() - new Date(aValue).getTime();
    }

    return sortConfig.direction === "ascending"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return (
        <ArrowUpDown
          className={`ml-2 h-4 w-4 inline ${
            sortConfig.direction === "descending" ? "transform rotate-180" : ""
          }`}
        />
      );
    }
    return <ArrowUpDown className="ml-2 h-4 w-4 inline opacity-20" />;
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recent Expenses</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => requestSort("date")}
                className="hover:bg-transparent p-0 font-medium"
              >
                Date {getSortIcon("date")}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => requestSort("category")}
                className="hover:bg-transparent p-0 font-medium"
              >
                Category {getSortIcon("category")}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => requestSort("description")}
                className="hover:bg-transparent p-0 font-medium"
              >
                Description {getSortIcon("description")}
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button
                variant="ghost"
                onClick={() => requestSort("amount")}
                className="hover:bg-transparent p-0 font-medium ml-auto"
              >
                Amount {getSortIcon("amount")}
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell className="text-right">₹{expense.amount}</TableCell>
              <TableCell>
                <button onClick={() => onDeleteExpense(expense.id)}>
                  <Trash2 color="#f17e70" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
