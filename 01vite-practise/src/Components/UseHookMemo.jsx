import React, { useState, useMemo } from 'react';

const UseHookMemo = () => {
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(100);

  const resultMemo = useMemo(() => {
    console.log("Rendering only value multiply.");
    return value * 5;
  }, [value]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center space-y-6">
        
        <h1 className="text-2xl font-bold text-gray-700">
          useMemo Demo ⚡
        </h1>

        {/* Result */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Memoized Result</p>
          <h2 className="text-3xl font-bold text-gray-800">
            {resultMemo}
          </h2>
        </div>

        {/* Value Section */}
        <div>
          <p className="text-gray-500">Value</p>
          <h2 className="text-2xl font-semibold">{value}</h2>
          <button
            onClick={() => setValue(value + 1)}
            className="mt-2 w-full py-2 bg-green-500 text-white rounded-lg 
                       hover:bg-green-600 active:scale-95 transition"
          >
            ➕ Add Value
          </button>
        </div>

        {/* Minus Section */}
        <div>
          <p className="text-gray-500">Minus</p>
          <h2 className="text-2xl font-semibold">{minus}</h2>
          <button
            onClick={() => setMinus(minus - 1)}
            className="mt-2 w-full py-2 bg-red-500 text-white rounded-lg 
                       hover:bg-red-600 active:scale-95 transition"
          >
            ➖ Decrease
          </button>
        </div>

        {/* Info */}
        <p className="text-xs text-gray-400">
          Check console: useMemo runs only when "value" changes
        </p>

      </div>

    </div>
  );
};

export default UseHookMemo;