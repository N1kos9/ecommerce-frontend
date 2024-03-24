import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="text-white text-center flex flex-col items-center ">
      <h1 className="lg:text-[4rem] text-[1.9rem] leading-tight mt-10 lg:mt-4">
        From 0 To $10,000+/Month <br /> Without Any Experience
      </h1>
      <p className="lg:text-[1rem] text-[0.9rem] mt-6 text-balance lg:w-1/3 w-full text-center opacity-60">
        Inside of Agency Navigator you get the proven step-by-step plan to start
        your own dropservicing agency from scratch, even if you have no previous
        experience
      </p>

      <div className="lg:mt-6 mt-10 lg:h-bigBox lg:w-1/2 w-5/6 h-[20rem] text-[#0d2503] shadow-glowingBox rounded-xl border border-white/[0.3]"></div>
      <div className="mt-6">
        <div className="w-full">
          <Link href="#pricing">
            <button className="text-white bg-[#0d2503] p-3 bg-gradient-custom lg:px-32 w-full lg:mt-0 mt-8 rounded-xl border border-white/[0.3] uppercase text-small-bold">
              Buy now
            </button>
          </Link>
          <p className="text-[12px] opacity-50 italic">
            You&apos;ll get redirected our buy page to complete the checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
