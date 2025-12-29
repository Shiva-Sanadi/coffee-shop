// import React from 'react'

// const Header = () => {
//   return (
//     <>
//         <section className="home" id="home">
//   <div className="content">
//     <h3>fresh coffe in the morning</h3>
//     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus non rem tempore maxime vel repudiandae harum, 
//     vitae error asperiores quisquam sunt dolorum reprehenderit explicabo quibusdam corrupti magnam. Adipisci, ducimus.</p>
//     <a href="#" className="btn">get yours now</a>
//   </div> 
// </section>
//     </>
//   )
// }

// export default Header;



import React from "react";
import bgImage from "../assets/images/coffee6.webp";

const Header = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-12 text-center md:text-left">
          <span className="inline-block px-6 py-4 text-md font-semibold tracking-widest uppercase bg-yellow-600 text-black rounded-full">
            Premium Coffee
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-wide ">
            Fresh Coffee <br />
            <span className="text-yellow-500">In The Morning</span>
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 max-w-xl">
            Start your day with rich aroma and bold flavors. Crafted from
            hand-picked beans, roasted to perfection for coffee lovers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#menu"
              className="px-16 py-4 bg-yellow-600 text-black text-lg font-semibold rounded hover:tracking-wider transition-all duration-300"
            >
              Order Now
            </a>

            <a
              href="#about"
              className="px-16 py-4 border border-white rounded text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-16 pt-8">
            <div>
              <h3 className="text-5xl font-bold text-yellow-500">25+</h3>
              <p className="text-lg text-gray-300">Coffee Varieties</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">10k+</h3>
              <p className="text-lg text-gray-300">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-500">15</h3>
              <p className="text-lg text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (optional card / image) */}
        <div className="hidden md:flex justify-center ">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white shadow-xl max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Today’s Special ☕</h3>
            <p className="text-gray-200 mb-4">
              Dark roast espresso with caramel notes and creamy foam.
            </p>
            <span className="text-yellow-500 font-semibold text-xl">
              ₹199 only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
