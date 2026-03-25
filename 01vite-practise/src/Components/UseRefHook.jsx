import React, { useRef, useState } from 'react';

const UseRefHook = () => {
  const refElement = useRef("");
  const [name, setName] = useState("Hiren Siyodia");

  function reset() {
    setName("");
    refElement.current.focus();
  }

  function colorHandle() {
    if (name === "") {
        alert("write some")
    } else {
        refElement.current.style.color = "red";
        refElement.current.value = "Hiren Siyodia";
    }
    
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center space-y-6">
        
        <h1 className="text-2xl font-bold text-gray-700">
          useRef Demo
        </h1>

        <input
          ref={refElement}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
          placeholder="Enter your name"
        />

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 py-2 bg-blue-500 text-white rounded-lg 
                       hover:bg-blue-600 active:scale-95 transition"
          >
            Focus
          </button>

          <button
            onClick={colorHandle}
            className="flex-1 py-2 bg-red-500 text-white rounded-lg 
                       hover:bg-red-600 active:scale-95 transition"
          >
            Color Change
          </button>
        </div>

      </div>

    </div>
  );
};

export default UseRefHook;