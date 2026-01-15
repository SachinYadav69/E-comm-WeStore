import React from "react";
import Carousal from "../components/Carousal";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import PromotionBanner from "../components/PromotionBanner";
import SaleBanner from "../components/SaleBanner";
import ShopNow from "../components/ShopNow";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <Navbar />

      <main className="w-full pt-28 pb-10 px-4 md:px-10">
        {/* --- HERO SECTION START --- */}
        <div className="w-full h-[calc(100vh-160px)] flex flex-col md:flex-row overflow-hidden rounded-[40px] shadow-2xl bg-[#f4f4f4]">
          {/* LEFT CONTENT AREA */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 block font-bold">
                New Arrival 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.1] text-black tracking-tight mb-8">
                Your one-stop <br />
                <span className="font-serif italic tracking-normal text-gray-500">
                  solution
                </span>{" "}
                for <br />
                everything <span className="font-bold">you want.</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-wide mb-10 max-w-sm">
                Discover a curated collection of premium products designed for
                your lifestyle. Quality meets elegance in every detail.
              </p>

              <div className="flex items-center gap-8">
                <Link
                  to="/products"
                  className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gray-800 transition-all duration-300 rounded-full shadow-lg shadow-black/20"
                >
                  Shop Now
                </Link>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-300 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CAROUSEL AREA */}
          <div className="w-full md:w-1/2 h-full group">
            <Carousal />
          </div>
        </div>
        {/*HERO SECTION END */}

        <div className="mt-5 rounded-[40px] overflow-hidden bg-white shadow-sm">
          <Category />
        </div>

        <SaleBanner />
        <PromotionBanner />
        <ShopNow />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
