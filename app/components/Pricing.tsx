import React from "react";

const Pricing = () => {
  return (
    <div className="text-center flex mt-20 justify-center flex-col gap-2 items-center">
      <div className="section-6"></div>
      <div className="text-white p-4">
        <h1 className="text-[2rem] line-through leading-tight opacity-50">
          From $50
        </h1>
        <h1 className="text-[4rem] leading-tight">To $29.99</h1>
      </div>
      <div className="section-6"></div>
    </div>
  );
};

export default Pricing;
