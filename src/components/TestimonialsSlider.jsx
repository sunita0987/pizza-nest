import React from "react";
// import { TEST_DATA } from "../utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const TEST_DATA = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again. ",
    pizza: slice1,
  },
  {
    name: "Jiya Sharma",
    role: "UI/UX Designer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice2,
  },
  {
    name: "Rahul Sharma",
    role: "front-end developer",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice2,
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h3 className="text-orange-500 font-semibold mb-2">Testimonial</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        What Our Customers Say
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation={true}
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
              <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl text-left relative">
                <p className="text-[#545454]">{t.text}</p>
                <h4 className="font-normal text-lg mt-5">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
                <span className="text-5xl text-orange-100 absolute bottom-4 right-4">
                  “
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestimonialsSlider;
