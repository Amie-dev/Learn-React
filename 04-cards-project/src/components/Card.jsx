import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <div className="part1">
          <div className="header">
            <img src={props.brandLogo} alt="" />
            <button>save</button>
          </div>
          <div className="body">
            <div className="companyName">
              <h3>{props.companyName}</h3>
              <p>{props.datePosted}</p>
            </div>
            <div className="role">
              <h4>{props.post}</h4>
            </div>
            <div className="types">
              <button className="btn1">{props.tag1}</button>
              <button className="btn2">{props.tag2}</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="hour">
            <h4>{props.pay}</h4>
            <p>{props.location}</p>
          </div>
          <button className="apply">
            Apply Now
          </button>
        </div>
      </div>
  )
}

export default Card