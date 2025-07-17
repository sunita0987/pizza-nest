import React from "react";
import { CRAVINGS_DATA } from "../utils/helper";
import { useState } from "react";

const Menupizza = [
  "All",
  "Veg Pizzas",
  "Non-Veg Pizzas",
  "Combos & Drinks",
  "Sides & Dips",
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <p className="text-[#EC6112] text-sm font-bold text-center">Our Menu</p>
      <h2 className="text-3xl font-normal text-center mb-6">
        Explore Flavours, Pick <br /> Your Cravings
      </h2>
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {Menupizza.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2  rounded-full border cursor-pointer ${
              activeTab === tab
                ? "bg-[#EC6112] text-[#ffffff]"
                : "text-[#C1C1C1] bg-[#ffffff]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {CRAVINGS_DATA[activeTab].map((item, idx) => (
          <div key={idx} className=" p-4 text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="bg-[#ffffff] p-6 rounded-xl shadow text-center border-1 border-[#00000014]">
              <p className="text-[#EC6112] text-xl font-bold mb-2">
                {item.price}
              </p>
              <p className="text-orange-500 mt-1 ">{item.price}</p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-[#5C5C5C] text-lg">{item.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
