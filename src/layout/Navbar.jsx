import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.card);
  return (
    <div className="w-full h-20 bg-gray-300 flex items-center justify-between px-10 sticky top-0 z-10">
      <Link to="/">
        <img
          className="dark-logo w-40 h-15"
          src="https://cdnhyper.s3.eu-central-1.amazonaws.com/hyper%20teknoloji%20logo%201_1685708957_1689886515.webp"
          alt="Hyper v2"
        />
      </Link>
      <div className="flex gap-10 relative">
        <Link to="my-products" className="relative">
          <FaShoppingBasket size={30} color="#455a64" />
          <span className="absolute -top-2.5 -right-3 bg-[#00bfa5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {quantity}
          </span>
        </Link>
        <CgProfile size={30} color="#455a64" />
      </div>
    </div>
  );
};

export default Navbar;
