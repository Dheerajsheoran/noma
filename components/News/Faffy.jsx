import React from 'react'
import Heading from '../common/Heading'
import { SearchIcon } from '../common/Icon'

const Faffy = () => {
    return (
        <>
            <div className='max-w-[1120px] w-full max-md:px-3 mx-auto'>
                <Heading Heading2="Faffy Name For Blog"/>
                <div className='flex sm:max-w-[736px] max-w-[400px] my-32px bg-[#FFDA7F] w-full rounded-[57px] mx-auto sm:p-[10px_15px_10px_34px] p-[7px_10px] items-center justify-between'>
                    <input className='sm:w-[276px] w-[246px] sm:h-12 outline-none bg-transparent text-stone-500 text-[13px] font-normal font-Montserrat' type="text" placeholder='Type to search a location' />
                    <SearchIcon/>
                </div>
                <div className='flex max-w-[650px] max-sm:flex-wrap w-full gap-4 py-8 md:px-2'>
                    <p className='w-[201px] max-sm:max-w-[201px] max-sm:w-full h-[33px] bg-slate-300 rounded-[31px] text-center flex items-center justify-center text-zinc-800 sm:text-base text-[12px] font-normal font-Montserrat'>Locations Lowdowns</p>
                    <p className='w-[117px] h-[33px] bg-[#D9E4FC] rounded-[31px] text-center flex items-center justify-center text-zinc-800 sm:text-base text-[12px] font-normal font-Montserrat'>Travel Tips</p>   
                    <p className='w-[142px] h-[33px] bg-[#BBE4D7] rounded-[31px] text-center flex items-center justify-center text-zinc-800 sm:text-base text-[12px] font-normal font-Montserrat'>Remote Life</p>
                    <p className='w-[127px] h-[33px] bg-[#FFDA7F] rounded-[31px] text-center flex items-center justify-center text-zinc-800 sm:text-base text-[12px] font-normal font-Montserrat'>Alum-News</p>
                </div>
            </div>
        </>
    )
}

export default Faffy