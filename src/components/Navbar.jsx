import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "../assets/Logo.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItem } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 mt-5">
      {/* Background White */}
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[40px] shadow-lg shadow-black/[0.03]">
        {/* 3 Grid Layout */}
        <div className="px-10 py-4 grid grid-cols-3 items-center">
          {/* LEFT Navbar */}
          <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group py-1 transition-colors duration-300 hover:text-black"
              >
                {item}
                {/* Black Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CENTER LOGO - Natural colors */}
          <div className="flex justify-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-lg font-light tracking-[0.3em] text-black uppercase">
                We<span className="font-bold">Store</span>
              </span>
            </Link>
          </div>

          {/* RIGHT Navbar */}
          <div className="flex justify-end items-center gap-8 text-gray-600">
            <button className="hover:text-black transition-transform duration-300 hover:scale-110">
              <FiSearch size={18} strokeWidth={2.5} />
            </button>

            <Link
              to="/cart"
              className="relative hover:text-black transition-transform duration-300 hover:scale-110"
            >
              <FiShoppingCart size={18} strokeWidth={2.5} />
              {/* Black Badge with White Text for pop */}
              <span className="absolute -top-2 -right-3 bg-black text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartItem.length}
              </span>
            </Link>

            <Link
              to="/profile"
              className="hover:text-black transition-transform duration-300 hover:scale-110"
            >
              <FiUser size={19} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
