import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0); // Page load par top par le jane ke liye
  }, [id]);

  if (loading)
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-[1px] bg-white animate-pulse"></div>
      </div>
    );

  if (!product)
    return (
      <div className="text-white bg-black h-screen flex items-center justify-center uppercase tracking-[0.5em] text-[10px]">
        Product not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-6 md:px-16 lg:px-24 pb-20">
      {/* Top Bar Navigation */}
      <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-[9px] uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all flex items-center gap-2"
        >
          <span className="text-lg">←</span> Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-24">
        {/* LEFT: Image Section  */}
        <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center bg-[#0a0a0a] border border-white/5 p-16 md:p-24 h-[450px] md:h-[600px] relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain max-w-[300px] md:max-w-[380px] "
          />
          {/*  Corner Borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10"></div>
        </div>

        {/* RIGHT: Details Section */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col pt-4">
          <div className="mb-10">
            <span className="inline-block text-[9px] uppercase tracking-[0.5em] text-white/30 mb-6 border-l border-red-600 pl-4">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-tighter uppercase leading-[1.1] mb-4">
              {product.title}
            </h1>
            <p className="text-2xl font-light text-white/90 tracking-tight">
              ${product.price}
            </p>
          </div>

          <div className="space-y-12">
            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                Description
              </h4>
              <p className="text-white/50 text-[13px] leading-relaxed tracking-wide font-light max-w-md italic">
                {product.description}
              </p>
            </div>

            {/* Sizes  */}
            <div className="space-y-4">
              <h4 className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                Standard Selection
              </h4>
              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-[10px] text-white/40 hover:border-white hover:text-white cursor-pointer transition-all"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full bg-[#e11d48] text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-red-900/10">
                Purchase Piece
              </button>
              <button className="w-full border border-white/10 text-white/40 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white/5 hover:text-white transition-all">
                Add to Registry
              </button>
            </div>

            {/* Technical Specs */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div>
                <p className="text-[8px] uppercase tracking-widest text-white/20 mb-2">
                  Shipping
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">
                  Express Global
                </p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-white/20 mb-2">
                  Ref. Code
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">
                  WS-{id}2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
