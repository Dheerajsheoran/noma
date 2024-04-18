import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <>
      <div>
        <Image
          src="/img/how-hero.png"
          width={3000}
          height={800}
          alt="hero-img"
        />
      </div>
    </>
  );
};

export default Main;
