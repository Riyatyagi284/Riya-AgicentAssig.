import React from 'react';
import './CompoCss/CategoryCard.css'
import categoryImg from "../../public/assets/category/category1.png";

const CategoryCard = ({Img}) => {
  return (
    <div className='category-card'>
      <img src={Img} alt="categoryImage" />
      <h3>Category Title</h3>
      <button>Shop Now</button>
    </div>
  )
}

export default CategoryCard
