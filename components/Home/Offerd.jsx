import React from 'react'
import Heading from '../common/Heading'
import { cardmap2 } from '../common/Helper'
import Image from 'next/image'

const Offerd = () => {
    return (
        <>
            <div className='px-3 bg-[#ECECFD] pb-8'>
                <div>
                    <Heading Heading2="What we offer" />
                </div>
                <div className='max-w-[1120px]  gap-[17px] mx-auto  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full'>

                    {cardmap2.map((item, index) => (
                        <div key={index} className='max-w-[267px] w-full max-lg:mx-auto '>
                            <div className=' flex flex-col items-center justify-center '>
                                <p className='text-center text-zinc-800 sm:text-[32px] text-[20px] font-extrabold font-Montserrat'>{item.heading}</p>
                                <Image src={item.img} width={267} height={200} alt='img' />
                                <p className='text-center text-zinc-800 text-base max-sm:leading-normal max-sm:text-[12px] font-normal font-Montserrat'>{item.text} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Offerd