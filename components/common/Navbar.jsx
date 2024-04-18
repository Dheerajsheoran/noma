import Image from "next/image";
import { NIcon, SidebarIcon } from "./Icon";
import Link from "next/link";
import React, { useState } from 'react'
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [first, setFirst] = useState(false)
    return (
        <>
            <nav>
                <div className="max-w-[1118px] w-full mx-auto flex justify-between items-center font-Montserrat py-6 md:py-8  px-4 cursor-pointer relative ">
                    <div onClick={() => setFirst(!first)} className="lg:hidden z-30 cursor-pointer ">
                        <SidebarIcon />
                    </div>
                    <div className="max-md:hidden">
                        <Link href="/"><NIcon /></Link>
                    </div>

                        <div className="flex justify-between max-w-[900px] w-full items-center max-lg:hidden">
                            <div className="flex max-w-[615px] justify-between w-full max-lg:hidden">
                                <Link href="/Locations" className="text-[#313131] text-[16px] hover:font-bold hover:scale   font-normal   "  >
                                    Locaions
                                </Link>

                                <Link href="/Howitwork" className="text-[#313131] text-[16px] hover:font-bold hover:scale   font-normal   ">
                                    How it works
                                </Link>
                                <Link href="/News" className="text-[#313131] text-[16px] hover:font-bold hover:scale   font-normal   ">
                                    Bespoke
                                </Link>
                                <Link href="/Antigua" className="text-[#313131] text-[16px] hover:font-bold hover:scale   font-normal   ">
                                    News
                                </Link>
                                <Link href=""
                                    className="text-[#ADADAD] text-[16px]  font-normal"
                                >
                                    Alumni (Soon)
                                </Link>
                            </div>
                            <button className=" text-[#F7F7F7] font-Montserrat border-[#FF9500] border-[1px] font-extrabold text-center text-[15px] py-[16px] px-[32px] bg-[#FF9500] rounded-[28px] max-sm:font-semibold hover:bg-transparent hover:border hover:border-[#FF9500] hover:text-[#FF9500] duration-300 ">
                                BOOK YOUR CALL
                            </button>
                        </div>
                    <button className=" text-[#F7F7F7] font-Montserrat border-[#FF9500] border-[1px] font-extrabold text-center text-[15px] sm:py-[16px] py-[10px] sm:px-[32px] px-[20px] bg-[#FF9500] rounded-[28px] max-sm:font-semibold hover:bg-transparent hover:border hover:border-[#FF9500] hover:text-[#FF9500] duration-300 lg:hidden ">
                        BOOK YOUR CALL
                    </button>
                </div>

                <div className={`absolute top-0 duration-700 z-20 w-full ${first ? "top-[0%]" : "top-[-150%]"}  h-screen "sidebar-open" `}>
                    <Sidebar setFrist={setFirst} first={first} />
                </div>
            </nav>
        </>
    )
}

export default Navbar