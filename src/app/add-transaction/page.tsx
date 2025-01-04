"use client";

import { useState } from "react";
import { useTransactions } from "@/context/TransactionsContext";

export default function AddTransactionPage() {
  const { addTransaction } = useTransactions();
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    date: "",
    category: "",
    type: "Income",
  });
  
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const adjustedAmount = form.type === "Expense" ? -Math.abs(form.amount) : Math.abs(form.amount);

    addTransaction({
      name: form.name,
      amount: adjustedAmount,
      date: form.date,
      category: form.category,
    });

    setSuccessMessage("Transaction added successfully!");

    setForm({ name: "", amount: 0, date: "", category: "", type: "Income" });

    setTimeout(() => {
      setSuccessMessage("");
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-10 mb-10 text-center">Add Transaction</h1>
      {successMessage && (
        <div className="bg-green-500 text-white p-3 text-center mb-4">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label className="block">Transaction Name</label>
          <input
            type="text"
            className="w-full border p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block">Amount (DZD)</label>
          <input
            type="number"
            className="w-full border p-2"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: +e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block">Date</label>
          <input
            type="date"
            className="w-full border p-2"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block">Category</label>
          <select
            className="w-full border p-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="" disabled>Select Category</option>
            <option>Food</option>
            <option>Transportation</option>
            <option>Utilities</option>
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Health</option>
            <option>Communication</option>
            <option>Services</option>
            <option>Education</option>
            <option>Travel</option>
            <option>Gifts</option>
            <option>Business</option>
            <option>Subscriptions</option>
            <option>Insurance</option>
            <option>Investment</option>
            <option>Home Maintenance</option>
            <option>Personal Care</option>
            <option>Savings</option>
          </select>
        </div>
        <div>
          <label className="block">Type</label>
          <select
            className="w-full border p-2"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-green-500 text-white p-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
