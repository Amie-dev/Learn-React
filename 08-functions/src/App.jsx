import React from "react";

function App() {
  const btnClick = () => {
    console.log("Btn Click");
  };

  const fun1 = function (input) {
    console.log(input);
  };
  return (
    <div>
      <button onClick={btnClick}>Click me</button>

      <input
        type="text"
        onChange={function (e) {
          console.log("Typing", e.target.value);
        }}
      />

      <div
        onClick={(ele) => {
          fun1(ele);
        }}
      >
        Called
      </div>
    </div>
  );
}

export default App;
