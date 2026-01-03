import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <h2>LOGO</h2>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Nav