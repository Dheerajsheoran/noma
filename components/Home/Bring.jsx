import React from 'react';
import Image from 'next/image';
import Heading from '../common/Heading';
import Para from '../common/Para';

const Bring = () => {
    return (
        <>
            <div className='bg-[#F4F1E6] pb-8'>
                <div className='md:py-8 py-4 '>
                    <Image src="/img/section-1-img.png" width={3000} height={94} alt='img' />

                </div>
                <div className='mx-auto max-w-[1120px] w-full max-lg:px-3 '>
                    <Heading Heading2="Bring Your Job, Well Do The Rest" />
                    <Para para="Your remote work, done differently. We curate extraordinary 2-4 week trips for remote workers, building a community of like-minded professionals. Whether you work fully remotely or you can take time away from the office, why not embrace the world with us, and redefine your work-life balance." />

                    <Image src="/img/vedio.png" width={1120} height={660} alt='img' />

                    <button className=" md:mt-8 mt-3 text-[#F7F7F7] mx-auto flex items-center font-Montserrat border-[#FF9500] border-[1px] font-extrabold text-center text-[15px] sm:py-[16px] py-[10px] sm:px-[32px] px-[20px] bg-[#FF9500] rounded-[28px] max-sm:font-semibold hover:bg-transparent hover:border hover:border-[#FF9500] hover:text-[#FF9500] duration-300 ">
                        BOOK YOUR CALL
                    </button>
                </div>
            </div>
        </>
    );
};

export default Bring;
