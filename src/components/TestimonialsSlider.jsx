import React from "react";
import { TEST_DATA } from "../utils/helper";
console.log(TEST_DATA);

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h3 className="text-orange-500 font-semibold mb-2">Testimonial</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {TEST_DATA.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img
                src={t.pizza}
                alt="Food"
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-[#ffffff] shadow-lg rounded-xl p-6 max-w-xl text-left relative">
                  <p className="text-[#545454] text-regular">{t.text}</p>
                   <h4 className="font-normal text-lg mt-5">{t.name}</h4>
                <p className="text-sm text-gray-500 ">{t.role}</p>
                <span className="text-5xl text-orange-100 absolute bottom-4 right-4">
                  “
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-10">
        <button className="prev-btn p-3 bg-gray-200 rounded hover:bg-gray-300">
          <FaArrowLeft />
        </button>
        <button className="next-btn p-3 bg-orange-500 text-white rounded hover:bg-orange-600">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
