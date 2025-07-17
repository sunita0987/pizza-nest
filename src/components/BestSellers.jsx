import React from "react";
import pizza1 from "../assets/images/largepizza.png";
import banner from "../assets/images/banner.png";

const BestSellers = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat  text-[#ffffff] min-h-full"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className=" text-[#ffffff] p-8 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg">
        <div className="space-y-4 md:w-1/2">
          <h3 className="text-[#EC6112] text-lg font-normal">
            Buy 1 Pizza, Get 1 Free!
          </h3>
          <h1 className="text-3xl md:text-5xl font-Nunito">
            Medium & Large pizzas
          </h1>
          <p className="text-[#EC6112] font-normal">Limited Offer</p>
          <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] cursor-pointer rounded-xl text-[#ffffff] px-6 py-2 transition duration-300">
            Order Now
          </button>
        </div>
        <div className="relative mt-6 md:mt-0 md:w-1/2 flex items-center justify-center">
          <img src={pizza1} alt="Pizza 1" className="w-100 z-10" />
        </div>
      </div>
    </section>
  );
};
export default BestSellers;
