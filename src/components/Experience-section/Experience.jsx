import React from 'react'
import './Experience.scss'
import overlay from "../assets/Overlay2.png"
import tower from '../assets/tower.jpg'





const Experience = () => {
  return (
    <div>

      <div className='exp_img'>

        
        <div className="overlay">
        <div className='tower'>  <img src= {tower} alt="" /></div>
        <div className="exp_txt">
        <h1>EXPERIENCE <span>CNL</span></h1>
        <p>Enter the square and experience a place where talent and ideas <br />come together to create an compound enduring stakeholder value</p>
        <button>Explore</button>
      </div>
        </div>


      </div>
      
    </div>
  )
}

export default Experience