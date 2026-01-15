import React from "react";
import { Link } from "react-router-dom";

const SaleBanner = () => {
  return (
    // Sharp edges, pure black/charcoal theme
    <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-b border-white/10">
      {/* LEFT BOX: Charcoal Grey (8 Columns) */}
      <div className="md:col-span-8 h-[400px] md:h-[500px] bg-[#080808] border-r border-white/10 flex flex-col justify-center px-10 md:px-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-red-600">
            Exclusive Access
          </span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <h2 className="text-6xl md:text-9xl font-light leading-none tracking-tighter mb-12 uppercase text-white">
          WINTER <br />{" "}
          <span className="font-serif italic text-white/20 tracking-normal">
            Archive
          </span>
        </h2>

        <div className="flex items-center gap-12">
          {/* RED BUTTON */}
          <Link
            to="/products"
            className="px-14 py-5 bg-[#e11d48] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore Sale
          </Link>

          <div className="flex flex-col border-l border-white/10 pl-8">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-1">
              STATUS
            </span>
            <span className="text-2xl font-light tracking-tighter text-white uppercase">
              Active Now
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT BOX: Pitch Black (4 Columns) */}
      <div className="md:col-span-4 h-[400px] md:h-[500px] bg-black p-16 flex flex-col justify-between relative">
        <div>
          <span className="inline-block border border-white/20 px-6 py-2 text-[9px] uppercase tracking-[0.4em] text-white/60 mb-8">
            Inventory: 14%
          </span>
          <h3 className="text-white text-5xl font-extralight leading-tight tracking-tighter uppercase">
            Limited <br />{" "}
            <span className="font-bold text-white">Seasonal</span> <br /> Drop
          </h3>
        </div>

        <div className="border-t border-white/10 pt-10">
          <p className="text-white/30 text-[9px] uppercase tracking-[0.5em] mb-6 font-bold">
            Countdown
          </p>
          <div className="flex gap-10 text-white font-mono">
            {["08", "24", "56"].map((time, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl font-light tracking-tighter leading-none">
                  {time}
                </span>
                <span className="text-[8px] uppercase text-white/20 tracking-[0.3em] mt-3">
                  {i === 0 ? "Hrs" : i === 1 ? "Min" : "Sec"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
