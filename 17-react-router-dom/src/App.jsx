import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./page/Home"
import About from './page/About'
import Contact from './page/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <div>
<Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App