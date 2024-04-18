import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { featured } from "../common/Helper";
import Heading from "../common/Heading";

export default function Featured() {
    return (
        <>
            <div className="pb-[96px] bg-[#F4F1E6]">
                <div>
                    <Heading Heading2="Featured Editions Section" />
                </div>
                <div className=" px-[12px] ">
                    <div
                        className="max-w-[1120px] w-full mx-auto flex  gap-x-[68px] 
            gap-y-[32px] "
                    >
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                            breakpoints={{

                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1100: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {featured.map((items, index) => (
                                <SwiperSlide>
                                    <div key={index} className="max-w-[328px]  w-full  mx-auto  ">
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
                                            className="max-w-[328px] w-full  rounded-[0px_0px_16px_16px] px-4"
                                        >
                                            <h1 className=" font-Montserrat text-[24px] not-italic font-extrabold leading-[normal] w-full pt-[4px] max-w-[202px] ">
                                                {" "}
                                                {items.name}
                                            </h1>

                                            <p className="text-[#313131] font-Montserrat text-[14px] not-italic font-normal leading-[normal] pt-[8px]">
                                                {items.date}
                                            </p>

                                            <div className="flex justify-between py-[8px] max-sm-px-2">
                                                <p className=" font-Montserrat text-[#313131] not-italic font-normal leading-[normal]">
                                                    {items.day}
                                                </p>
                                                <p className="text-black font-Montserrat text-[14px] not-italic font-extrabold leading-[normal]">
                                                    {items.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}