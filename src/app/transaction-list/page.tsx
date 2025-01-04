
'use client';
import TransactionCard from "@/components/TransactionCard";
import { useTransactions } from "../../context/TransactionsContext";




export default function TransactionListPage() {
    const { transactions } = useTransactions();


    return (
      <>
      <h1 className="text-2xl font-bold mt-10 mb-10 text-center">Transaction List</h1>
       <ul>
        {transactions.map((transaction, index) => (
          <TransactionCard {...transaction} key={index} ></TransactionCard>
        ))}
      </ul>
      </>
      
    );
  }
  