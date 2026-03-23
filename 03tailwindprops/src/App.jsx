
import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return ( 
    <>
      <h1 className="text-3xl font-bold underline bg-green-400">
      Hello world!
    </h1>
    <Card username="Hiren 1" btnTxt="View more"/>
    <Card username="Hiren 2"/>
    </>
  )
}

export default App
