import React, {useState} from 'react'

const StateHook = () => {
    const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
        
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>

        <p className="text-6xl font-bold text-gray-800 mb-6">
          {count}
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setCount(count === 10 ? 10 : count + 1)}
            disabled={count === 10}
            className={`flex-1 py-2 rounded-xl text-white font-semibold transition 
              ${count === 10 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-green-500 hover:bg-green-600"}`}
          >
            ➕ Add
          </button>

          <button
            onClick={() => setCount(count === 0 ? 0 : count - 1)}
            disabled={count === 0}
            className={`flex-1 py-2 rounded-xl text-white font-semibold transition 
              ${count === 0 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-red-500 hover:bg-red-600"}`}
          >
            ➖ Remove
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-4 w-full py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
        >
          Reset
        </button>

      </div>
    </div>
  )
}

export default StateHook