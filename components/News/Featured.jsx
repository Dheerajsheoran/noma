import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { cardData4 } from '../common/Helper'

const Featured = () => {
    return (
        <>
            <div className='bg-[#FC8B99] max-xl:px-3'>
                <p className='text-center text-zinc-800 md:text-[32px] sm:text-[26px] text-[20px] font-extrabold font-Montserrat sm:py-8 py-4'> Featured blogs</p>

                <div >
                    <Link href="/Faffy" className="max-w-[1120px] w-full flex mx-auto flex-wrap gap-x-[10px] sm:gap-y-[35px] justify-between max-lg:justify-center max-lg:gap-x-[20px]  "  >
                        {cardData4.map((item, index) => (
                            <div key={index} className='sm:py-8 py-4' >
                                <div>
                                    <button className={`py-[8px] w-[169px] font-Montserrat text-[14px] font-normal text-[#313131] rounded-[30px] mb-[8px] hover:bg-transparent hover:border-[2px] hover:scale-105 hover:border-[#D5D1EA] hover:duration-200 `} style={{ backgroundColor: `${item.bg}` }} >
                                        {item.btn}
                                    </button>
                                    <Image
                                        src={item.img3}
                                        width={328}
                                        height={328}
                                        className=" rounded-[10px]"
                                        alt='img'
                                    />

                                    <p className=" max-w-[328px] w-full font-Montserrat font-extrabold text-[#313131] text-[16px] sm:text-[24px] ">
                                        {item.data}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Featured