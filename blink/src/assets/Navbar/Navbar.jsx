import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="nav">
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
                <li className='list-ites'>Home</li> 
                <li className='list-ites'>About</li> 
                <li className='list-ites'>Causes</li>
                <li className='list-ites'>volunteer</li>
                <li className='list-ites'>News</li>
                <li className='list-ites'>Contact</li>
                <button className='donatess'>Donate</button>         
             </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar