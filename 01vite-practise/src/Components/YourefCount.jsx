import React, { useEffect, useRef, useState } from 'react'

function YourefCount() {
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count;
    },[count])

  return (
    <div>
    <button onClick={() => setCount(count+1)}>Click Here for Counting:- {count}</button><br/>  
    <p>Previous.count {prevCount.current}</p>
    </div>
  )
}

export default YourefCount
