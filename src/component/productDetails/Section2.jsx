import React, { useState } from 'react'
import "./Section2.css"
import productImg from "../../../public/assets/productDetail/productDetail1.webp"
import stars from "../../../public/assets/stars.png"
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import RelatedProCard from "../RelatedProCard.jsx"
import Tab from "../Tab.jsx"
import { relatedProductData } from "../../data/data.js"
import { productDetailData } from "../../data/data.js"

const Section2 = () => {
    const [img, setImg] = useState('');
    return (
        <>

            <div className="PDBreadCrumb-Area">
                <ul className='productDetailUl'>
                    <li><NavLink to="/">Product</NavLink><IoIosArrowForward /></li>
                    <li><NavLink to="/">Home</NavLink><IoIosArrowForward /></li>
                    <li><NavLink to="/">Category</NavLink></li>
                </ul>
            </div>


            <div className='section2-wrapper'>
                <div className="col1">

                    {
                        productDetailData.map((category) => (
                            <div className="box" key={category.id}>
                                <img src={category.img} alt="productImg1" />
                            </div>
                        ))
                    }
                </div>


                <div className="col2">
                    <img src={productImg} alt="product-img" />
                </div>

                <div className="col3">
                    <div className="brand-data">

                        <p><span>Brand:</span> Rashmi Divine Solutions</p>

                        <p><span>Scent:</span> Rashmi Divine Solutions</p>

                        <p><span>Availability:</span> Rashmi Divine Solutions</p>

                    </div>

                    <h3>Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine</h3>

                    <img src={stars} alt="stars-image" className='star-rating' />

                    <ul>
                        <li>Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.</li>

                        <li>Lavender Crafted out of the finest quality ingredients, this leaves a magnificent and alluring fragrance and adds more to your ‘spiritual time.</li>

                        <li>Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing fragrances which don't cause eye irritation and headache.</li>

                    </ul>

                    <div className="price-area">
                        <p>USD(incl. of all taxes)</p>
                        <h3>$4.05 <span>$8.00</span></h3>
                    </div>

                    <div className="btnContainer">

                        <div className="btn1-div">
                            <button className="btn1a">+</button>
                            <button className="btn1b">1</button>
                            <button className="btn1c">-</button>
                        </div>

                        <button className="btn2">Buy Now</button>

                        <button className="btn3">Add To Cart</button>
                    </div>
                </div>
            </div>

            <Tab />

            <div className="RelatedProCard-section">
                <h3>Related Products</h3>
                <div className='RelatedProCard-wrapper'>
                    {
                        relatedProductData.map((category) => (
                            <RelatedProCard key={category.id} Img={category.img} />
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Section2;