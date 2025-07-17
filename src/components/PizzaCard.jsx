import React from "react";
const PizzaCard = ({ name, price, image }) => {
  return (
    <div className=" bg-[#000000] text-[#ffffff] rounded-lg shadow-lg p-5  w-full sm:w-[45%] md:w-[40%] lg:w-[40%]">
      <div className="relative">
        <img src={image} alt={name} className="rounded-lg w-full" />
        <div className="absolute top-2 right-2  text-[#ffffff] px-3 py-1 border-4  rounded-xl text-sm font-semibold shadow">
          Only ₹ {price}
        </div>
      </div>
      <p className="text-orange-400 text-sm mb-1">Delicious</p>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-300 mb-4">Limited Time</p>
      <button className="  bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] text-center px-4 py-2 rounded-lg mt-4  cursor-pointer">
        Order Now
      </button>
    </div>
  );
};
export default PizzaCard;
