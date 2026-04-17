import React, { useReducer } from 'react'

const initialCount = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        default:
            break;
    }
}

function YouReducer() {
    const [count, dispatch] = useReducer(reducer, initialCount)

  return (
    <div>
        {count}<br/>
        <button onClick={()=>dispatch('Increment')}>Increment</button><br/>
        <button onClick={()=>dispatch('Decrement')}>Decrement</button>  
    </div>
  )
}

export default YouReducer
