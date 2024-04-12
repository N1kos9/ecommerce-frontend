import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/public/logo1.jpg";
import logo3 from "@/public/logo3.jpg";
import cover from "@/public/Untitled.png";
import realCover from "@/public/realCover.png";
import masteryPack from "@/public/masterypack.jpg";
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
              src={logo1}
              alt=""
              width={250}
              height={300}
              className="rounded-xl w-full h-full border border-white/[0.4]"
            />
          </div>
          <div className="flex flex-col justify-start text-left lg:items-center items-center">
            <h1 className="lg:text-center text-bold text-center lg:text-[2rem] text-[1.7rem] uppercase  text-green-300">
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
        <div className="flex items-start justify-start text-left w-full">
          <div className="relative flex py-5 items-center w-full mt-12">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 uppercase lg:text-[2rem] text-[1.4rem]">
              buy the ebook and get
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-20 text-white">
          <div className=" text-[#0d2503] shadow-glowingSmallBox rounded-xl">
            <Image
              src={masteryPack}
              alt=""
              width={250}
              height={300}
              className="rounded-xl w-full h-full border border-white/[0.4]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="lg:text-center font-bold text-center lg:text-[2rem] text-[1.7rem] uppercase  text-green-300">
              free ai collection pack <br /> (buy one get one for free)
            </h1>
            <div className="lg:w-1/2 w-5/6 bg-bg-gradient-custom border-green-500/[0.2] text-bold mt-8 text-[1.3rem] border-8  rounded-md uppercase p-4 text-center">
              <p className="font-bold">
                buy the beginners fast track to wealth to unlock this pack
              </p>
            </div>
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
