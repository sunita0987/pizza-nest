import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-[#EC6112] text-2xl font-Medium">Pizza Nest</div>
        <div className="hidden md:flex space-x-6 text-[#787878] items-center">
          <Link to="/" className="text-[#EC6112] underline">
            Home
          </Link>
          <Link to="/menu" className=" hover:text-[#EC6112] hover:underline">
            Menu
          </Link>
          <Link
            to="/customize"
            className=" hover:text-[#EC6112] hover:underline"
          >
            Customize Pizza
          </Link>
          <Link to="/offers" className=" hover:text-[#EC6112] hover:underline">
            Offers
          </Link>
          <Link to="/about " className=" hover:text-[#EC6112] hover:underline">
            About Us
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] px-5 py-2 rounded-lg font-bold shadow"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-[#EC6112]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#ffffff] px-4 pt-2 pb-4 space-y-2 text-[#787878]">
          <Link to="/" className="block text-[#EC6112] underline">
            Home
          </Link>
          <Link to="/menu" className="block ">
            Menu
          </Link>
          <Link to="/customize" className="block">
            Customize Pizza
          </Link>
          <Link to="/offers" className="block">
            Offers
          </Link>
          <Link to="/about" className="block">
            About Us
          </Link>
          <Link
            to="/contact"
            className="block bg-gradient-to-r from-[#EC6112] to-[#FF902E] text-[#ffffff] text-center px-4 py-2 rounded-lg mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
