import React from "react";
import { getData } from "../context/DataContext"; // Categories dikhane ke liye

const Footer = () => {
  const { data } = getData();
  const categories = data
    ? [...new Set(data.map((item) => item.category))]
    : [];

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 mt-20 px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-[0.3em] text-white">
            WE<span className="text-gray-500 font-light">STORE</span>
          </h2>
          <p className="text-gray-500 text-[11px] leading-relaxed tracking-widest uppercase">
            Defining the future of premium retail. <br />
            Minimalism meets quality.
          </p>
          <div className="flex gap-4 mt-4">
            {["IG", "TW", "FB"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] text-white/40 hover:text-white tracking-widest transition-all"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-4">
            Support
          </h4>
          {[
            "Privacy Policy",
            "Terms of Service",
            "Shipping Info",
            "Returns",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Column 3: Categories (Dynamic) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-4">
            Collections
          </h4>
          {categories.slice(0, 4).map((cat) => (
            <a
              key={cat}
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all w-fit"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-4">
            Newsletter
          </h4>
          <p className="text-[10px] text-gray-500 tracking-widest uppercase mb-2">
            Join the elite community.
          </p>
          <div className="flex border-b border-white/20 pb-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent border-none outline-none text-[10px] tracking-[0.3em] text-white w-full placeholder:text-white/20"
            />
            <button className="text-[10px] text-white font-bold tracking-widest hover:text-gray-400 transition-all">
              JOIN
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase">
          © 2026 WESTORE INDUSTRIAL. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase">
          DEVELOPED FOR PREMIUM EXPERIENCE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
