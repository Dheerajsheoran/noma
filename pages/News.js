import Faffy from '@/components/News/Faffy'
import Featured from '@/components/News/Featured'
import Remote from '@/components/News/Remote'
import Hero from '@/components/common/Hero'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const News = () => {
    return (
        <>
            <Navbar />
            <Hero img="/img/news-hero-img.png" />
            <Faffy />
            <Featured/>
            <Remote/>
        </>
    )
}

export default News