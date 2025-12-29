import React, { useState } from "react";
import menuItems from "../api/menuapi";

const categories = ["all", "coffee", "tea", "snacks"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartAnim, setCartAnim] = useState(null);

  const filteredData =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAddToCart = (id) => {
    setCartAnim(id);
    setTimeout(() => setCartAnim(null), 800);
  };

  return (
    <section
      id="menu"
      className="w-screen bg-[#081a14] dark:bg-black py-24 overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-7xl font-extrabold uppercase tracking-wider text-white mb-12">
        Our <span className="text-yellow-500">Menu</span>
      </h1>

      <div className="w-full h-1 bg-yellow-600 mb-16"></div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-6 py-2 rounded-full text-xl uppercase tracking-wide transition-all
              ${
                activeCategory === cat
                  ? "bg-yellow-600 text-black font-bold"
                  : "border border-yellow-500/40 text-yellow-400 hover:bg-yellow-600 hover:text-black"
              }`}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-yellow-500 rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="px-6 lg:px-20 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredData.map((item) => {
          const {
            id,
            image,
            heading,
            description,
            price,
            inr,
            btn,
            bestseller,
          } = item;

          return (
            <div
              key={id}
              className="relative group rounded-3xl bg-gradient-to-b from-green-900 to-green-950 backdrop-blur border border-white/10 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={heading}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Best Seller Badge */}
              {bestseller && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Best Seller
                </span>
              )}

              {/* Content */}
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl font-bold text-white">{heading}</h3>
                {description && (
                  <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                    {description}
                  </p>
                )}

                <div className="flex justify-center items-center gap-3 mt-4">
                  <span className="text-yellow-500 text-xl font-bold">
                    {price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    {inr}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToCart(id)}
                  className={`mt-6 w-full py-3 rounded-full font-semibold transition-all duration-500
        ${
          cartAnim === id
            ? "bg-green-500 text-black scale-95 animate-bounce"
            : "bg-yellow-600 text-black hover:tracking-widest"
        }`}
                >
                  {cartAnim === id ? "Added ✓" : btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
