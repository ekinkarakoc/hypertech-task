import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ cartCount }) => {
  return (
    <div className="w-full h-20 bg-gray-300 flex items-center justify-between px-10 sticky top-0 z-10">
      <img
        className="dark-logo w-40 h-15"
        src="https://cdnhyper.s3.eu-central-1.amazonaws.com/hyper%20teknoloji%20logo%201_1685708957_1689886515.webp"
        alt="Hyper v2"
      />
      <div className="flex gap-10 relative">
        <div className="relative">
          <FaShoppingBasket size={30} color="#455a64" />
          {/* {cartCount > 0 && ( */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
          {/* )} */}
        </div>
        <CgProfile size={30} color="#455a64" />
      </div>
    </div>
  );
};

export default Navbar;
