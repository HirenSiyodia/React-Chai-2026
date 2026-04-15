import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function loginHere(){
    navigate('/contact', {state: {name:'Hiren', age:22}})
  }

  return (
    <>
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link>
      <p>I an HOME page</p>
      <button onClick={loginHere}>Login</button>
    </>
  )
}

export default Home
