import React from "react";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Aman Sharma",
    text: "The quality of products is unmatched. Truly a premium experience from browsing to delivery.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    text: "I love the products. Every item I bought feels luxury and unique.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohit Verma",
    text: "Fastest delivery I've ever experienced. The packaging was so elegant, felt like a gift.",
    rating: 4,
  },
  {
    id: 4,
    name: "Gaurav Sharma",
    text: "The quality of products is superb. Truly a premium experience.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ankit Verma",
    text: "Fast delivery and amazing customer support. I’ll definitely shop again.",
    rating: 4,
  },
  {
    id: 6,
    name: "Neha Kapoor",
    text: "Loved the design and overall experience. Everything feels smooth and premium.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    // Deep Black Background with Subtle Border
    <div className="w-full mt-10 py-20 px-10 bg-[#0a0a0a]  border border-white/5 shadow-2xl">
      {/* Header Area */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500/80 font-bold mb-4 block">
          Testimonials
        </span>
        <h2 className="text-4xl font-extralight text-white tracking-tight">
          Voices of our{" "}
          <span className="font-serif italic text-amber-100">elite</span>{" "}
          community
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col items-center text-center group p-8 rounded-[30px] bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-transparent hover:border-white/10"
          >
            {/* Gold Stars */}
            <div className="flex gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < rev.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-white/70 text-sm leading-relaxed mb-8 font-light italic tracking-wide">
              "{rev.text}"
            </p>

            {/* Separator Line */}
            <div className="h-[1px] w-6 bg-amber-500/40 mb-5 group-hover:w-12 group-hover:bg-amber-400 transition-all duration-700"></div>

            {/* Name */}
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white group-hover:text-amber-200 transition-colors">
              {rev.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
