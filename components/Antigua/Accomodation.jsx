import Image from "next/image";
import React from "react";
import Guestgallery from "./Guestgallery";
import { Accomodationcards   } from "../common/Helper";

const Accomodation = () => {
  return (
    <>
      <div className=" bg-[#F4F1E6]  ">
        <div className=" max-w-[1140px] w-full mx-auto px-3 py-2 pb-[84px] max-sm:pb-[50px] ">
          <div>
            <p className=" text-[32px] font-extrabold font-Montserrat text-center max-sm:text-[28px] ">
              The accomodation
            </p>
            <p className=" max-w-[774px] w-full mx-auto mb-[32px] text-[16px] font-Montserrat font-normal text-center max-sm:text-[12px] ">
              Short description about the hotel or houses or the place, no more
              than 3 lines, and not describing any amenities{" "}
            </p>
          </div>
          <div className=" flex justify-between gap-[20px] flex-wrap max-lg:justify-center ">
            {Accomodationcards.map((items, index) => (
              <div
                key={index}
                className=" max-w-[328px] w-full flex flex-col gap-[8px] "
              >
                <div className=" flex gap-[8px] ">
                  <button className=" bg-[#BBE4D7] py-[8px] px-[8px] text-[#313131] text-[13px] font-Montserrat leading-normal rounded-[16px] ">
                    {items.btn1}
                  </button>
                  <button
                    className=" bg-[#313131] py-[8px] px-[8px] text-white text-[13px] 
                    font-Montserrat leading-normal rounded-[16px] "
                  >
                    {items.btn2}
                  </button>
                </div>
                <Image
                  src={items.img}
                  width={328}
                  height={412}
                  alt="accomodation-img1.png"
                />
                <p className=" text-[32px] text-[#313131] font-Montserrat font-extrabold max-sm:text-[23px] ">
                  {items.text1}
                </p>
                <p className=" font-Montserrat text-[16px] font-normal leading-normal text-[#313131] ">
                  {items.text2}
                </p>
                {items.icon}
                <div className=" flex justify-between">
                  <p className=" text-[16px] text-[#313131] font-bold leading-normal ">
                    {items.text3}
                  </p>
                  <button className=" bg-[#FF9500] text-[#F4F1E6] py-[8px] text-[14px] font-extrabold rounded-[20px] px-[8px] ">
                    {items.btn3}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Guestgallery />
    </>
  );
};

export default Accomodation;
