import React from "react";
import Spicy from "../assets/images/bannercta.png";

const PizzaBanner = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center text-white min-h-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${Spicy})`,
      }}
    >
      <div className="p-6 sm:p-8 text-center max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal mb-4 leading-snug">
          Craving something cheesy, spicy, <br className="hidden sm:block" /> or
          just straight-up delicious?
        </h1>
        <p className="text-sm sm:text-base text-[#E8E8E8] mb-6 px-4 sm:px-0 w-[450px] ml-30">
          Your next favorite pizza is waiting. Freshly baked, flavor-packed, and
          delivered hot to your door — every single time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] font-Nunito px-7 py-4   cursor-pointer rounded-xl transition">
            Order Now
          </button>
          <button className="border border-[#ffffff] text-[#ffffff] px-6 py-3 rounded-2xl  cursor-pointer transition hover:bg-[#ffffff] hover:text-[#FE902E]">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PizzaBanner;
