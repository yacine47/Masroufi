"use client";

import TransactionCard from "@/components/TransactionCard";
import { useTransactions } from "../context/TransactionsContext";
import AmountCard from "@/components/AmountCard";

export default function HomePage() {
  const { transactions } = useTransactions();

  // Get the last 3 transactions
  const lastThreeTransactions = transactions.slice(-3).reverse(); 
  const incomeAmout = transactions.reduce((total, transaction) => total + (transaction.amount > 0 ? transaction.amount : 0), 0);
  const expenseAmount = transactions.reduce((total, transaction) => total + (transaction.amount < 0 ? transaction.amount : 0), 0);
  return (
    <div className="text-center " >
      <h1 className="text-2xl font-bold mb-10">Welcome To Masroufi</h1>
      <div className="flex  items-center justify-center">
        <AmountCard amount={incomeAmout} type="INCOME"></AmountCard>
        <AmountCard amount={expenseAmount} type="EXPENSE"></AmountCard>
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-10">History</h1>
      <ul>
        {lastThreeTransactions.map((transaction, index) => (
          <TransactionCard {...transaction} key={index} />
        ))}
      </ul>
    </div>
  );
}
