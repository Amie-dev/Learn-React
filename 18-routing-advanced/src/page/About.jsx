import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const btnClick = () => {
    console.log("Btn Click");
    navigate("/");
    console.log(navigate);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          className=" m-15 p-5 bg-amber-400 rounded-2xl text-black cursor-pointer hover:text-white 
        hover:bg-blue-400
             hover:scale-95 hover:shadow-lg "
          onClick={() => btnClick()}
        >
          Return to Home Page
        </button>
        <button
          className=" bg-gray-500 text-amber-50 hover:scale-95  p-5 hover:shadow-lg rounded-2xl "
          onClick={() => {
            navigate(-1);
          }}
        >
          Pre-Page
        </button>
      </div>
      <h1>About</h1>
    </div>
  );
}

export default About;
