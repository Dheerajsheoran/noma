import Image from "next/image";
import React from "react";

const Sectiontwo = ({ myblog }) => {
  return (
    <div>
      <div className="px-[12px]">
        <Image src={myblog.photo} width={1120} height={800} alt="img" />
        <p className=" max-w-[992px] w-full mx-auto text-[#313131] text-[24px] max-sm:text-[18px] font-extrabold font-Montserrat pt-[32px] pb-[6px] ">
          {myblog.topPara}
        </p>

        <ul className=" list-disc px-3 ">
          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {myblog.para}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.paratwo}{" "}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.parathree}{" "}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.parafour}{" "}
          </li>
          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.parafive}{" "}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.parasix}{" "}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.paraseven}{" "}
          </li>

          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.paraeight}{" "}
          </li>
          <li className="max-w-[992px] w-full mx-auto text-zinc-800 text-[16px] max-sm:text-[12px] font-normal font-['Montserrat'] py-[6px] ">
            {" "}
            {myblog.paranine}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sectiontwo;
