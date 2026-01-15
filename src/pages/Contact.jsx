import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 md:px-16 lg:px-32">
      {/* HEADER SECTION */}
      <div className="mb-20 border-b border-white/10 pb-12">
        <span className="text-[10px] uppercase tracking-[0.8em] text-gray-400 font-bold mb-6 block">
          Inquiries / 2026
        </span>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-none">
          Get in <br />
          <span className="font-serif italic text-white/20">Touch</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* LEFT: Contact Information (4 Columns) */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              General Support
            </h4>
            <p className="text-sm tracking-widest uppercase hover:text-red-600 transition-colors cursor-pointer">
              hello@westore.archive
            </p>
            <p className="text-sm tracking-widest uppercase">
              +91 000 000 0000
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Studio Address
            </h4>
            <p className="text-[11px] text-white/60 uppercase tracking-[0.2em] leading-loose">
              Industrial Area Phase II, <br />
              Cyber Hub, Gurugram <br />
              Haryana, India.
            </p>
          </div>

          <div className="space-y-4 pt-10 border-t border-white/5">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Socials
            </h4>
            <div className="flex flex-col gap-2">
              {["Instagram", "Twitter / X", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] uppercase tracking-[0.3em] hover:text-red-600 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Sharp Minimal Form (8 Columns) */}
        <div className="lg:col-span-8">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Name Input */}
              <div className="group relative border-b border-white/10 focus-within:border-white transition-all">
                <label className="text-[9px] uppercase tracking-[0.5em] text-white/20 group-focus-within:text-red-600 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent py-4 text-sm uppercase tracking-widest outline-none border-none placeholder:text-white/5"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="group relative border-b border-white/10 focus-within:border-white transition-all">
                <label className="text-[9px] uppercase tracking-[0.5em] text-white/20 group-focus-within:text-red-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent py-4 text-sm uppercase tracking-widest outline-none border-none placeholder:text-white/5"
                  placeholder="john@archive.com"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="group relative border-b border-white/10 focus-within:border-white transition-all">
              <label className="text-[9px] uppercase tracking-[0.5em] text-white/20 group-focus-within:text-red-600 transition-colors">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-transparent py-4 text-sm uppercase tracking-widest outline-none border-none placeholder:text-white/5"
                placeholder="Order Inquiry / Collaboration"
              />
            </div>

            {/* Message Input */}
            <div className="group relative border-b border-white/10 focus-within:border-white transition-all">
              <label className="text-[9px] uppercase tracking-[0.5em] text-white/20 group-focus-within:text-red-600 transition-colors">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-transparent py-4 text-sm uppercase tracking-widest outline-none border-none resize-none placeholder:text-white/5"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/*  SUBMIT BUTTON */}
            <div className="pt-6">
              <button className="w-full md:w-auto px-20 py-6 bg-white text-black text-[10px] uppercase tracking-[0.6em] font-black hover:bg-[#e11d48] hover:text-white transition-all duration-500">
                Send Dispatch
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default Contact;
