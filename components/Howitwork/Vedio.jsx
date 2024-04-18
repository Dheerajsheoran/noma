import React from "react";
import Image from 'next/image';

const Vedio = () => {
  return (
    <>
      <div className=" px-[12px] ">
        
        <Image className="my-[32px]" src="/img/vedio.png" width={1120} height={660} alt='img' />
        
        <p className=" max-w-[698px] w-full mx-auto text-[#313131] text-center font-Montserrat text-[14px] font-normal mt-[16px] mb-[32px] ">
          Something here about key community values and the vetting process
          (dont use this terinology) t make sure our community is super open
          minded and compassionate and here for the same thing basically. Not
          sure if we have some kind of charter for how we like to do this but
          maybe we make one
        </p>
      </div>
    </>
  );
};

export default Vedio;
