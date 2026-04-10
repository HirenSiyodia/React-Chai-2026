import React from 'react'

const List_Key_Usn_Map = () => {
    const Ipl = ['CSK', 'RCB', 'MI', 'LSG', 'CSK']
    const result = Ipl.map((e, index) => <h1 key={index}>index is {index},  {e}</h1> )

  return (
    <div>
      {result}
    </div>
  )
}

export default List_Key_Usn_Map
