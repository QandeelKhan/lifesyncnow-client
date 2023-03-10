import React from 'react'
import './css/sectionHeading.css'
const SectionHeading = (props:any) => {
  return (
    <>
    <h1 className='section-heading'>{props.heading}</h1>
    </>
  )
}

export default SectionHeading