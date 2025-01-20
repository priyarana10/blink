import React from 'react'
import "./Cards.css"
const Cards = () => {
  return (
   <>
   <h1 className="wlcm">Welcome to Kind Heart Charity</h1>

   <div className="cards">
    <div className="card1">
        <img src="public/hands.png" alt=""  className='imgs'/>
        <p className="text">Become a 
            <strong> Volunteer</strong>
        </p>
    </div>

    <div className="card1">
        <img src="public/heart.png" alt="" className='imgs' />
        <p className="text">
            <strong>Caring</strong> Earth
        </p>
    </div>

    <div className="card1">
        <img src="public/receive.png" alt="" className='imgs' />
        <p className="text"> Make a 
            <strong> Donation</strong>
        </p>
    </div>

    <div className="card1">
        <img src="public/scholarship.png" alt="" className='imgs' />
        <p className="text">
            <strong>Scholarship</strong> program
        </p>
    </div>
   </div>
 
   </>
  )
}

export default Cards