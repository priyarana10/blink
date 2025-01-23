import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="mainimg">
                    <img src="public/imagehome.jpg" alt="" className='imgss' />
                    <div className="caption">
                        <h1 className="human">Humanity</h1>
                        <p className="lines">Please Tell your Friend About our Website </p>
                    </div>
                </div>
            </div>
            {/* <div className="carosal">
                <button className="pre">
                    <img src="public/buttn.png" alt="" />
                </button>
                <button className="next">
                    <img src="public/buttn.png" alt="" />
                </button>
            </div> */}

        </>
    )
}

export default Home