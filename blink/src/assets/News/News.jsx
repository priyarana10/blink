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
                    <p className="para-cata">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito<br></br> Professional charity theme based on Bootstrap</p></div>
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
                    <p className="para-cata">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus<br></br> elementum, tempor risus vel, condimentum orci</p></div>
            </div>
        </div>
        <div className="right-side">
            <form action="">
                <div className="searchbutton">
                <input type="search" placeholder='search' name="search" id="" />
                <button className="search-icon">
                    <img src="public/search.png" alt="" className="search-ico" />
                </button>
                </div>
            </form>

            <div className="list-news"></div>
        </div>
    </main>
    </>
  )
}

export default News