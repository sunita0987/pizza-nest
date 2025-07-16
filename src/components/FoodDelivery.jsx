import React from "react";
import deliveryImg from "../assets/images/fast.png";

const DeliveryBanner = () => {
  return (
    <div className="bg-[#F8F8F880] opacity-80 py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-[#EC6112] font-semibold">Food Delivery</p>
        <h1 className="text-3xl md:text-5xl font-normal text-[#010101] w-[500px] leading-tight">
          Fast, Fresh & Always On Time
        </h1>
        <p className="text-[#373737]">
          We deliver your favorite pizzas piping hot, just the way you love them
          — anywhere in town. From cheese-loaded bites to spicy paneer delights,
          your cravings are just a click away.
        </p>
        <ul className="text-left text-gray-700 space-y-2 text-sm md:text-base">
          <li>✔️ 30-Minute Delivery Promise</li>
          <li>✔️ Hygienic, Contactless Delivery</li>
          <li>✔️ Real-time Order Tracking</li>
          <li>✔️ Eco-Friendly Packaging</li>
        </ul>
        <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-white px-6 py-2 rounded-xl cursor-pointer mt-4]">
          Order Now
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={deliveryImg}
          alt="Delivery scooter"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default DeliveryBanner;
