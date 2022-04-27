import React from 'react'
import Carousel  from 'react-elastic-carousel'
import './carosel.scss'
import img1 from '../assets/securities.jpg'
import img2 from '../assets/CHP.jpg'
import img3 from '../assets/capital.jpg'


const Carosel = () => {
    return (
        <div className='lay_out'>
            <Carousel >
                <div className="card_container">
                    <div className="caroselcards">
                        <img src={img1} alt="" />
                        <h3>CNL SECURITIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Earum rem adipisci impedit fugit! <br /> Cumque accusamus mollitia eligendi architecto dolorum facere?</p>
                    </div>
                    <div className="caroselcards">
                        <img src={img2} alt="" />
                        <h3>CNL SECURITIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Earum rem adipisci impedit fugit! <br /> Cumque accusamus mollitia eligendi architecto dolorum facere?</p>
                    </div>
                    <div className="caroselcards">
                        <img src={img3} alt="" />
                        <h3>CNL SECURITIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Earum rem adipisci impedit fugit! <br /> Cumque accusamus mollitia eligendi architecto dolorum facere?</p>
                    </div>
                    <div className="caroselcards">
                        <img src={img1} alt="" />
                        <h3>CNL SECURITIES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Earum rem adipisci impedit fugit! <br /> Cumque accusamus mollitia eligendi architecto dolorum facere?</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carosel