import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className="about">
        <div className="page">
        <div className="leftside">
            <img src="public/group.jpg" alt="" className="screen" />
        </div>
        <div className="rightside">
            <div className="one1">
                <h1 className="heading">Our Story</h1>
                <h4 className="secondline">Kind Heart Charity, Non-Profit Organization</h4>
                <p className="para">This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022</p>
            </div>
            <div className="two2">
                <div className="part1">
                    <h2 className="head2">Our Mission</h2>
                    <p className="para2">Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>

                </div>
                <div className="part2">
                    <h1 className="numm">2009</h1>
                    <p className="num1">Founded</p>
                    <h1 className="numm">120B</h1>
                    <p className="num1">Donation</p>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About