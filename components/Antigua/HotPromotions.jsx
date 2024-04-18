import Image from "next/image";
import React from "react";

const HotPromotions = () => {
  return (
    <div>
      <div className=" max-w-[1170px] w-full mx-auto ">
        <p className=" text-[#130017] text-[42px] font-semibold leading-[63px] ">
          Hot <span className=" text-[#253D4E] ">Promotions</span>
        </p>
        <div>
          <p className=" max-w-[170px] w-full text-[#253D4E] text-[32px] font-bold leading-[40px] ">
            Top <span className=" text-[#130017] ">Selling</span>
          </p>
          <div className=" bg-[#939393] max-w-[370px] w-full h-[1px] mt-[10px] "></div>
        </div>
        <div>
          <div className=" max-w-[110px] w-full h-[92px] border-[1px] border-[#939393] rounded-[8px] flex items-center justify-center ">
            <Image src="/img/Hotimg1.png" width={29} height={83} alt="bootle" />
          </div>
          <div>
            <p>Product name</p>
            <Image src="/img/starimg.png" width={120} height={36} alt="stars" />
            <p>Additional text</p>
            <p>$24.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotPromotions;
