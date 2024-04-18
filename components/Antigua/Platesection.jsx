import React from "react";
import Image from "next/image";
import Included from "./Included";
import { platecards } from "../common/Helper";

const Platesection = () => {
  return (
    <div>
      <div className=" bg-[#ECECFD] px-3 ">
        <div className=" flex justify-between max-w-[782px] w-full mx-auto gap-[15px] flex-wrap max-sm:justify-center ">
          {platecards.map((items, index) => (
            <div
              key={index}
              className=" flex flex-col items-center pt-[21px] pb-[28px] "
            >
              <p className=" max-w-[88px] w-full text-[#313131] font-normal font-Montserrat text-[16px] leading-normal text-center  ">
                {items.text1}
              </p>
              <Image
                className="mt-[22px] mb-[18px]"
                src={items.img}
                width={105}
                height={103}
                alt="img"
              />
              <p className=" text-[#313131] text-[32px] font-bold leading-normal max-w-[79px] w-full ">
                {items.text2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Included />
    </div>
  );
};

export default Platesection;
