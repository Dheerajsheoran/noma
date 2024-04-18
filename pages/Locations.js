import Card from '@/components/Locations/Card'
import Whear from '@/components/Locations/Whear'
import Hero from '@/components/common/Hero'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const Locations = () => {
  return (
    <>
    <Navbar/>
          <Hero img="/img/Howitwork-img.png" />
          <Whear/>
          <Card/>
    </>
  )
}

export default Locations