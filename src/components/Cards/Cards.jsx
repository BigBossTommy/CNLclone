import React from 'react'
import './Card.scss'
import pic1 from "../assets/whatwedo.jpg"
import pic2 from "../assets/whoweare.jpg"
import pic3 from "../assets/workwithus.jpg"

const Cards = ({ carditem }) => {
    return (
        <div >
            <section className='layout'>
                <div className="cardbody">

                    <div className="cardimg">
                        <img src={carditem.image} alt="" />
                        
                    </div>
                    <div className="cardtxt">
                        <h1> {carditem.Heading} </h1>
                        <p className="unflexed">{carditem.description}</p>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Cards