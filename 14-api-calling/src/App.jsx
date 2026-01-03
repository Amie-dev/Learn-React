import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

const getData=async() => {
    const res=fetch("https://jsonplaceholder.typicode.com/posts")
      const data=await (await res).json()
      console.log(data)
      setData(data)

  };

  return (
    <div>
      <button onClick={getData}>Get POST</button>
      <h1>Posts</h1>
      
      {data.map(post => (
       
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p >{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default App