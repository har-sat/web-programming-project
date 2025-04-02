"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import ExpenseList from "@/components/ExpenseList";
import AddExpense from "@/components/AddExpense";
import BudgetOverview from "@/components/BudgetOverview";
import Analytics from "@/components/Analytics";
import {
  LayoutDashboard,
  PlusCircle,
  PieChart,
  Wallet,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 2500,
      category: "Food",
      date: "2024-03-20",
      description: "Groceries",
    },
  ]);

  const [currentPage, setCurrentPage] = useState("analytics");
  const [showChatbot, setShowChatbot] = useState(false);

  function validateExpense(expense) {
    let sum = 0;
    expenses.forEach((expense) => {
      sum += expense.amount;
    });
    if (expense.amount < 0) {
      throw new Error("Amount should be greater than 0");
    } else if (sum + expense.amount) {
      throw new Error("Amount Can't exceed the budget");
    }
  }
  const addExpense = (expense) => {
    try {
      validateExpense(expense);
      setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
    } catch (e) {
      alert(`Validation Error: ${e.message}`);
    }
  };

  const deleteExpense = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const navigationItems = [
    { id: "analytics", label: "Analytics", icon: PieChart },
    { id: "expenses", label: "Expenses", icon: LayoutDashboard },
    { id: "add", label: "Add Expense", icon: PlusCircle },
    { id: "budget", label: "Budget", icon: Wallet },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case "analytics":
        return <Analytics expenses={expenses} />;
      case "expenses":
        return (
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        );
      case "add":
        return <AddExpense onAddExpense={addExpense} />;
      case "budget":
        return <BudgetOverview expenses={expenses} />;
      default:
        return <Analytics expenses={expenses} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h1 className="text-xl font-bold text-primary mb-6">EasyExpenses</h1>
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={cn(
                  "flex items-center space-x-3 w-full px-4 py-2 rounded-lg text-sm transition-colors",
                  currentPage === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6">{renderContent()}</Card>
        </div>
      </div>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg flex items-center space-x-2"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{showChatbot ? "Close Chat" : "Open Chat"}</span>
      </button>

      {showChatbot && (
        <div className="fixed bottom-20 right-10 w-[450px] h-[600px] border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://webagent.ai/chatbot/embed/2d33fe77-3dcf-4b24-a186-ff3a0f231cf6/classic"
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  );
}
