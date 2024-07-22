import React from 'react';
import './CompoCss/RelatedProCard.css';
import productImage from '../../public/assets/RelatedProduct/RelatedProduct1.png';

const RelatedProCard = ({Img}) => {
    return (
        <div className='RelatedCard-Parent'>
            <div className='Related-card'>
                <div className="btn-wrapper">
                    <button>New</button>
                    <button>L</button>
                </div>

                <img src={Img} alt="related-ProductImg" />

                <button>Add to cart</button>
            </div>

            <div className="RelatedCard-Detail">
                <h3>Product Title</h3>
                <h3>$4.05 <span>$8.00</span></h3>
            </div>

        </div>
    )
}

export default RelatedProCard
