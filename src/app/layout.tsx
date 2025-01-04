// app/layout.tsx
"use client";

import { TransactionsProvider } from "../context/TransactionsContext";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <TransactionsProvider>
          <Sidebar />
          <main className="ml-64 w-full p-4">{children}</main>
        </TransactionsProvider>
      </body>
    </html>
  );
}
