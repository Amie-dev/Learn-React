import React from "react";
import { useState } from "react";

function BatchUpdates() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  //normal
  const increment = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);
  };
  const incrementByBatch = () => {
    setNum1((preNum) => preNum + 1);
    setNum1((preNum) => preNum + 1);
    setNum1((preNum) => preNum + 1);
  };
  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button onClick={increment}>++</button>
      </div>
      <div>
        <h1>{num1}</h1>
        <button onClick={incrementByBatch}>++</button>
      </div>
    </div>
  );
}

export default BatchUpdates;
