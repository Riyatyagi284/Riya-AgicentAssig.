import React from 'react'
import './CompoCss/HeroCarousel.css'
import HeroImg from "../../public/assets/hero-hand.png"
import OwlCarousel from 'react-owl-carousel';


const HeroCarousel = () => {

  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
    nav: true,
    dots: false,
  }

  return (
    <OwlCarousel className='owl-theme section' loop={true} nav={true} margin={20} dots={false} items={1} autoplay={true} autoplayTimeout={3000}  {...options}>
    <div className="hero-section">
        <div className="left">
            <img src={HeroImg} alt="Hero-img" />
        </div>

        <div className="right">
            <h1>Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses</h1>
        </div>
    </div>
    </OwlCarousel>
  )
}

export default HeroCarousel
