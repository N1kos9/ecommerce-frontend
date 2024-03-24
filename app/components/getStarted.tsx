import React from "react";
import Link from "next/link";
const getStarted = () => {
  return (
    <>
      <div className=" text-center flex justify-center items-cente mt-20">
        <div className="section-8 text-center flex justify-center items-center"></div>
      </div>

      <div className="mt-10">
        <h1 className="text-[3rem] text-center uppercase text-green-700">
          ready to make money?
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-20 text-white">
          <div className=" h-[15rem] w-[25rem] text-[#0d2503] shadow-glowingSmallBox rounded-xl border border-white/[0.3]"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-[2rem] uppercase text-green-700">
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
      </div>
      <div className=" text-center flex justify-center items-cente mt-20">
        <div className="section-8 text-center flex justify-center items-center"></div>
      </div>
    </>
  );
};

export default getStarted;
