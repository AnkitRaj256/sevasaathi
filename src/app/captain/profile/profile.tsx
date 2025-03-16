"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaPhone, FaStar, FaRegSmile, FaEdit, FaMapMarkerAlt, FaHeadset, FaFileAlt, FaEye, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Account: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4">

      <div>
        <div className="flex items-center mb-6">
          <button className="text-lg font-bold" onClick={() => router.back()}>←</button>
        </div>
        <div>
          <h1 className="text-xl font-bold ml-4">
            <span className="border-l-4 border-indigo-300 pl-2">Account</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center my-6">
        <div className="w-20 h-20 border-2 border-purple-400 rounded-full flex items-center justify-center">
          <FaRegSmile className="text-gray-500 text-3xl" />
        </div>
        <div className="ml-4">
          <p className="font-bold">Harsh Mahajan</p>
          <div className="flex items-center space-x-2">
            <FaUser className="text-purple-500" />
            <span className="text-gray-500">+91 9999988888</span>
            <div className="flex items-center bg-white border rounded-full px-2 py-1 ml-2">
              <span className="text-sm font-bold">4.9</span>
              <FaStar className="text-orange-400 ml-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: <FaEdit />, label: 'Edit Profile', path: '/edit-profile' },
          { icon: <FaMapMarkerAlt />, label: 'Allotted Area', path: '/allotted-area' },
          { icon: <FaHeadset />, label: 'Support', path: '/support' },
          { icon: <FaFileAlt />, label: 'Terms and Conditions', path: '/terms' },
          { icon: <FaEye />, label: 'Privacy Policy', path: '/privacy-policy' },
          { icon: <FaEnvelope />, label: 'Ask For Leave', path: '/AskForLeave' },
          { icon: <FaSignOutAlt />, label: 'Log Out', path: '/logout', special: true }
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${item.special ? 'text-red-500' : ''}`}
          >
            <span className="text-purple-500 text-xl mr-3">{item.icon}</span>
            <span>{item.label}</span>
            <span className="ml-auto text-purple-500">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
