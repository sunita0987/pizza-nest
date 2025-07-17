import React from "react";
import { GALLERY_IMG } from "../utils/helper";

const PizzaGallery = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-3 mt-[77px] text-center">
      <h3 className="text-[#EC6112] font-semibold mb-2">Our Gallery</h3>
      <h2 className="text-3xl md:text-4xl font-normal text-center ml-100 w-[400px] mb-10">
        A Glimpse Into Our Pizza World
      </h2>
      <div className="max-w-[1140px] px-3 mx-auto">
        <div className="grid lg:grid-cols-5 gap-6">
          {GALLERY_IMG.map((item, index) => (
            <div
              className={`w-full h-[250px] overflow-hidden rounded-xl ${item.colSpan}${item.rowSpan}`}
            >
              <img
                key={index}
                src={item.image}
                alt="img"
                className="w-full  object-cover h-full"
              />
            </div>
          ))}
        </div>
        <button className="mt-10 bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#fffff] font-semibold px-6 py-2  mb-10 rounded-full transition cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default PizzaGallery;
