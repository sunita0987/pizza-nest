import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] py-10 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-Normal text-[#EC6112] mb-4">
            Pizza Nest
          </h2>
          <p className="text-[#575757] w-[550px] mb-4">
            At Pizza Nest, we believe every slice should bring joy. Whether
            you're ordering for one or feeding a crowd, our pizzas are baked
            with care, topped with love, and delivered hot to your doorstep. You
            just taste the difference.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#EC6112] p-2 rounded-full hover:bg-[#FF902E] "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#EC6112] p-2 rounded-full hover:bg-[#FF902E] "
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#EC6112] p-2 rounded-full hover:bg-[#FF902E] "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[#010101] mb-3 ml-60">
            Quick Links
          </h3>
          <ul className="text-[#575757] space-y-2 ml-60">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#010101] mb-3 ml-40">Support</h3>
          <ul className="text-[#575757] space-y-2 ml-40">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-4 border-[#D1D1D166] mt-10 pt-4 text-center text-[#575757] text-sm">
        Copyright Pizza Nest © 2025, All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
