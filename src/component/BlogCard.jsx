import React from 'react'
import './CompoCss/BlogCard.css'
import BlogImg from "../../public/assets/blog/Blog1.png"

const BlogCard = ({Img}) => {
  return (
    <div className="blog-card">
     <img src={Img} alt="blog-CardImg"/>
     <div className="blogDetails">
        <h3>The Power of Mindfulness</h3>
        <p className='para1'>Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way.</p>

        <button className="readMore">Read More</button>
        <p className='date'>08-05-2022</p>
     </div>
    </div>
  )
}

export default BlogCard
