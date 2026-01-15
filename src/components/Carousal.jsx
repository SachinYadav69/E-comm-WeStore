import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts(); // Function call karein () ke saath
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  // Agar data load ho raha ho
  if (!data || data.length === 0) {
    return (
      <div className="h-full w-full bg-gray-200 animate-pulse rounded-r-[40px]" />
    );
  }

  return (
    <div className="w-full h-full relative group">
      <Slider {...settings} className="h-full">
        {data.slice(0, 15).map((product) => (
          <div
            key={product.id}
            className="h-[calc(100vh-160px)] relative outline-none"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain bg-white p-20"
            />
            {/* Overlay for Premium Look */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />

            {/* Product Info Tag */}
            <div className="absolute bottom-12 right-12 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[200px]">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                Top Rated
              </p>
              <h3 className="text-sm font-bold truncate text-black">
                {product.title}
              </h3>
              <p className="text-lg font-light mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
