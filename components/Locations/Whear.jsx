import React from 'react'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { SearchIcon, WhereIcon } from '../common/Icon'

const Whear = () => {
    return (
        <>
            <div className='max-lg:px-3'>
                <Heading Heading2="Where do you want to go" />
                <Para para="Fun fluffy line about the start of your journey here CAN be two lines and make it inspiring" />
                <div className='py-8 mt-8'>
                    <div className='flex mx-auto sm:max-w-[736px] max-w-[400px]  w-full'>
                        
                        <div className='bg-[#BBE4D7] rounded-[57px_0px_0px_57px] sm:max-w-[98px] max-w-[50px] w-full items-center flex justify-center' >
                                <WhereIcon />
                            </div>
                            <div className='max-w-[411px] flex items-center  w-full p-[10px_0px_10px_24px] max-md:pr-[24px] max-sm:p-[7px_5px]  '>
                                <input className='  w-full outline-none sm:h-12 bg-transparent  text-stone-500 text-[13px]
                                font-normal' type="text" placeholder='Type to search a location' />
                            </div>
                       
                        <button className='flex hover:bg-[#BBE4D7] hover:duration-500 bg-[#FFDA7F] items-center rounded-[0px_57px_57px_0px]  max-md:mx-auto max-sm:px-2 sm:py-[19px] py-[10px]   max-w-[227px] max-sm:justify-center  max-sm:max-w-[70px] w-full'>
                            <span className='flex sm:w-[178px] max-sm:hidden h-[26px] text-center justify-center text-stone-500 text-[13px] font-normal font-Montserrat items-center' type='submit'>Surprise me </span>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whear