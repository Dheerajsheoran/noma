import Image from 'next/image'
import React from 'react'

const Hero = ({ img }) => {
    return (
        <>
            <div
                className={` bg-black text-center text-[62px] font-bold`}>
                <Image className='mx-auto' src={img} width={1920} height={800} alt='img' />
            </div>
           
        </>
    )
}

export default Hero