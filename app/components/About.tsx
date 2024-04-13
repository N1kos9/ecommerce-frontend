import React from "react";
import Image from "next/image";
import cover1 from "@/public/firstCover.jpg";
const About = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        {/* <div className="uppercase text-green-700 text-center mt-32 text-[1.5rem] italic">
          <h1>Here&apos;s what you will get...</h1>
        </div> */}
        <h1 className="md:text-[1.5rem] tracking-wider uppercase text-[1.2rem] text-center text-white mt-12 italic">
          Here&apos;s what you will get
        </h1>
        <div className="mt-8 lg:h-bigBox h-[20rem] lg:w-1/4 flex items-center justify-center w-5/6 text-[#0d2503] shadow-glowingBox rounded-xl border border-white/[0.3]">
          <Image
            src={cover1}
            alt=""
            width={400}
            height={300}
            className="rounded-xl w-full h-full border border-white/[0.4]"
          />
        </div>
        <div className="mt-12 text-center items-center justify-center flex flex-col">
          <p className="text-white text-center mt-16 opacity-50 lg:w-1/2 w-5/6 text-[1.5rem] text-balance">
            Introducing
            <span className="nume">
              &quot;The Beginner&apos;s Fast Track To Wealth&quot;
            </span>
            , It&apos;s the ultimate guide for folks from any background to
            start making $10,000+ every month. Packed with easy-to-follow
            methods, this course has everything you need to fast track your
            journey to financial success.
          </p>
          <br />
          <p className="text-white text-center mt-16 opacity-50 lg:w-1/2 w-5/6 text-[1.5rem] text-balance">
            No fancy jargon, just simple strategies that work for beginners with
            any budget. Whether you&apos;re starting small or have some cash to
            spare, this course will help you grow your income fast.
          </p>
          <br />
          <p className="text-white text-center mt-16 opacity-50 lg:w-1/2 w-5/6 text-[1.5rem] text-balance">
            Ready to make some serious money? Well then, what are you waiting
            for? Start your journey to financial success today.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
