import React from 'react'
import './footer.scss'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer >
          <div className="footer">
            
          <div className="about">
              <ul>
                  <li><h4>About CNL</h4></li>
                  <li>Our Leaders</li>
                  <li>Our Community</li>
              </ul>
          </div>
            <div className="business">
                <ul>
                    <li><h4>Business</h4></li>
                </ul>
            </div>
            <div className="careers">
                <ul>
                    <li><h4>CAREERS</h4></li>
                    <li>Core Value</li>
                    <li>Benefits</li>
                    <li>Talent Development</li>
                    <li>Cupota Awards</li>
                    <li>Find a Career</li>
                </ul>
            </div>
            <div className="nr">
                <li><h4>NEWS RELEASES</h4></li>
            </div>
            <div className="cu">
                <ul>
                    <li><h4>CONTACT US</h4></li>
                </ul>
            </div>
            <div className="linkedin">
                <li><h2>LINKED <FaLinkedin style={{  color: "blue" }}/></h2></li>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer