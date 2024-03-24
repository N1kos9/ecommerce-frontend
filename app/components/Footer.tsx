import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className=" text-center flex justify-center items-cente mt-20">
        <div className="section-9 text-center flex justify-center items-center"></div>
      </div>

      <footer className="w-3/4 flex justify-center items-center mx-auto rounded-t-3xl h-[20rem] text-white bg-gradientBackground">
        <div className=" flex gap-8 text-center uppercase text-2xl px-3 py-1 items-center rounded-lg cursor-pointer flex-col">
          <Link href="/">
            <h1 className="lg:text-[2rem] text-[1.5em] leading-tight">
              The beginners fast <br /> track to wealth
            </h1>
          </Link>
          <p className="lg:w-2/3 w-5/6 opacity-50 lg:text-[0.8rem] text-[0.7rem]">
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className="opacity-50 lg:text-[0.8rem] text-[0.7rem] italic">
            ©2024 - . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
