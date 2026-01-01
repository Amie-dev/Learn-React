import React from "react";
import { useState } from "react";
import BatchUpdates from "./BatchUpdates";

function App() {
  const [user, setUser] = useState({ name: "Amie", age: "19" });

  const [num, setNum] = useState(52);

  const increment = function () {
    setNum(num + 1);

    /*
const increment = () => setNum(prev => prev + 1);
    */
  };
  const decrement = function () {
    setNum(num - 1);
  };

  const changeUser = () => {
    const newUser = { ...user };
    (newUser.name = "Sahar"), (newUser.age = "23");
    setUser(newUser);
  };
  return (
    <div>
      <div>
        <h1>{`Number is ${num}`}</h1>
        <button onClick={num >= 100 ? decrement : increment}>
          num {num >= 100 ? "--" : "++"}
        </button>
      </div>
      <div>
        <h3>
          Name:{user.name} and Age:{user.age}
        </h3>
        <button onClick={changeUser}>Change User</button>
      </div>
      <h1>----About Batch-----</h1>
      <BatchUpdates/>
    </div>
  );
}

export default App;
