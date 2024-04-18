import Image from "next/image";
import React from "react";
import MeetMariela from "./MeetMariela";
import { Includecards } from "../common/Helper";

const Included = () => {
  return (
    <>
      <div>
        <div className="bg-[#FFDA7F]">
          <div className="  max-w-[1140px] w-full mx-auto px-3 py-4 ">
            <div className=" flex justify-end max-lg:justify-center  ">
              <p className=" text-[#313131] font-Montserrat text-[32px] font-extrabold mb-[36px] pr-[80px] max-lg:pr-0 max-sm:text-[24px] max-sm:mb-[22px] ">
                What’s included
              </p>
            </div>
            <div className=" flex justify-between gap-[20px] flex-wrap max-lg:justify-center items-center ">
              <div className=" flex flex-col gap-[20px] ">
                <p className=" max-w-[457px] w-full text-[16px] max-sm:text-[11px] font-Montserrat leading-normal text-center ">
                  {" "}
                  Our explosive Edition in Antigua, Guatemala, has you
                  experiencing everything this hidden beauty has to offer. From
                  the sacred Lake Atitlan to hiking the unbelievable Volcan
                  Acatenango to discovering hidden bars and artisan markets,
                  every moment is an opportunity for exploration.
                </p>
                <p
                  className=" max-w-[457px] w-full text-[16px] max-sm:text-[11px] font-Montserrat leading-normal text-center
                   pb-[65px] max-lg:pb-[40px] max-sm:pb-[22px] "
                >
                  {" "}
                  Antigua’s rich volcanic soils produce some of the best quality
                  coffee in the world, perfect for coffee enthusiasts. Whether
                  you’re an adventurous wanderer or a more chilled-out traveler,
                  Antigua has it all, boasting colorful Baroque architecture,
                  tasty cuisine, cobbled streets to explore, opportunities to
                  refine your Spanish skills at a language school and vibrant
                  nightlife.
                </p>
                <div className=" pb-[48px] max-lg:pb-[35px] flex justify-center ">
                  <button
                    type="submit"
                    className=" text-[#F7F7F7] text-[32px] font-extrabold bg-[#FC5B67] px-[32px] py-[16px] rounded-[46px] flex justify-center items-center max-sm:text-[22px] max-sm:px-[25px] max-sm:py-[11px] hover:bg-transparent hover:border-[#FC5B67] hover:border-[2px] hover:duration-300 "
                  >
                    BOOK YOUR CALL
                  </button>
                </div>
              </div>
              <div>
                <div className=" flex gap-[19px] flex-col ">
                  {Includecards.map((item, index) => (
                    <div
                      key={index}
                      className=" max-w-[417px] w-full pr-2 rounded-[57px] gap-[10px] max-h-[56px] h-full flex bg-[#F4F1E6] "
                    >
                      <div>
                        <Image
                          className=" max-w-[58px] rounded-full w-full h-[56px] "
                          src={item.img}
                          width={55}
                          height={56}
                          alt="include-img1.png"
                        />
                      </div>
                      <div className=" flex flex-col justify-center ">
                        <p className=" text-[16px] font-bold leading-normal font-Montserrat text-[#313131] max-sm:text-[13px] ">
                          {" "}
                          {item.text1}{" "}
                        </p>
                        <p className=" text-[13px] max-sm:text-[11px] font-normal leading-normal font-Montserrat text-[#313131] max-w-[340px] w-full ">
                          {" "}
                          {item.text2}{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MeetMariela />
      </div>
    </>
  );
};

export default Included;
