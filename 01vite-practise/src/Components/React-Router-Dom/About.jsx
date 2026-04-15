import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link>
      <p>Hi, i am ABOUT page.</p>
    </>
  )
}

export default About
