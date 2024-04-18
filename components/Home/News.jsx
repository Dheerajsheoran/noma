import React from 'react'
import Heading from '../common/Heading'
import { cardData3 } from '../common/Helper'
import Image from 'next/image'

const News = () => {
    return (
        <> <div className='bg-[#F4F1E6] pb-8'>
            <div className='bg-[#FF9500] py-8 max-sm:px-3 max-w-[1440px] w-full mx-auto '>
                <p className=' text-center text-lime-50 sm:text-[32px] text-[20px] font-extrabold font-Montserrat mx-auto'>4,8 ⭐ ON GOOGLE</p>
                <div className="max-w-[415px] w-full sm:py-4 py-3 px-8 mt-16px  bg-lime-50 rounded-[28px] justify-center items-center gap-2.5 mx-auto flex ">
                    <div className="text-center text-stone-900 sm:text-[32px] text-[20px] font-extrabold font-['Montserrat']">READ OUR REVIEWS</div>
                </div>
            </div>
            <div>
                <Heading Heading2="News Section" />
            </div>

            <div className='px-3'>

                <div className="max-w-[1120px] w-full flex mx-auto flex-wrap gap-x-[10px] gap-y-[35px] justify-between max-lg:justify-center max-lg:gap-x-[20px]  ">
                    {cardData3.map((item, index) => (
                        <div key={index}>
                            <div>
                                <button className=" bg-[#D5D1EA] py-[8px] px-[7px] font-Montserrat font-normal text-[#313131] rounded-[30px] mb-[8px] hover:bg-transparent hover:border-[2px] hover:scale-110 hover:border-[#D5D1EA] duration-200 ">
                                    Locations Lowdowns
                                </button>
                                <Image
                                    src={item.img3}
                                    width={328}
                                    height={328}
                                    className=" rounded-[10px]"
                                />

                                <p className=" max-w-[328px] w-full font-Montserrat font-extrabold text-[#313131] text-[16px] sm:text-[24px] ">
                                    {item.data}
                                </p>
                                <button className=" bg-[#FC5B67] rounded-[28px] sm:py-[16px] py-[12px] sm:px-[32px] px-[25px] text-[#F7F7F7] text-[16px] font-semibold sm:font-extrabold font-Montserrat sm:mt-8 mt-4 hover:bg-transparent hover:border-[2px] hover:text-black hover:border-[#FC5B67] duration-300 hover:scale-110 ">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <Image className='mx-auto w-full' src="/img/footer-img.png" width={1920} height={644} alt='img' />
        </>
    )
}

export default News