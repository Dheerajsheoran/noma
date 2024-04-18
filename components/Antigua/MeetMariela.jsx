import Image from "next/image";
import React from "react";
import Highlights from "./Highlights";

const MeetMariela = () => {
  return (
    <>
      <div>
        <div className=" bg-[#F4F1E6] ">
          <div className=" max-w-[780px] w-full mx-auto px-3 py-2 ">
            <div className=" flex justify-between gap-[20px] flex-wrap max-sm:justify-center ">
              <div className=" flex flex-col items-center justify-center ">
                <p className=" text-[#313131] text-[32px] font-extrabold font-Montserrat pt-[24px] ">
                  Meet Mariela
                </p>
                <p
                  className=" font-Montserrat text-[16px] font-normal leading-normal text-[#313131] 
                  mb-[8px] mt-[4px] "
                >
                  Your local Community Manager
                </p>
                <Image src="/img/meet-img.png" width={249} height={247} alt="img" />
              </div>
              <div className=" max-w-[298px] w-full pt-[32px] ">
                <p className=" text-center font-Montserrat font-normal text-[16px] text-[#313131] mb-[15px] ">
                  Epa! I'm Mariela! The Community Manager in Antigua,
                  Guatemala. 
                </p>
                <p className=" text-center font-Montserrat font-normal text-[16px] text-[#313131] mb-[15px] ">
                  I am an adventurer who loves traveling and getting lost in
                  cool hidden places and exploring nature.
                </p>
                <p className=" text-center font-Montserrat font-normal text-[16px] text-[#313131] ">
                  I am a music lover which naturally makes me passionate about
                  dancing as well. I am from Antigua originally, so I absolutely
                  love showing people{" "}
                </p>
                <p className=" text-center font-Montserrat font-normal text-[16px] text-[#313131] ">
                  my home. Hit me up for local recommendations, I am always down
                  for a dance at the local salsa club. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Highlights />
      </div>
    </>
  );
};

export default MeetMariela;
