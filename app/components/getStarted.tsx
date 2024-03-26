import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/public/logo1.jpg";
import logo3 from "@/public/logo3.jpg";
import cover from "@/public/Untitled.png";
import realCover from "@/public/realCover.png";
const getStarted = () => {
  return (
    <>
      <div className=" text-center flex justify-center items-cente mt-20">
        <div className="section-8 text-center flex justify-center items-center"></div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <div>
          <h1 className="lg:text-[3rem] text-[1.7rem] font-bold  w-fit justify-center flex items-center text-center uppercase text-green-300">
            ready to make money?
          </h1>
          <div className="bg-black w-full h-1 border-b-2 border-green-700 blur-sm"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-20 text-white">
          <div className=" text-[#0d2503] shadow-glowingSmallBox rounded-xl">
            <Image
              src={realCover}
              alt=""
              width={250}
              height={300}
              className="rounded-xl w-full h-full border border-white/[0.4]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center lg:text-[2rem] text-[1.7rem] uppercase  text-green-300">
              The beginners fast track <br /> to wealth
            </h1>
            <Link
              href="#pricing"
              className="text-center p-1 mt-6 rounded-xl px-8 text-[1.3rem] border border-white/[0.3] w-fit flex items-center bg-gradient-custom justify-center uppercase"
            >
              buy now
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-20 text-white">
          <div className=" text-[#0d2503] shadow-glowingSmallBox rounded-xl">
            <Image
              src={cover}
              alt=""
              width={250}
              height={300}
              className="rounded-xl w-full h-full border border-white/[0.4]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center lg:text-[2rem] text-[1.7rem] uppercase  text-green-300">
              The beginners fast track <br /> to wealth
            </h1>
          </div>
        </div>
      </div>
      <div className=" text-center flex justify-center items-cente mt-20">
        <div className="section-8 text-center flex justify-center items-center"></div>
      </div>
    </>
  );
};

export default getStarted;
