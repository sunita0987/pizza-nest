import React from "react";
import pizzaImage from "../assets/images/pizza.png";
import bgImage from "../assets/images/herosecton.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center text-[#ffffff] w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-Nunito leading-tight">
            Where Every Slice <br /> Feels Like Home
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#EFEFEF] max-w-lg">
            At Pizza Nest, we bake more than pizza — we bake comfort. Customize
            your perfect slice, or choose from our signature favorites.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] px-6 py-2 rounded-xl transition cursor-pointer">
              Order Now
            </button>
            <button className="border border-[#ffffff] text-[#ffffff] px-6 py-2 rounded-md transition cursor-pointer hover:bg-[#ffffff] hover:text-[#FE902E]">
              View Full Menu
            </button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 text-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">5,000+</h2>
              <p className="text-sm text-[#E1E1E1]">Pizzas Delivered</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">98%</h2>
              <p className="text-sm text-[#E1E1E1]">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={pizzaImage}
            alt="Pizza"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
