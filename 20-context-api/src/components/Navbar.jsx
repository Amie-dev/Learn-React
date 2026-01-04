import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

function Navbar() {
    const data=useContext(themeDataContext)
  return (
    <div>
        <h2>{data}</h2>
    </div>
  )
}

export default Navbar