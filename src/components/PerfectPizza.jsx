import React from 'react';
import { FaPizzaSlice, FaRegClipboard, FaMapMarkerAlt } from 'react-icons/fa';
// import {Pizza, Order, Enjoy } from "../utils/Icon"
const steps = [
  {
    icon: <FaPizzaSlice size={32} className="text-orange-500" />,
    title: 'Choose Your Pizza',
    desc: 'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
  },
  {
    icon: <FaRegClipboard size={32} className="text-orange-500" />,
    title: 'Place Your Order',
    desc: 'Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.',
  },
  {
    icon: <FaMapMarkerAlt size={32} className="text-orange-500" />,
    title: 'Track & Enjoy',
    desc: 'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',
  },
];

const PizzaSteps = () => {
  return (
    <section className="py-12 px-6 text-center bg-white">
      <p className="text-orange-500 font-semibold mb-2">How It Works</p>
      <h2 className="text-3xl md:text-4xl font-normal  w-100 ml-100 mb-10 text-[#000000]">
        Your Perfect Pizza in Just  3 Easy Steps!
      </h2>
      <div className="grid gap-10 md:grid-cols-3 items-start max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="space-y-4 px-4 relative">
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
            <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffff] text-sm font-medium px-5 py-2 rounded-xl cursor-pointer">
              View Menu
            </button>
            {idx < 2 && (
              <div className="hidden items-center md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-orange-300">
                  ➜
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PizzaSteps;
