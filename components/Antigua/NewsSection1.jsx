import React from "react";
import Platesection from "./Platesection";

const NewsSection1 = () => {
  return (
    <div>
      <div className=" bg-[#F4F1E6] px-3 ">
        <p className=" font-sergio-trendy text-[48px] text-black capitalize font-normal leading-normal text-center py-[32px]  max-sm:text-[26px] ">
          Antigua, Guatemala
        </p>
        <p className=" max-w-[758px] w-full mx-auto text-[#313131] font-Montserrat text-[16px] font-normal leading-normal flex items-center text-center pt-[8px] pb-[32px] max-sm:text-[12px] ">
          Really lean into how we plan everything and curate this amazing
          experience with them. Maybe something about trusted by 700+ alumni?
        </p>
      </div>
      <Platesection />
    </div>
  );
};

export default NewsSection1;
