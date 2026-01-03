import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex py-4 items-center px-8 bg-cyan-900 justify-between">
      <Link to="/">
        <h2>LOGO</h2>
      </Link>

      <div className="flex justify-between gap-4 underline">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
}

export default Nav;
