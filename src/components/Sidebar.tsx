"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        className="p-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-800 text-white fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 w-64`}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Masroufi
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <Link href="/add-transaction">Add Transaction</Link>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <Link href="/transaction-list">Transaction List</Link>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <Link href="/visual-reports">Visual Reports</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
