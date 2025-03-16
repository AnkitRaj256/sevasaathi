import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-white to-purple-300">
      <div className="mt-20 flex items-center gap-2">
        <img src="/Icon/sevasaathi_logo.png" alt="Seva Sathi Logo" className="h-20" />
      </div>

      <div className="mt-20 w-full px-6">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <label className="block mt-4 text-sm font-medium">Phone Number</label>
        <div className="flex items-center border border-gray-300 rounded-md mt-2 px-3 py-2">
          <span className="mr-2">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-transparent outline-none text-black-400"
          />
        </div>

        <button className="mt-6 w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700">
          Send OTP
        </button>
      </div>

    </div>
  );
};

export default SignIn;
