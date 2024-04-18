import Image from "next/image";
import React from "react";

const Sectionthree = ({ youblog }) => {
  return (
    <>
      <div className="px-[12px] ">
        <Image src={youblog.album} width={1120} height={800} alt="img" />

        <div>
          <p className=" pt-[32px] pb-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] max-w-[992px] w-full mx-auto ">
            {youblog.para}
          </p>

          <p className=" pb-[18px] pt-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] max-w-[992px] w-full mx-auto ">
            {" "}
            {youblog.paratwo}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Sectionthree;
