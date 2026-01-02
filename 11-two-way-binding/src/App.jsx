import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submited");
    console.log(input);
    setInput("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input ? false : true}>Submit</button>
      </form>
    </div>
  );
}

export default App;
