"use client";

import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const AskForLeave: React.FC = () => {
  const [comments, setComments] = useState('');
  const [days, setDays] = useState('');
  const [reason, setReason] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <div>
        <div className="flex items-center mb-6">
          <button className="text-lg font-bold" onClick={() => window.history.back()}>←</button>
        </div>
        <div>
          <h1 className="text-xl font-bold ml-4">
            <span className="border-l-4 border-indigo-300 pl-2">Ask For Leave</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-between mb-6 mt-10">
        <button className="bg-indigo-100 text-indigo-500 px-4 py-2 rounded-md font-bold">New Application</button>
        <button className="text-gray-500 font-bold">All Applications</button>
      </div>

      <p className="mb-4 text-gray-700">Request your leave details down below</p>

      <div className="space-y-4">
        <div>
          <p>How many days?</p>
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full p-3 border border-purple-400 rounded-lg text-purple-500"
          >
            <option>Select</option>
            <option>1 day</option>
            <option>2 days</option>
            <option>More than 2 days</option>
          </select>
        </div>

        <div>
          <p>From</p>
          <div className="relative">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-3 border border-purple-400 rounded-lg"
            />
            <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          </div>
        </div>

        <div>
          <p>To</p>
          <div className="relative">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-3 border border-purple-400 rounded-lg"
            />
            <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          </div>
        </div>

        <div>
          <p>Reason for leave</p>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-3 border border-purple-400 rounded-lg text-purple-500"
          >
            <option>Select</option>
            <option>Medical Emergency</option>
            <option>Personal Reason</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <p>Comments</p>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Explain reason for leave in detail."
            maxLength={200}
            className="w-full p-3 border border-dashed border-gray-400 rounded-lg h-32"
          />
          <p className="text-right text-gray-400 text-sm">{comments.length}/200</p>
        </div>

        <button className="bg-purple-500 text-white text-center py-3 rounded-lg w-full">Submit</button>
      </div>
    </div>
  );
};

export default AskForLeave;
