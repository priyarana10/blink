import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className="backg">
        <div className="container">


            <div className="logo-side">
                <img src="public/logo.png" alt="" />
            </div>


            <div className="Quick-links">
                <h4 className="lin">Quick Links</h4>
<ul className="lins">
    <li className="q-items">Our story</li>
    <li className="q-items">Newsroom</li>
    <li className="q-items"> Causes</li>
    <li className="q-items">Become a Volunteer</li>
    <li className="q-items">Partner with Us</li>
</ul>
                
            </div>



            <div className="contacts">
                <h5 className="lin">Contact Us</h5>
                <p className="number">
                    <img src="public/phone.png" alt="" />
                     120-240-9600
                </p>

                <p className="number">
                    <img src="public/mail.png" alt="" />
                    donate@charity.org
                </p>

                <p className="number">
                    <img src="public/loca.png" alt="" />
                    Akershusstranda 20, 0150 Oslo, Norway
                </p>
                <div className="direction">
                 <a href="" className="get-direction">Get Direction</a>
                 </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Footer