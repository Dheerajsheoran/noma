import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Bring from "@/components/Home/Bring";
import { startWork } from "@/components/common/Helper";
import Step from "@/components/Home/Step";
import Offerd from "@/components/Home/Offerd";
import News from "@/components/Home/News";
import Featured from "@/components/Home/Featured";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ para }) {
  return (
    <>
      <Navbar />
      <Hero img="/img/Rectangle 29.png" />
      <Bring Heading2="Your Heading Text Here" />
      <div className="bg-[#FFDA7F] pt-4">
        <div className="flex flex-wrap max-lg:justify-center justify-between max-w-[1035px] w-full mx-auto">
          {startWork.map((items, index) => (
            <Step card={items} key={index} />
          ))}
        </div>
      </div>
      <Featured />
      <Offerd />
      <News />
  
    </>
  );
}
