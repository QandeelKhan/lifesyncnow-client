import React from 'react'
import { blogData } from '../data'
import './css/blogpostCard.css'
const BlogpostCard = () => {
  return (
    <>
    {/* <h1> Most Recent Posts</h1> */}
  <div className='cards-container'>
  {blogData.map((blog)=>(
  <div className="card" key={blog.id}>
  <img src={blog.img} alt="Card image"/>
  <div className="card-body">
    <h3 className="card-title">{blog.heading}</h3>
    <p className="card-text">{blog.paragraph}</p>
  </div>
  </div>
   ))}
  </div>
 
  </>

  )
}

export default BlogpostCard