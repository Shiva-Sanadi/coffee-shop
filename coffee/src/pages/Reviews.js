import React from "react";
import reviewApi from "../api/reviewapi";

const Reviews = () => {
  return (
    <section
      id="review"
      className="w-screen bg-[#081a14] dark:bg-black py-24 overflow-hidden"
    >
      <h1 className="text-center text-4xl md:text-5xl font-extrabold uppercase text-white mb-16">
        Customer <span className="text-yellow-500">Reviews</span>
      </h1>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-slide">
          {[...reviewApi, ...reviewApi].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] bg-black/50 backdrop-blur border border-white/10 rounded-3xl p-8 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-3 hover:shadow-3xl"
            >
              <i className="fas fa-quote-left text-yellow-500 text-3xl mb-4"></i>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {item.para}
              </p>

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full object-cover border-4 border-yellow-500 mb-4 shadow-md"
              />

              <h3 className="text-white font-semibold text-lg md:text-xl">
                {item.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-3">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star-half-alt text-yellow-500"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            display: flex;
            gap: 2rem;
            animation: slide 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Reviews;
