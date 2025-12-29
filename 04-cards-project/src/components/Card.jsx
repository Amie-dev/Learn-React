import React from 'react'

function Card() {
  return (
    <div className="card">
        <div className="part1">
          <div className="header">
            <img src="" alt="" />
            <button>save</button>
          </div>
          <div className="body">
            <div className="companyName">
              <h3>Amazon</h3>
              <p>6day ago</p>
            </div>
            <div className="role">
              <h4>Senior UI/UX Designer</h4>
            </div>
            <div className="types">
              <button className="btn1">Part Time</button>
              <button className="btn2">Senior Level</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="hour">
            <h4>$120/hr</h4>
            <p>Mumbai, India</p>
          </div>
          <button className="apply">
            Apply Now
          </button>
        </div>
      </div>
  )
}

export default Card