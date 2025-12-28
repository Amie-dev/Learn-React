import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="card">
        <h1>Aminul Islam</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          ducimus aut eligendi repellat reiciendis fugiat voluptate ipsum
          perferendis, laudantium perspiciatis qui sapiente? Harum delectus
          pariatur illo soluta in exercitationem asperiores velit cum natus, quo
          obcaecati quidem ab quod et, consectetur, quibusdam vero! Sint, facere
          temporibus nisi atque error debitis nostrum!
        </p>
      </div>
      <Card/>
    </div>
  );
}

export default App;
