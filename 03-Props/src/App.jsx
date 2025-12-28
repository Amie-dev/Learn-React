import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parant'>
      <Card user="Amie" age={10} />
      <Card user="Reki" age={100}/>
      <Card  age={100}/>
    </div>
  )
}

export default App