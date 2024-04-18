import React from "react";
import Image from "next/image";
import Accomodation from "./Accomodation";
import { BlackstarIcons } from "../common/Icon";
import { Highlightcards } from "../common/Helper";

const Highlights = () => {
  return (
    <>
      <div className=" bg-[#FCD9DF] pb-[97px] max-md:pb-[75px] max-sm:pb-[50px] ">
        {" "}
        <div className=" max-w-[1140px] w-full mx-auto px-3 py-2 ">
          <div>
            <div className=" flex justify-center gap-[16px] items-center py-[32px] ">
              <BlackstarIcons />
              <p className=" text-[#313131] text-[32px] font-Montserrat font-extrabold ">
                Highlights{" "}
              </p>
            </div>
            <div className=" flex justify-between gap-[25px] flex-wrap max-lg:justify-center ">
              {Highlightcards.map((items, index) => (
                <div key={index} className=" max-w-[328px] w-full ">
                  <button
                    className={` px-[18px] mb-[4px] py-[7px] rounded-[31px] flex justify-center items-center text-[16px] font-Montserrat font-normal text-[#313131] hover:scale-105 hover:duration-300 hover:shadow-lg hover:shadow-black `}
                    style={{ backgroundColor: `${items.bg}` }}
                  >
                    {items.btn1}
                  </button>
                  <Image src={items.img} width={328} height={412} alt="img" />
                  <p className=" text-[32px] text-[#313131] max-w-[320px] font-extrabold leading-normal font-Montserrat ">
                    {items.text1}
                  </p>
                  <p className=" text-[16px] font-Montserrat font-normal leading-normal text-[#] ">
                    {items.text2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Accomodation />
    </>
  );
};

export default Highlights;
