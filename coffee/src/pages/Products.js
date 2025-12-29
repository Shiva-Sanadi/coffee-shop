import React, { useState } from "react";
import prodApi from "../api/prodapi";

const categories = ["all", "coffee", "tea", "snacks"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartAnim, setCartAnim] = useState(null);

  const filteredData =
    activeCategory === "all"
      ? prodApi
      : prodApi.filter((item) => item.category === activeCategory);

  const handleAddToCart = (id) => {
    setCartAnim(id);
    setTimeout(() => setCartAnim(null), 500);
  };

  return (
    <section
      id="products"
      className="w-screen bg-[#081a14] dark:bg-black py-24 px-6 lg:px-20"
    >
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-7xl font-extrabold uppercase text-white mb-12">
        Our <span className="text-yellow-500">Products</span>
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-6 py-2 rounded-full text-xl uppercase tracking-wide transition-all
              ${activeCategory === cat
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

      {/* Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((item) => {
          const { id, image, title, description, price, inr, bestseller } = item;

          return (
            <div
              key={id}
              className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl bg-emerald-900 backdrop-blur border border-white/10 transition-transform duration-300 hover:-translate-y-3"
            >
              {/* Bestseller Badge */}
              {bestseller && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  Best Seller
                </span>
              )}

              {/* Product Image */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="text-center p-4 sm:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base mb-3">{description}</p>

                {/* Price */}
                <div className="flex justify-center items-center gap-3 mb-3">
                  <span className="text-yellow-500 text-lg md:text-xl font-bold">{price}</span>
                  <span className="text-sm line-through text-gray-400">{inr}</span>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(id)}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 shadow-md
                    ${cartAnim === id
                      ? "bg-green-500 text-black scale-95"
                      : "bg-yellow-600 text-black hover:bg-yellow-500 hover:scale-105"
                    }`}
                >
                  {cartAnim === id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
