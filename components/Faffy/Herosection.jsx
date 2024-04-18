import React from "react";

const Herosection = () => {
  return (
    <div>
      <div className=" bg-[url(/img/Faffy-hero-img.png)] bg-no-repeat bg-center bg-cover ">
        <p className="  font-sergio-trendy max-w-[1112px] w-full mx-auto text-center text-stone-50 text-[48px] max-sm:text-[26px] font-normal capitalize pt-[195px] pb-[32px] ">
          Faffy Name For Blog
        </p>
        <div className=" max-w-[165px] w-full mx-auto pb-[105px]">
          <div className=" group max-w-[162px] w-full mx-auto px-8 py-4 bg-[#F4F1E6] hover:duration-300  group-hover:border-[#F4F1E6] hover:bg-transparent border rounded-[28px] justify-center items-center gap-2.5 inline-flex">
            <button className="text-center group-hover:text-white text-black group-hover:border-[#F4F1E6] hover:bg-transparent text-[16px] font-extrabold font-['Montserrat']">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="px-[12px]">
        <p className=" max-w-[814px] w-full mx-auto text-[#313131] text-[48px] capitalize font-normal font-sergio-trendy max-md:text-[25px] mt-[10px] text-center leading-normal ">
          El Dia de los Muertos A Celebration of Life
        </p>
        <p className=" max-w-[992px] w-full mx-auto font-Montserrat font-extrabold text-center text-[16px] text-[#313131] mt-[30px]  max-sm:text-[12px] ">
          Día de los Muertos is a celebration full of joy, where families come
          together to cook delicious food, decorate their houses with flowers
          and gather to honor the cycle of life.
        </p>
        <div className=" flex gap-[10px] max-w-[732px] w-full mx-auto mt-[24px] mb-[33px] flex-wrap max-md:justify-center ">
          <p className=" text-[#ADADAD] font-normal font-Montserrat text-[16px] ">
            <span className=" text-[#ADADAD] font-bold font-Montserrat text-[16px] ">
              Created by
            </span>{" "}
            Franki Lannaccone
          </p>
          <p className=" text-[#ADADAD] font-normal font-Montserrat text-[16px] ">
            <span className=" text-[#ADADAD] font-bold font-Montserrat text-[16px] ">
              Posted on
            </span>{" "}
            December 2023
          </p>
          <p className=" text-[#ADADAD] font-normal font-Montserrat text-[16px] ">
            <span className=" text-[#ADADAD] font-bold font-Montserrat text-[16px] ">
              Stimated read time
            </span>{" "}
            8 minutes{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
