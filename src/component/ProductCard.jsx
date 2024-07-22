import React from 'react';
import './CompoCss/ProductCard.css';
import categoryImg from "../../public/assets/product/product1.png"
import starRating from "../../public/assets/stars.png";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({Img}) => {
 const navigate = useNavigate();

    return (
        <div className='productSpecific-card' onClick={() => navigate('/productDetail')}>
            <img src={Img} alt="categoryImage" />
            <div className="productDescription">
                <h3>Category Title</h3>
                <p>4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use</p>
                <img src={starRating} alt="product-rating" />
                <button>$2.05</button>
            </div>
        </div>
    )
}

export default ProductCard
