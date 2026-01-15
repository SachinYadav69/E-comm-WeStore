import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, setCartItem } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItem.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (index) => {
    const updatedCart = cartItem.filter((_, i) => i !== index);
    setCartItem(updatedCart);
  };

  if (cartItem.length === 0) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <h2 className="text-white text-[10px] uppercase tracking-[0.8em] opacity-30 mb-8">
          Cart is Empty
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="border border-white/20 text-white px-8 py-3 text-[9px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-28 px-6 md:px-16 lg:px-24 pb-20">
      <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-4">
        <h1 className="text-white text-2xl uppercase tracking-tighter font-light">
          Cart <span className="text-white/20">({cartItem.length})</span>
        </h1>
        <button
          onClick={() => navigate("/products")}
          className="text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all"
        >
          Keep Browsing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: Compact Items List (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-white/10 pb-4 mb-0 px-2">
            <span className="col-span-6 text-[8px] uppercase tracking-[0.4em] text-white/20">
              Product Details
            </span>
            <span className="col-span-3 text-[8px] uppercase tracking-[0.4em] text-white/20 text-center">
              Price
            </span>
            <span className="col-span-3 text-[8px] uppercase tracking-[0.4em] text-white/20 text-right">
              Action
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 py-4 px-2 items-center hover:bg-white/[0.02] transition-all group"
              >
                {/* Image & Title - Compact */}
                <div className="col-span-9 md:col-span-6 flex items-center gap-4">
                  <div className="w-16 h-20 bg-[#0a0a0a] border border-white/5 flex-shrink-0 p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="truncate">
                    <h3 className="text-white text-[10px] uppercase tracking-[0.1em] font-bold truncate pr-4">
                      {item.title}
                    </h3>
                    <p className="text-white/30 text-[8px] uppercase tracking-widest mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="hidden md:block col-span-3 text-center">
                  <span className="text-white text-[11px] font-light tracking-tighter">
                    ${item.price}
                  </span>
                </div>

                {/* Remove - Compact */}
                <div className="col-span-3 md:col-span-3 text-right">
                  <button
                    onClick={() => removeItem(index)}
                    className="text-[8px] uppercase tracking-widest text-red-600 hover:text-white transition-all border border-red-600/20 px-3 py-1 hover:border-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Compact Summary (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="bg-[#080808] border border-white/10 p-8 sticky top-32">
            <h2 className="text-white text-[9px] uppercase tracking-[0.5em] font-bold mb-8">
              Summary
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40 font-medium">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40">
                <span>Est. Shipping</span>
                <span className="text-white/60">Free</span>
              </div>
              <div className="h-[1px] bg-white/10 w-full"></div>
              <div className="flex justify-between text-white text-xl font-light tracking-tighter">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-[#e11d48] text-white py-4 text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
