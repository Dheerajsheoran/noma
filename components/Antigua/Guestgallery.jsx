import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Newslastsection from "./Newslastsection";
import { Guestcards } from "../common/Helper";

export default function Guestgallery() {
  return (
    <>
      <div className=" bg-[#BBE4D7] px-3 py-2 ">
        <div>
          <p className=" text-[32px] text-[#313131] font-extrabold font-Montserrat text-center pt-[31px] ">
            Guest gallery
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper  max-w-[1120px] w-full mx-auto flex gap-[30px]"
        >
          {Guestcards.map((items, index) => (
            <SwiperSlide>
              <div className="  max-w-[328px] mx-auto w-full" key={index}>
                <Image
                  className=" pb-[20px] "
                  src={items.img}
                  width={328}
                  height={412}
                  alt="guest-img1.png"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Newslastsection />
    </>
  );
}
