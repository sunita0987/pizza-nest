import React from "react";
import pizzaImage from "../assets/images/pizza.png";
import bgImage from "../assets/images/herosecton.png";
const HeroSection = () => {
  return (
    <section
      className="relative bg-cover  bg-no-repeat rounded-4xl text-[#ffffff] w-full h-150"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center ">
        <div>
          <h1 className="text-xl md:text-5xl font-semibold leading-tight w-[500px] text-[#ffffff]">
            Where Every Slice Feels Like Home
          </h1>
          <p className="mt-4 text-md text-[#EFEFEF] max-w-xl">
            At Pizza Nest, we bake more than pizza — we bake comfort. Customize
            your perfect slice, or choose from our signature favorites
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] px-6 py-2 rounded-xl  cursor-pointer transition">
              Order Now
            </button>
            <button className="border border-[#ffffff]  text-[#fffffff] px-6 py-2 rounded-md cursor-pointer transition hover:bg-[#ffffff] hover:text-[#FE902E]">
              View Full Menu
            </button>
          </div>
          <div className="mt-10 flex gap-10 text-center">
            <div>
              <h2 className="text-2xl font-semibold">5,000+</h2>
              <p className="text-sm text-[#E1E1E1]"> Pizzas Delivered</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">98%</h2>
              <p className="text-sm text-[#E1E1E1]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img src={pizzaImage} alt="Pizza" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
