import React from "react";
import { useParams } from "react-router-dom";

function CoursesDetials() {
    const params=useParams()
    console.log(params)
  return (
    <div>
      <h1>CoursesDetials <br /><span> passin params {params.id}</span></h1>
      
    </div>
  );
}

export default CoursesDetials;
