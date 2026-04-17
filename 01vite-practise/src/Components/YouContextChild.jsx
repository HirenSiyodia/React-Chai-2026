import React, { useContext } from 'react'
import { data, data1 } from './YouContext'

function YouContextChild() {
    const name = useContext(data)
    const surname = useContext(data1)
  return (
    <div>
      <p>Hi, Your name is {name} and surname is {surname}</p>
    </div>
  )
}

export default YouContextChild
