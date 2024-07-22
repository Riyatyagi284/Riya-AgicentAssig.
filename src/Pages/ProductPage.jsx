import React, { useState } from 'react';
import Pagination from '../component/Pagination.jsx';
import ProductCard from '../component/ProductCard.jsx'
import '../component/CompoCss/ProductPage.css'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { productData } from "../data/data.js"

const ProductPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="BreadCrumb-Area product-breadcrumb">
                <ul>
                    <li><NavLink to="/">Product</NavLink><IoIosArrowForward /></li>
                    <li><NavLink to="/">Dhoop Cones</NavLink><IoIosArrowForward /></li>
                    <li><NavLink to="/">Jar Cones</NavLink></li>
                </ul>
            </div>

            <div className="Product-Filter">
                <button>Price ($)<MdArrowDropDown /></button>
                <button>Category <MdArrowDropDown /></button>
            </div>

            <div className='Products'>
                {
                    productData.map((category) => (
                        <ProductCard key={category.id} Img={category.img} />
                    ))
                }
            </div>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default ProductPage
