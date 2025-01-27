import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <div className="block">
        <div className="hr-office">
          <div className="side-one">
            <h3 className="catas1">Get in Touch</h3>

            <div className="hr">
              <img src="public/office-hr.jpg" alt="" />
              <p className="hr-name">Clara Barton<br></br>
                <strong className="office">HR & Office Manager</strong>
              </p>
            </div>

            <div className="main-line"></div>


            <div className="contacts">
              <h5 className="lin">Contact Information</h5>
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
          <div className="side-two">
            <div className="list-news">
              <form action="">
                <h2 className="catas">Newsletter Form</h2>
                <div className="fullname">
                  <input type="text" className="email" placeholder='Name' />
                  <input type="text" className="email" placeholder='Surname' />
                </div>
                <input type="text" placeholder="Email Address" className="email" />
                <textarea name="Comment" id="" placeholder='What can we help you.. ?' className='area'></textarea>
                <button className="subs2">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact