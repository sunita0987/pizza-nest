import React from "react";
import { Pizzas } from "../utils/helper";
console.log(Pizzas);
const Sellers = () => {
  return (
    <section className="py-16 px-4 bg-[#F8F8F880] opacity-100 text-center">
      <p className="text-[#EC6112] text-sm font-bold">Best Sellers</p>
      <h2 className="text-5xl font-normal text-[#000000] mt-2">
        Pizzas You Can't Say No To
      </h2>
      <p className="text-[#373737] mt-5 mb-10 max-w-xl mx-auto">
        Tried, tested, and totally loved. These pizzas are always a crowd
        favorite.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Pizzas.map((pizza, index) => (
          <div
            key={index}
            className="bg-[#ffffff] rounded-xl  border-1 border-[#0000000F] shadow-md p-6 text-center flex flex-col items-center"
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-30 h-30  rounded-full mb-4 object-cover"
            />
            <p className="text-[#EC6112] text-3xl font-Nunito">{pizza.price}</p>
            <h3 className="text-lg font-normal text-[#010101] mt-2">
              {pizza.name}
            </h3>
            <p className="text-sm text-[#5C5C5C] mt-1 mb-4">
              {pizza.description}
            </p>
             <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] px-6 py-2 rounded-xl transition cursor-pointer">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Sellers;
