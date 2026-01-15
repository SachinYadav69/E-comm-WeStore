import React from "react";
import { Link } from "react-router-dom";

const ShopNow = ({ text = "Shop Now", to = "/products", className = "" }) => {
  return (
    <div className="w-full flex justify-center items-center py-4 mt-10">
      <Link
        to={to}
        className={`group relative overflow-hidden px-14 py-5 bg-[#e11d48] transition-all duration-500 ease-in-out border border-transparent inline-block ${className}`}
      >
        {/* Hover Effect */}
        <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

        {/* Text */}
        <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold text-white transition-colors duration-500 group-hover:text-black whitespace-nowrap">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default ShopNow;
