import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="menu">
            <div className="logo">
                <img src="public/logo.png" alt="" className="brand" />
                <span className="org">Kind Heart Charity
                    <br></br>
                    <small>Non-Profit Organization</small>
                </span>
            </div>
            <div className="items">
            <ul className="list">
                <li>Home</li> 
                <li>About</li> 
                <li>Causes</li>
                <li>volunteer</li>
                <li>News</li>
                <li>Contact</li>
                <button className='donate'>Donate</button>         
             </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar