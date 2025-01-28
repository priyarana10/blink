import React from 'react'
import "./News.css"
const News = () => {
    return (
        <>
            <h2 className="latest">latest News</h2>
            <main className="start">

                <div className="left-side">
                    <div className="catagory">
                        <img src="public/clothing-donations.jpg" alt="" className="catagory-img" />
                        <div className="catagory-lifestyle">
                            <a href="" className="catagory-href">Lifestyle,</a>
                            <a href="" className="catagory-href"> Clothes Donation</a>
                        </div>
                        <div className="catagory-info">
                            <div className="catagory-info-date">
                                <img src="public/calander.png" alt="" className="admin" />
                                <p className="commen">October 12,2036</p>
                            </div>
                            <div className="catagory-info-date">
                                <img src="public/admin.png" alt="" className="admin" />
                                <p className="commen"> By Admin</p>
                            </div>
                            <div className="catagory-info-date">
                                <img src="public/comment.png" alt="" className="admin" />
                                <p className="commen">32 comments</p>
                            </div>
                        </div>
                        <div className="catagory-tittle">
                            <h4 className="tittle-cata">Clothing donation to urban area</h4>
                        </div>
                        <div className="catagory-para">
                            <p className="para-cata">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</p></div>
                    </div>




                    <div className="catagory">
                        <img src="public/foodstuff.jpg" alt="" className="catagory-img" />
                        <div className="catagory-lifestyle">
                            <a href="" className="catagory-href">Food, </a>
                            <a href="" className="catagory-href"> Donation, </a>
                            <a href="" className="catagory-href"> Caring</a>
                        </div>
                        <div className="catagory-info">
                            <div className="catagory-info-date">
                                <img src="public/calander.png" alt="" className="admin" />
                                <p className="commen">October 20,2036</p>
                            </div>
                            <div className="catagory-info-date">
                                <img src="public/admin.png" alt="" className="admin" />
                                <p className="commen"> By Admin</p>
                            </div>
                            <div className="catagory-info-date">
                                <img src="public/comment.png" alt="" className="admin" />
                                <p className="commen">35 comments</p>
                            </div>
                        </div>
                        <div className="catagory-tittle">
                            <h4 className="tittle-cata">Food donation area</h4>
                        </div>
                        <div className="catagory-para">
                            <p className="para-cata">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci</p></div>
                    </div>


                </div>




                <div className="right-side">
                    <form action="">
                        <div className="searchbutton">
                            <input type="search" placeholder='search' name="search" className='placeholder' id="" />
                            <button className="search-icon">
                                <img src="public/search.png" alt="" className="search-ico" />
                            </button>
                        </div>



                        <div className="right-side-tittle">
                            <h3 className="right-tittle">Recent News</h3>
                        </div>


                        <div className="News-lissts2">

                            <img src="public/doctor.jpg" alt="" className="newss" />
                            <div className="right-head">
                                <h2 className='Food-Donation'>
                                    Food Donation Area
                                </h2>
                                <div className="catagory-info-date">
                                    <img src="public/calander.png" alt="" className="admin" />
                                    <p className="commen">October 20,2036</p>
                                </div>

                            </div>
                        </div>



                        <div className="News-lissts2">
                            <img src="public/volunteer-cleaning.jpg" alt="" className="newss" />
                            <div className="right-head">
                                <h2 className='Food-Donation'>
                                    Food Donation Area
                                </h2>
                                <div className="catagory-info-date">
                                    <img src="public/calander.png" alt="" className="admin" />
                                    <p className="commen">October 20,2036</p>
                                </div>

                            </div>
                        </div>


                        <h2 className="catas">Catagories</h2>

                        <ul className="catas-list">
                            <li className="itsm">Drinking Water
                                <span className="bage">20</span>
                            </li>
                            <li className="itsm">Food Donation
                                <span className="bage">30</span>
                            </li>
                            <li className="itsm">Children Education
                                <span className="bage">10</span>
                            </li>
                            <li className="itsm">Poverty Development
                                <span className="bage">15</span>
                            </li>
                            <li className="itsm">Clothing donation
                                <span className="bage">20</span>
                            </li>
                        </ul>

                        <h2 className="catas">Tags</h2>
                        <a href="" className="tags">Donation</a>
                        <a href="" className="tags">Clothing</a>
                        <a href="" className="tags">Food</a>
                        <a href="" className="tags">Children</a>
                        <a href="" className="tags">Education</a>
                        <a href="" className="tags">Poverty</a>
                        <a href="" className="tags">Clean Water</a>

                        <div className="list-news">
                            <form action="">
                                <h2 className="catas">Newsletter Form</h2>
                                <input type="text" placeholder="Email Address" className="email" />
                                <button className="subs">Subscribe</button>
                            </form>
                        </div>




                    </form>
                </div>
            </main >
        </>
    )
}

export default News