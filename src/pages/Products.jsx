import React, { useState } from "react";
import { getData } from "../context/DataContext";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  const { data } = getData();
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = data
    ? ["All", ...new Set(data.map((item) => item.category))]
    : ["All"];

  const filteredProducts =
    selectedCat === "All"
      ? data
      : data.filter((item) => item.category === selectedCat);

  return (
    <div className="min-h-screen bg-black pt-28 flex flex-col md:flex-row">
      {/* LEFT SIDE: Minimalist Sidebar */}
      <aside className="w-full md:w-56 md:h-[calc(100vh-112px)] md:sticky md:top-28 px-8 py-8 border-r border-white/5 bg-black z-10">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-black mb-10">
          CATEGORIES
        </h2>
        <nav className="flex flex-row md:flex-col gap-6 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] text-left transition-all duration-300 whitespace-nowrap py-1 relative group
                ${
                  selectedCat === cat
                    ? "text-white font-bold"
                    : "text-white/40 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </aside>

      {/* RIGHT SIDE: Products Display */}
      <main className="flex-1">
        <div className="px-8 py-4 border-b border-white/5 flex justify-between items-center bg-[#050505]">
          <span className="text-[8px] uppercase tracking-[0.5em] text-white/30">
            {filteredProducts?.length} Pieces Found
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-white/5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Products;
