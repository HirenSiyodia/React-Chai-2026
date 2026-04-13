import React, { useState } from 'react'

const YouStateArray = () => {
  const [allarray, setAllarray] = useState(['Hiren', 'Nanubhai'])

  const clickArray = () => {
    setAllarray([...allarray, 'siyodia'])
  }
  return (
    <>
    {allarray.map((val) => {
      return(
        <>
        <li>{val}</li>
        </>
      )
    })}
      <button onClick={clickArray}>Click Here</button>
    </>
  )
}

export default YouStateArray