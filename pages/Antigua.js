import Accomodation from '@/components/Antigua/Accomodation'
import Guestgallery from '@/components/Antigua/Guestgallery'
import NewsSection1 from '@/components/Antigua/NewsSection1'
import Newslastsection from '@/components/Antigua/Newslastsection'
import Hero from '@/components/common/Hero'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const Antigua = () => {
    return (
        <>
            <Navbar />
            <Hero img="/img/Antigua-heroimg.png" />
            <NewsSection1 />
        </>
    )
}

export default Antigua