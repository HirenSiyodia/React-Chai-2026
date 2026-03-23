import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0);

  let addValue = () =>  {
    if (counter >= 20) {
      alert("you cannot exceed value after 20")
    } else {
    setCounter(counter + 1)
    }
  }

  let removeValue = () =>  {
    if (counter <= 0) {
      alert("you cannot exceed value after 0")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React with Vite | Counter</h1>
      <button onClick={addValue}>+</button> <h3> The value is: {counter}</h3> 
      <button onClick={removeValue}>-</button>

    </>
  )
}

export default App
