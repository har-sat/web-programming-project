"use client";

import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

export default function BudgetOverview({ expenses }) {
  const totalBudget = 100000;
  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const remainingBudget = totalBudget - totalExpenses;
  const progressPercentage = (totalExpenses / totalBudget) * 100;

  const categoryBudgets = {
    Food: 25000,
    Transportation: 15000,
    Entertainment: 10000,
    Shopping: 20000,
    Bills: 20000,
    Healthcare: 5000,
    Other: 5000
  };

  const categoryExpenses = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Budget Overview</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between mb-2">
          <span>Total Budget: ₹{totalBudget}</span>
          <span>Remaining: ₹{remainingBudget}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(categoryBudgets).map(([category, budget]) => {
          const spent = categoryExpenses[category] || 0;
          const progress = (spent / budget) * 100;
          
          return (
            <Card key={category} className="p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{category}</span>
                <span>₹{spent} / ₹{budget}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </Card>
          );
        })}
      </div>
    </div>
  );
}