import React, { useState, useCallback } from 'react';
// useCallBack= Memoize Function
// Prevents unnecesary re-creation of functions
const UseCalHook = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

const Learning = useCallback(() => {
  console.log("Re-render Count");
  setCount(prev => prev + 1);
}, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-teal-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-700">
          useCallBack Demo ⚡
        </h1>
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

        {/* CallBack Section */}
        <div>
          <p className="text-gray-500">Minus</p>
          <h2 className="text-2xl font-semibold">{count}</h2>
          <button
            onClick={Learning}
            className="mt-2 w-full py-2 bg-red-500 text-white rounded-lg 
                       hover:bg-red-600 active:scale-95 transition"
          >
            ➕ Add Count re-Render
          </button>
        </div>

      </div>

    </div>
  );
};

export default UseCalHook;