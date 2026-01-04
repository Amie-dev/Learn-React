import React from 'react'
import { createContext } from 'react'

export const themeDataContext=createContext()
function ThemeContext(props) {
  return (
    <div>
        <themeDataContext.Provider value="Light">
            {props.children}
        </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext