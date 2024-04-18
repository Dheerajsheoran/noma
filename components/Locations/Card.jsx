import React from 'react'
import { featured } from '../common/Helper'
import Image from 'next/image'

const Card = () => {
  return (
    <>
          <div className="max-w-[1132px] w-full mx-auto grid grid-cols-3 max-lg:grid-cols-2 mb-[48px] py-8 max-md:grid-cols-1 px-3 gap-x-[68px] gap-y-[32px] ">
              {featured.map((items, index) => (
                  <div key={index} className="max-w-[328px] w-full  mx-auto  ">
                      <div className="flex gap-[8px] py-[8px] px-[4px]">
                          <button
                              className="max-w-[162px] w-full h-[33px] rounded-[20px] font-Montserrat text-[14px] not-italic leading-[normal] text-center font-normal py-[8px] pr-[5px] "
                              style={{ backgroundColor: `${items.bgcolor}` }}
                          >
                              {items.btn_1}
                          </button>
                          <button
                              className="max-w-[100px] w-full h-[33px] rounded-[20px] font-Montserrat text-[14px] not-italic leading-[normal] text-center font-normal"
                              style={{ backgroundColor: `${items.bg_colour_second}` }}
                          >
                              {items.btn_2}
                          </button>
                      </div>
                      <div>
                          <Image
                              className="rounded-[16px_16px_0px_0px]"
                              src={items.imgs}
                              width={328}
                              height={412}
                              alt="card-1-img"
                          />
                      </div>

                      <div
                          style={{ backgroundColor: `${items.content_bg}` }}
                          className="max-w-[328px] w-full rounded-[0px_0px_16px_16px] px-4"
                      >
                          <h1 className=" font-Montserrat text-[24px] not-italic font-extrabold leading-[normal] w-full pt-[4px] max-w-[202px] ">
                              {" "}
                              {items.name}
                          </h1>

                          <p className="text-[#313131] font-Montserrat text-[14px] not-italic font-normal leading-[normal] pt-[8px]">
                              {items.date}
                          </p>

                          <div className="flex justify-between py-[8px]">
                              <p className=" font-Montserrat text-[#313131] not-italic font-normal leading-[normal]">
                                  {items.day}
                              </p>
                              <p className="text-black font-Montserrat text-[14px] not-italic font-extrabold leading-[normal]">
                                  {items.price}
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <Image className='mx-auto w-full' src="/img/footer-img.png" width={1920} height={644} alt='img' />
    </>
  )
}

export default Card