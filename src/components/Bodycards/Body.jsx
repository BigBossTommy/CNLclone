import React from 'react'
import carditem from '../Arrays/Arrays'
import Cards from '../Cards/Cards'
import shake from '../assets/shake.jpg'
import './Body.scss'

const Body = () => {
  return (
    <div className="Connect_main_container">
      {carditem.map((carditem, id) => {
        return <Cards carditem={carditem} key={id} />;
      })}
      <div className="rightside">
        <div className='imglink'>
          <img src={shake} alt="" />
          <p>CNL and Sprott Launch <br />New Alternative Investment <br /> Oppotunity</p>
          </div>
          <div className='blue'></div>
          <div className='orange'></div>

        
      </div>
    </div>
  )
}

export default Body