import React from 'react'

function App() {

  const user={
    userName:"Amie",
    age:12
  }

  localStorage.setItem("user",JSON.stringify(user))
  const userFormLocal=JSON.parse(localStorage.getItem("user"))
  
  console.log(userFormLocal);

  // localStorage.removeItem()
  // localStorage.clear()
  
  return (
    <div>App</div>
  )
}

export default App