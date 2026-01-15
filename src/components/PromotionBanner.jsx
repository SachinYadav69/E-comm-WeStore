import React from "react";

const PromotionBanner = () => {
  return (
    <div className="w-full mt-10 relative h-[450px] md:h-[550px] rounded-[40px] overflow-hidden group">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
        alt="Promotion"
        className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110"
      />

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
        <div className="max-w-md">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-4 block font-bold">
            Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white tracking-tight mb-8">
            Discover Your <br />
            <span className="font-serif italic text-white/80">
              Perfect Style
            </span>
          </h2>

          <button className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-500 rounded-full shadow-2xl">
            Shop Now
          </button>
        </div>
      </div>

      {/* Small floating detail */}
      <div className="absolute top-10 right-10 hidden md:block">
        <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-[10px] uppercase tracking-tighter text-center leading-none">
            Up to <br /> <b className="text-lg">50%</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
