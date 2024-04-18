import Image from "next/image";
import React from "react";

const Sectionone = ({ blog }) => {
  return (
    <>
      {}
      <div className="px-[12px]">
        <Image src={blog.pic} width={1120} height={800} alt="img" />
        <p className="max-w-[992px] w-full mx-auto pt-[32px] pb-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat']">
          {blog.para}
        </p>

        <p className="max-w-[992px] w-full mx-auto py-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat']">
          {" "}
          {blog.paratwo}{" "}
        </p>

        <p className="max-w-[992px] w-full mx-auto py-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat']">
          {" "}
          {blog.parathree}{" "}
        </p>

        <p className="max-w-[992px] w-full mx-auto pb-[32px] pt-[6px] text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat']">
          {" "}
          {blog.parafour}{" "}
        </p>
      </div>
    </>
  );
};

export default Sectionone;
