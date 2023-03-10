import React from 'react'
import './css/featuredCard.css'
import { FeaturedData } from '../data'
import SectionHeading from './SectionHeading'
const FeaturedCard = () => {
  return (
    <>
    <div className='featured-section section-p1'>
    <SectionHeading heading="Featured"/>

  <div className='featured-container'>
  {FeaturedData.map((feature)=>(
  <div className="featured-card" key={feature.id}>
  <img src={feature.img} className="featured-img" alt="featured-img"/>
  <div className="featured-body">
    <h3 className="featured-title">{feature.heading}</h3>
    <p className="featured-text">{feature.paragraph}</p>
    <p className="featured-author"> By {feature.author}</p>
  </div>
  </div>
   ))}
  </div>
 
  </div>
  </>
  )
}

export default FeaturedCard