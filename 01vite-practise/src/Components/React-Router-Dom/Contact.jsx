import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Contact() {
    const location = useLocation()

  return (
    <>
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About Us</Link><br/>
      <Link to='/contact'>Contact Us</Link><br/>
            <p>Hi, i am CONTACT page.</p>
            <p>Hi, Welcome {location.state.name} and your age is {location.state.age}</p>
    </>
  )
}

export default Contact
