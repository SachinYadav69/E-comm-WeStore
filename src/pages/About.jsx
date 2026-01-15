import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-16 lg:px-24">
      {/* SECTION 1: HERO MANIFESTO */}
      <div className="max-w-5xl mb-32">
        <span className="text-[10px] uppercase tracking-[0.6em] text-red-600 font-bold mb-8 block">
          Since 2026 / The Philosophy
        </span>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-[0.9] mb-12">
          We define <br />
          <span className="font-serif italic text-white/30">
            Minimalism
          </span>{" "}
          <br />
          As a standard.
        </h1>
        <p className="text-white/50 text-sm md:text-base leading-relaxed tracking-wide max-w-2xl font-light italic">
          WESTORE is not just a platform; it's an archive of curated essentials.
          We believe in the power of sharp lines, deep blacks, and the
          unapologetic beauty of industrial design. No noise, just quality.
        </p>
      </div>

      {/* SECTION 2: BOLD IMAGE & GRID */}
      {/* SECTION 2: BOLD IMAGE & GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-32">
        <div className="md:col-span-8 h-[400px] md:h-[600px] bg-[#0c0c0c] border border-white/5 flex items-center justify-center relative overflow-hidden">
          {/* Normal Premium Image - No Grayscale, No Hover Effects */}
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
            alt="Store Interior"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Sharp Industrial Borders (Static) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30"></div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-end gap-10">
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-4">
              Precision
            </h4>
            <p className="text-[11px] text-white/40 uppercase tracking-widest leading-loose">
              Every pixel and every product in our catalog is scrutinized for
              aesthetic alignment.
            </p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-4">
              Integrity
            </h4>
            <p className="text-[11px] text-white/40 uppercase tracking-widest leading-loose">
              We source directly from creators who value durability over
              fast-fashion trends.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: THE NUMBERS (INDUSTRIAL STYLE) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-white/10 py-16">
        {[
          { label: "Global Reach", val: "24+" },
          { label: "Curated Items", val: "500+" },
          { label: "Design Awards", val: "12" },
          { label: "Happy Clients", val: "10K" },
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left space-y-2">
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
              {stat.label}
            </p>
            <h3 className="text-3xl md:text-5xl font-light tracking-tighter">
              {stat.val}
            </h3>
          </div>
        ))}
      </div>
      <Testimonials />
      {/* SECTION 4: CALL TO ACTION */}

      <div className="relative py-10 flex flex-col items-center overflow-hidden">
        <h2 className="text-3xl md:text-6xl font-light tracking-tighter uppercase text-center mb-12 z-10 leading-none">
          Become part of the <br />{" "}
          <span className="text-white/20 italic font-serif lowercase">new</span>{" "}
          tradition.
        </h2>

        <Link
          to="/products"
          className="px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#e11d48] hover:text-white transition-all duration-500"
        >
          Explore Collection
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default About;
