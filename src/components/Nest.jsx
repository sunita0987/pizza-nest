import React from "react";
import chefImage from "../assets/images/owner.png";
// import slice from "../assets/images/slice.png"
import { FaUserTie, FaStar, FaHeadset } from "react-icons/fa";
const Nest = () => {
  return (
    <section className="px-4 py-10 md:px-20 bg-gradient-to-r from-[#F8F8F8] to-[#FEFEFE]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <p className="text-[#EC6112]  font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl  mb-4 font-Nunito">
            Welcome to the <span className="text-[#EC6112]">Nest</span>
          </h2>
          <ul className="text-[#4D4D4D] space-y-4 mb-6 list-disc list-inside">
            <li>
              At PizzaNest, we believe that pizza is more than just food — it's
              an emotion, a celebration, and comfort all rolled into one
              delicious slice. Founded with a passion for real ingredients and
              big flavors, we set out to bring handcrafted, oven-fresh pizzas to
              every corner of India.
            </li>
            <li>
              Whether you're craving spicy paneer, a creamy cheese burst, or a
              fully loaded custom pizza made your way, we've got you covered.
              Each pizza is baked with love, topped with the freshest veggies,
              premium cheese, and authentic sauces — all delivered hot and fast,
              right to your doorstep.
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center p-4 border-dashed rounded-xl  border-3 border-orange-300 shadow hover:shadow-lg transition cursor-pointer">
              <FaUserTie className="text-[#EC6112] text-2xl mb-2" />
              <p className="font-medium text-[#474747] ">Professional Chefs</p>
            </div>
            <div className="flex flex-col items-center p-4 border-dashed rounded-xl border-3 border-orange-300 shadow hover:shadow-lg transition cursor-pointer">
              <FaStar className="text-[#EC6112] text-2xl mb-2" />
              <p className="font-medium text-[#474747]">Best Quality Food</p>
            </div>
            <div className="flex flex-col items-center p-4 b border-dashed rounded-xl border-3  border-orange-300 shadow hover:shadow-lg transition cursor-pointer">
              <FaHeadset className="text-[#EC6112] text-2xl mb-2" />
              <p className="font-medium text-[#474747]">Online Support</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={chefImage} alt="Chef" className="w-[350px]" />
          {/* <img src={slice} alt="slice"/> */}
        </div>
      </div>
    </section>
  );
};
export default Nest;
