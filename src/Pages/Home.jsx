import React from 'react'
import HeroCarousel from '../component/HeroCarousel'
import CategorySec from '../component/CategorySec'
import WhyFlamingo from '../component/WhyFlamingo'
import LatestBlog from '../component/LatestBlog'
import Contact from '../component/Contact'

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <CategorySec />
            <WhyFlamingo />
            <LatestBlog />
            <Contact />
        </>
    )
}

export default Home
