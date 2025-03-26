# AI-Powered Expense Tracker

An intelligent expense tracking application that leverages Next.js 14 and GPT-4o to provide personalized financial insights and automated expense categorization.

## Overview

This expense tracker application helps users manage their finances by providing an intuitive interface for tracking expenses, visualizing spending patterns, and receiving AI-powered financial insights. Built with modern web technologies, the application offers a responsive design that works across all devices.

## Features

- **Expense Tracking**: Easily add and manage your expenses with a user-friendly interface
- **Intelligent Categorization**: Automatically categorize expenses using GPT-4o
- **Financial Analytics**: Visualize your spending patterns with interactive charts
- **Budget Management**: Set and monitor budget limits with automated alerts
- **AI-Powered Insights**: Receive personalized financial recommendations based on your spending habits
- **Cross-Device Compatibility**: Access your financial data from any device

## Technology Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Ant Design, Lucide-React
- **State Management**: Built-in React State Management
- **AI Integration**: GPT-4o API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-expense-tracker.git
cd ai-expense-tracker
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
Root
├── App
│   ├── globals.css
│   ├── Layout.tsx
│   └── Page.tsx
├── Components
│   ├── ui (for lucide-react)
│   ├── addExpense.tsx
│   ├── Analytics.tsx
│   ├── BudgetOverview.tsx
│   ├── ExpenseList.tsx
│   └── footer.tsx
├── Hooks
│   └── use-toast.ts
├── node_modules
├── components.json
├── Next-env.d.ts
├── Package-lock.json
├── Package.json
├── Tailwind.config.ts
└── Tsconfig.json
```

## Usage

1. **Add Expenses**: Click on the "Add Expense" button to record a new transaction
2. **View Analytics**: Navigate to the Analytics page to see visualizations of your spending patterns
3. **Manage Budget**: Set budget limits and track your progress in the Budget section
4. **Get AI Insights**: Interact with the AI chatbot to receive personalized financial advice

## Future Enhancements

- Integration with banking APIs for automatic transaction imports
- Advanced budget forecasting using predictive AI models
- Expanded reporting capabilities for business users
- Mobile application with offline capabilities
