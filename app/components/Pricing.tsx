import React from "react";

const Pricing = () => {
  return (
    <div className="text-center flex mt-20 justify-center flex-col gap-2 items-center">
      <div className="section-6"></div>
      <div className="text-white p-4">
        <h1 className="text-[2rem] line-through leading-tight opacity-50">
          From $50
        </h1>
        <div className="relative">
          <div className="relative">
            <h1 className="text-center capitalize text-transparent bg-gradient-to-b bg-clip-text from-gray-300 via-white to-gray-900 font-semibold text-[4em] leading-none">
              $29.99
            </h1>
          </div>
          <span className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0"></span>
        </div>
      </div>
      <div className="section-6"></div>
    </div>
  );
};

export default Pricing;
