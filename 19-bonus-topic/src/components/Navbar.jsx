import React from "react";

function Navbar(props) {
    // console.log(props)
  return (
    <div>
      <p>{props.theme}</p>
      <button
        onClick={() => {
            props.theme=="Light"?
          props.setTheme("Black"):props.setTheme("Light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Navbar;
