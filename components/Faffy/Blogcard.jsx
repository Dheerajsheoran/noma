import Image from "next/image";
import React from "react";

const Blogcard = ({ blogs }) => {
  return (
    <>
      <div>
        <div className="max-w-[328px] w-full py-4">
          <button
            className={`max-w-[169px] w-full mb-[8px]  rounded-[31px] shadow text-center text-zinc-800 text-sm font-normal font-Montserrat py-2 px-[7px]  `}
            style={{ backgroundColor: `${blogs.bgcolor}` }}
          >
            {blogs.remote}
          </button>
          <div className="max-w-[328px] h-[328px]">
            <div className="max-w-[328px] h-[328px] left-0 top-0 absolute bg-zinc-300 rounded-lg" />
            <Image
              src={blogs.visit}
              width={328}
              height={412}
              className="rounded-lg"
              alt="img"
            />
          </div>
          <p className="max-w-[328px] text-zinc-800 text-2xl font-extrabold font-Montserrat">
            {blogs.desti}
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
