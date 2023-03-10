import React from 'react'
import BlogpostCard from '../components/BlogpostCard'
import '../components/css/skinCareTips.css'
import FeaturedCard from '../components/FeaturedCard'
import HeaderBanner from '../components/HeaderBanner'
import RecentCard from '../components/RecentCard'
const SkinCareTips = () => {
  return (
    <>
    {/* <h2>Skin Care Tips</h2> */}
    <HeaderBanner/>
    <FeaturedCard/>
    <RecentCard/>
    </>
  )
}

export default SkinCareTips