<<<<<<< HEAD
import ButtonNavigation from "@/components/ButtonNavigation";
import CaptainHeader from "@/components/CaptainHeader";
import React from "react";
import CaptainDashboard from "@/components/CaptainDashboard";
import CaptainButtonNavigation from "@/components/CaptainButtonNavigation";
=======
"use client";
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 21ad1c1 (Added Captain section pages)

  return (
<<<<<<< HEAD
    <div className="h-screen w-full bg-gray-100 py-6 px-4">
      <CaptainHeader />

      <h1 className="font-bold text-3xl tracking-wide py-6 mt-5">
        Good Morning!🌞
      </h1>

      <CaptainDashboard />
      <div className="fixed h-16 w-full bottom-0 left-0 right-0 z-10">
        <CaptainButtonNavigation />
      </div>
    </div>
  );
}

export default page;
=======
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between w-full">
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`py-1 px-4 rounded-full flex items-center ${isOnline ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-black'}`}
        >
          {isOnline ? 'Online' : 'Offline'}
          <span className={`ml-2 w-3 h-3 ${isOnline ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-white py-1 px-4 rounded-full border border-gray-300"
          >
            {language}
          </button>

          {isOpen && (
            <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-md">
              <button 
                onClick={() => { setLanguage('English'); setIsOpen(false); }} 
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                English
              </button>
              <button 
                onClick={() => { setLanguage('Hindi'); setIsOpen(false); }} 
                className="block w-full px-4 py-2 hover:bg-gray-100"
              >
                Hindi
              </button>
            </div>
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-10 text-gray-900">
        Good Morning! ☀️
      </h1>

      {isOnline ? (
        <div className="mt-20 p-4 bg-red-100 rounded-lg w-full">
          <h2 className="text-lg font-bold">AC Check-Up</h2>
          <p className="text-sm text-gray-500">Reference Code: #Ds-571224</p>
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="font-bold">10:00-11:00 AM, 26 Apr</p>
              <p className="text-sm text-gray-500">Schedule</p>
            </div>
            <div>
              <p className="font-bold">VIT Bhopal University</p>
              <p className="text-sm text-gray-500">Address</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Accept</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Reject</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20">
          <img src="Icon/checklist.png" alt="Checklist" className="mt-20 w-24 h-24 mb-4" />
          <h2 className="mt-10 text-lg font-bold">No Upcoming Order</h2>
          <p className="text-sm text-gray-500 text-center px-6">
            Currently you don’t have any upcoming order. <br />
            We will notify you for orders near you.
          </p>
        </div>
      )}

      <button className="mt-10 w-full bg-indigo-500 text-white py-3 rounded-lg">
        Start Activity
      </button>

      <div className="absolute bottom-0 w-full bg-white flex justify-around py-3 border-t border-gray-200">
        {['Home', 'Payment', 'Orders', 'profile'].map((icon, idx) => (
          <button
            key={idx}
            onClick={() => console.log(`${icon} clicked`)} 
            className="p-2"
          >
            <img
              src={`/Icon/${icon}.png`}
              alt={icon}
              className={`w-6 h-6 ${icon === 'home' ? 'text-indigo-500' : 'text-gray-400'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
>>>>>>> 21ad1c1 (Added Captain section pages)
