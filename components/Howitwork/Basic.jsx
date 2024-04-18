import Image from "next/image";
import React from "react";

const Basic = ({ path, }) => {
  return (
    <>
      <div>
        <div className="sm:pt-[28px] sm:px-4 lg:px-0">
        <div className="max-w-[358px] w-full  ">
          <div className="flex justify-center">
            <Image
              src={path.image}
              alt="women-img"
              width={358}
              height={412}
              className="rounded-[10px]"
            />
          </div>
          <p className="text-center pt-4 text-[32px] font-Montserrat font-extrabold leading-normal">
            {path.basic}
          </p>
        </div>
      </div>
      </div>
      
    </>
     

  );
};

export default Basic;
