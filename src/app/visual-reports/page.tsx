'use client';
import LineChart from "@/components/LineChart";
import { CharData } from "../types/CharData";
import { useTransactions } from "@/context/TransactionsContext";


function VisualReportsPage() {
  // Sample transaction data
  const { transactions } = useTransactions();
  const transactionData = transactions.map(transaction => ({
    date: transaction.date,
    amount: transaction.amount,
  }));

  return (
    <div>  
      <h1 className="text-2xl font-bold ">Visual Reports</h1>
      <p>Analyze your financial data with charts and graphs.</p>

      <LineChart transactionData={[...transactionData]} />    </div>
  );
}

export default VisualReportsPage;
