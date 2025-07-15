import React from "react";

const PizzaCard = ({ name, price, image }) => {
  return (
    <div className=" bg-black text-white rounded-lg shadow-lg p-4 w-full sm:w-[45%] md:w-[40%] lg:w-[30%]">
      <p className="text-orange-400 text-sm mb-1">Delicious</p>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-300 mb-4">Limited Time</p>
      <div className="relative">
        <img src={image} alt={name} className="rounded-lg w-full" />
        <div className="absolute top-2 right-2  text-[#ffffff] px-3 py-1 rounded-xl text-sm font-semibold shadow">
          Only ₹ {price}
        </div>
      </div>
      <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded cursor-pointer">
        Order Now
      </button>
    </div>
  );
};
export default PizzaCard;
