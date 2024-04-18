import React from "react";

import Image from "next/image";
import { Lastsectioncards } from "../common/Helper";

const Newslastsection = () => {
  return (
    <>
      <div className="bg-[#F4F1E6]">
        <div className=" max-w-[1140px] w-full mx-auto px-3  ">
          <div className=" flex justify-between pt-[51px] pb-[31px] gap-[20px] flex-wrap max-lg:justify-center ">
            {Lastsectioncards.map((item, index) => (
              <div key={index} className=" max-w-[328px] w-full ">
                <p className=" text-[32px] font-Montserrat font-extrabold text-[#313131] ">
                  {item.text1}
                </p>
                <div className=" flex gap-[8px] mb-[7px] ">
                  <button className=" text-[16px] font-Montserrat font-normal text-[#313131] max-w-[138px] w-full py-[8px] px-[4px] bg-[#BBE4D7] rounded-[20px] ">
                    {item.btn1}
                  </button>
                  <button className=" text-[16px] font-Montserrat font-normal text-[#070707] max-w-[190px] w-full py-[8px] px-[4px] bg-[#D9E4FC] rounded-[20px] ">
                    {item.btn2}
                  </button>
                </div>
                <Image
                  src={item.img}
                  width={328}
                  height={412}
                  alt="lastcard-img1.png"
                />
                <p
                  className=" text-[16px] font-Montserrat font-normal text-[#313131] leading-normal
                  mt-[5px] "
                >
                  {item.text2}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Image className='mx-auto w-full' src="/img/footer-img.png" width={1920} height={644} alt='img' />
      </div>
      
    </>
  );
};

export default Newslastsection;
