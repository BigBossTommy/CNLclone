import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {FaGripLines, FaSearch} from 'react-icons/fa'
import { useState } from "react";
import {BiMenuAltRight, } from 'react-icons/bi'



const Header = () => {
  
  const [menu, setMenu] = useState(false);
  const handleToggle = () => setMenu(!menu);
  

  
  return (
    <div>
      <header>
      <nav>


            <div className="logo"><img src= {logo} alt="logo" /><h1></h1></div>
            <ul>
              <div className="ul"></div>
                <li>About<span>CNL</span></li>
                <li>Business</li>
                <li>Careers</li>
                <li>News<span>Releases</span></li>
                <li>Contact<span>Us</span></li>
                <li><FaSearch/></li>
                
                
            <div className="menu-btn"   >
              <button onClick={handleToggle} ><BiMenuAltRight 
                style={{ fontSize: 50, marginLeft: "2rem", marginTop: "-1rem",  color: "black" }} /></button>
              <div menu={menu}></div>
              {menu && (
              <div className="text-float"  >
              <div className='h3'>
                <b onClick={handleToggle} >x</b>
                <h3>About <span>CNL</span></h3>
                <h3>Business</h3>
                <h3>Careers</h3>
                <h3>News <span>Releases</span></h3>
                <h3>Contact <span>Us</span></h3>
                
                <label className='search'>
                      <input type="text" placeholder='Search' />
                    </label>
                


              </div>
                 
              </div>
            )}
            </div>
            </ul>
            
        </nav>
        
      </header>

      
    </div>
  )
}

export default Header