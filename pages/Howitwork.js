import Image from "next/image";
import Step from '@/components/Home/Step'
import Basic from '@/components/Howitwork/Basic'
import How from '@/components/Howitwork/How'
import Main from '@/components/Howitwork/Main'
import Vedio from '@/components/Howitwork/Vedio'
import { basicPath, startWork } from '@/components/common/Helper'
import Hero from '@/components/common/Hero'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const Howitwork = () => {
    return (
        <>
            <Navbar />
            <Hero img="/img/howitwork-hero.png" />
            <How />
            <div className="bg-[#FFDA7F] pt-4">
                <div className="flex flex-wrap max-lg:justify-center justify-between max-w-[1035px] w-full mx-auto">
                    {startWork.map((items, index) => (
                        <Step card={items} key={index} />
                    ))}
                </div>
            </div>
            <Vedio />
            <div className="bg-[#FFDA7F] px-4 sm:px-0 pb-8 ">
                <div className="flex flex-wrap max-lg:justify-center gap-[24px] lg:gap-x-[141px]  justify-between max-w-[887px] w-full mx-auto">
                    {basicPath.map((items, index) => (
                        <Basic path={items} key={index} />
                    ))}
                </div>
            </div>
            <Image className='mx-auto w-full mt-10' src="/img/footer-img.png" width={1920} height={644} alt='img' />
        </>
    )
}

export default Howitwork