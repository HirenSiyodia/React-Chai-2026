import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case "Increment":
        return state + 1;

        case "Decrement":
        return state - 1;
        
        case "Reset":
        return 0;

        default:
        return state; 
    }
}

function YouReducer() {
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
    {count}
      <button onClick={() =>dispatch('Increment')}>Increment</button><br/>
      <button onClick={() =>dispatch('Decrement')}>Decrement</button>
            <button onClick={() =>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default YouReducer
