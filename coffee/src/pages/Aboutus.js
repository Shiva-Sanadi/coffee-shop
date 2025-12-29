import React from "react";
import aboutImg from "../assets/images/coffee7.webp";

const Aboutus = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#081a14] dark:bg-black py-20"
    >
      {/* Heading */}
      <h1 className="text-center text-4xl tracking-wider md:text-7xl font-extrabold uppercase text-white mb-16">
        <span className="text-yellow-500">About</span> Us
      </h1>

      {/* Row */}
      <div className="grid md:grid-cols-2 w-full">
        
        {/* Image */}
        <div className="h-full">
          <img
            src={aboutImg}
            alt="Our Coffee Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex items-center px-6 sm:px-12 lg:px-20 py-12 text-gray-300">
          <div className="space-y-12 h-full max-w-2xl my-auto">
            <h3 className="text-5xl font-bold text-white">
              What Makes Our Coffee Special?
            </h3>

            <p className="leading-relaxed text-xl">
              At <span className="text-yellow-500 font-semibold text-lg">Coffee House</span>,
              our coffee journey begins at carefully selected farms where quality
              and sustainability matter most. Every bean is sourced with care
              and roasted to unlock deep, rich flavors.
            </p>

            <p className="leading-relaxed text-xl">
              From bold espressos to smooth handcrafted blends, we focus on
              freshness, precision, and passion in every cup we serve.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 ">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-yellow-500 text-xl">✔</span>
                Ethically sourced premium beans
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-yellow-500 text-xl">✔</span>
                Slow-roasted for maximum aroma
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-yellow-500 text-xl">✔</span>
                Crafted by expert baristas
              </li>
            </ul>

            {/* CTA */}
            <a
              href="#menu"
              className="inline-block mt-6 px-12 py-4 bg-yellow-600 text-black font-semibold rounded hover:tracking-wider transition-all duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
