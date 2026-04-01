import React, { useState } from 'react'

const YouStateArray = () => {
    const [allvalue, setAllvalue] = useState(['Hiren','Nanubhai'])

  const changeArray = () => {
    setAllvalue([...allvalue, 'siyodia'])
  }
    return (
    <>
        {allvalue.map((val) => {
            return (
                <>
                <li>{val}</li><br/>
                </>
            )
        })}

                <button onClick={changeArray}>Click me</button>
    </>
  )
}

export default YouStateArray
