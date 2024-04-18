import Link from 'next/link'
import React from 'react'
import { ArrowIcon, ArrowIcon1 } from './Icon'

const Sidebar = (setFrist, first) => {
    return (
        <>
            <div
                className={` absolute h-screen w-full max-sm:top-[90px] top-[100px] bg-[#ECECFD]   lg:hidden cursor-pointer "sidebar-open"`}
            >
                <div className="flex justify-end  cursor-pointer">
                    <div className="hover:rotate-90 transition-transform duration-300">

                    </div>
                </div>
                <Link href="/" className="bg-[#FFDA7F] flex justify-between items-center px-8">
                    <div  className="text-[16px] leading-normal font-normal font-Montserrat text-[#313131] hover:font-bold py-4  ">
                        Home page
                    </div>
                    <ArrowIcon />
                </Link>
                <Link href="/Howitwork" className="bg-[#BBE4D7] flex justify-between items-center px-8">
                    <div className="text-[16px] leading-normal font-normal font-Montserrat text-[#313131] hover:font-bold py-4  ">
                        How it works
                    </div>
                    <ArrowIcon1 />
                </Link>
                <Link href="/Locations" className="bg-[#FCD9DF] flex justify-between items-center px-8">
                    <div  className="text-[16px] leading-normal font-normal font-Montserrat text-[#313131] hover:font-bold py-4  ">
                        Locations
                    </div>
                    <ArrowIcon1 />
                </Link>
                <Link href="/Antigua" className="bg-[#D9E4FC] flex justify-between items-center px-8">
                    <div className="text-[16px] leading-normal font-normal font-Montserrat text-[#313131] hover:font-bold py-4  ">
                        News
                    </div>
                    <ArrowIcon />
                </Link>
                <div className="bg-[#ECECFD] flex justify-between items-center px-8">
                    <div href="/" className="text-[16px] leading-normal font-normal font-Montserrat text-[#313131] hover:font-bold py-4  ">
                        Alumni (Soon)
                    </div>
                    <ArrowIcon1 />
                </div>
            </div>
        </>
    )
}

export default Sidebar