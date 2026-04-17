import React, { createContext } from 'react'
import YouContextChild from './YouContextChild'

const data = createContext()
const data1 = createContext()

function YouContext() {
    const name = 'Hiren'
    const surname = 'Siyodia'

  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={surname}>
            <YouContextChild/>
            </data1.Provider>
        </data.Provider>
    </div>
  )
}

export default YouContext
export {data, data1}
