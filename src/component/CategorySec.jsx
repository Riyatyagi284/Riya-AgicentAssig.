import React, { useState } from 'react'
import './CompoCss/CategorySec.css';
import CategoryCard from './CategoryCard';
import {categoryData} from "../data/data.js"
 
const CategorySec = () => {
  const [img, setImg] = useState('');
  return (
    <div className='category-section'>
       <h3>Shop From Our Top Categories</h3>
       <div className="category-cardWrapper">
        {
          categoryData.map((category) => (
            <CategoryCard key={category.id} Img={category.img} />
          ))
        }
      </div>
    </div>
  )
}

export default CategorySec
