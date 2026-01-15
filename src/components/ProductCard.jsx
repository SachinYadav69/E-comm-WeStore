import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer border-b border-r border-white/10 p-4 transition-all duration-300 bg-black">
      {/* Product Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#0a0a0a]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          onClick={() => navigate(`/products/${product.id}`)}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-white text-[10px] uppercase tracking-[0.15em] font-bold truncate">
            {product.title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-white/30 text-[9px] uppercase tracking-widest">
              {product.category}
            </p>
            <span className="text-white text-[11px] font-medium tracking-tighter">
              ${product.price}
            </span>
          </div>
        </div>

        {/*  Quick Add Button  */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#e11d48] text-white text-[9px] font-bold uppercase tracking-[0.2em] py-3 hover:bg-white hover:text-black transition-all duration-300"
        >
          Quick Add +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
