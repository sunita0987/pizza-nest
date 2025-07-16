// src/components/PizzaBanner.jsx
import React from "react";

const PizzaBanner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-full flex items-center justify-center"
      style={{
        backgroundImage: `url('src/assets/images/bannercta.png')`,
      }}
    >
      <div className=" bg-opacity-60 p-8 rounded-lg text-center text-white min-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
          Craving something cheesy spicy, <br />
          or just straight-up delicious
        </h1>
        <p className="text-sm sm:text-base mb-6">
          Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition">
            Order Now
          </button>
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md font-semibold transition">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBanner;
