import React from "react";
import { getData } from "../context/DataContext";

const Category = () => {
  const { data } = getData();

  // Unique categories logic
  const categories = data
    ? ["All", ...new Set(data.map((item) => item.category))]
    : ["All"];

  return (
    <div className="w-full py-10 px-6 md:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[10px] text-center uppercase tracking-[0.4em] text-gray-400 font-bold mb-5 block">
          Filter by
        </span>

        <div className="flex gap-8 overflow-x-auto no-scrollbar md:justify-center items-center w-full">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold border border-gray-100 hover:border-black transition-all duration-300 "
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
