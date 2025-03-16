"use client";

import React from 'react';

const PaymentHistory: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <div>
        <div className="flex items-center mb-6">
          <button 
            className="text-lg font-bold" 
            onClick={() => window.history.back()}
          >
            ←
          </button>
        </div>
        <div>
          <h1 className="text-xl font-bold ml-4">
            <span className="border-l-4 border-indigo-300 pl-2">Payment History</span>
          </h1>
        </div>
      </div>

      <div className="text-center my-10">
        <h2 className="text-3xl font-bold">₹420</h2>
        <p className="text-gray-500">Total Earnings</p>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="flex justify-between items-center py-2">
          <div>
            <p className="font-bold">14 February 2025</p>
            <p className="text-gray-500">Pipe Cleaning</p>
          </div>
          <p className="text-green-500 font-bold">+₹420</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
