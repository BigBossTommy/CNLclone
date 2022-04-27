import React from 'react'
import Body from './Bodycards/Body'
import Carosel from './Carosel/Carosel'
import Experience from './Experience-section/Experience'
import Footer from './footer/footer'
import Header from './Header/Header'

const Main = () => {
  return (
    <div>
        
        <Experience/>
        <Body/>
        <Carosel/>
      <Footer/>
    
    </div>
  )
}

export default Main