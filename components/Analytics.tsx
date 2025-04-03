// @ts-nocheck
 "use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function Analytics({ expenses }) {
  // Process data for charts
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const pieData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value
  }));

  // Process daily spending data
  const dailySpending = expenses.reduce((acc, expense) => {
    acc[expense.date] = (acc[expense.date] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const barData = Object.entries(dailySpending).map(([date, amount]) => ({
    date,
    amount
  }));

  const formatCurrency = (value) => `₹${value}`;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Spending Analytics</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Spending by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatCurrency} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Daily Spending</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatCurrency} />
                <Tooltip formatter={formatCurrency} />
                <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Spending Insights</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Total Spent: ₹{expenses.reduce((sum, exp) => sum + Number(exp.amount), 0)}
            </p>
            <p className="text-sm text-muted-foreground">
              Most Expensive Category: {
                Object.entries(categoryData).reduce((a, b) => a[1] > b[1] ? a : b)[0]
              }
            </p>
            <p className="text-sm text-muted-foreground">
              Number of Transactions: {expenses.length}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}