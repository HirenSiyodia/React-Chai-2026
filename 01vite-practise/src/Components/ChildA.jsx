import React, { createContext } from 'react'
import ChildB from './ChildB';

let Data = createContext();
let Data1 = createContext();

const ChildA = () => {

    let name = "Hiren"
    let surname = "Siyodia"

  return (
    <>
    <Data.Provider value={name}>
      <Data1.Provider value={surname}>
        <ChildB/>
      </Data1.Provider>
    </Data.Provider>        
    </>
  )
}

export default ChildA;
export {Data, Data1}