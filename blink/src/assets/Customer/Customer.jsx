import React from 'react'
import "./Customer.css"
const Customer = () => {
  return (
    <>
    <main className="customers">
         <div className="happ">
            <h1 className="text-tittle">Happy Customers</h1>
            <h4 className='Coustm-para'>"Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme"</h4>

            <div className="custm-lists">
                <img src="public/person1.jpg" alt="" className="persons" /> 
                <img src="public/person2.jpg" alt="" className="persons" />
                <img src="public/preson3.jpg" alt="" className="persons" />
                <img src="public/person4.jpg" alt="" className="persons" />
            </div>

         </div>

    </main>
    </>
  )
}

export default Customer