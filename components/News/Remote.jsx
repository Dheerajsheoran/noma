import React from 'react'
import Image from "next/image";
import { cardData5 } from '../common/Helper'

const Remote = () => {
    return (
        <>
            <div>
                <div className="max-w-[1120px] max-lg:px-3 w-full flex mx-auto flex-wrap gap-x-[10px]  justify-between max-lg:justify-center max-lg:gap-x-[20px]  ">
                    {cardData5.map((item, index) => (
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
                </div>
            </div>
            <Image className='mx-auto w-full' src="/img/footer-img.png" width={1920} height={644} alt='img' />
        </>
    )
}

export default Remote