import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState("ram");

  useEffect(() => {
    if (counter === "seeta") {
        alert("changed to seeta useEffect wroked")
    } 
  }, [counter]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center space-y-6">

        <h1 className="text-2xl font-bold text-gray-700">
          useEffect Demo
        </h1>

        {/* Count Section */}
        <div>
          <p className="text-lg text-gray-500">Number Counter</p>
          <h2 className="text-4xl font-bold text-gray-800">{count}</h2>
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            ➕ Increase
          </button>
        </div>

        {/* String Section */}
        <div>
          <p className="text-lg text-gray-500">Name Value</p>
          <h2 className="text-3xl font-bold text-gray-800">{counter}</h2>
          <button
            onClick={() => setCounter("seeta")}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition"
          >
            Change Name
          </button>
        </div>

      </div>
    </div>
  );
};

export default UseEffectHook;