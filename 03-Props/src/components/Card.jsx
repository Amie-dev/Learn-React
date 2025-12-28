
function Card(props) {
    console.log(props);
    
  return (
    <div className="card">
        <h1>{props.user ?? "Name"}</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>View</button>
      </div>
  )
}

export default Card