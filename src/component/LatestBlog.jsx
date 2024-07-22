import React, {useState} from 'react'
import './CompoCss/LatestBlog.css'
import BlogCard from './BlogCard'
import {blogData} from "../data/data.js"

const LatestBlog = () => {
    const [img, setImg] = useState('');

    return (
        <div className="blog-section">
            <h3>Our Latest Blogs</h3>
            <div className='blog-wrapper'>
                {
                    blogData.map((category) => (
                        <BlogCard key={category.id} Img={category.img} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestBlog
