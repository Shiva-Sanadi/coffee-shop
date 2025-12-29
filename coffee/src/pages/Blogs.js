import React from "react";
import blogsApi from "../api/blogsapi";

const Blogs = () => {
  return (
    <section id="blogs" className="w-screen bg-[#081a14] py-28">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold uppercase text-white mb-16">
        Our <span className="text-yellow-500">Blogs</span>
      </h1>

      {/* FULL WIDTH GRID */}
      <div className="px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogsApi.map((blog) => (
          <article
            key={blog.id}
            className="group bg-emerald-900 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-500/20 transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* CATEGORY BADGE */}
              <span className="absolute top-5 left-5 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                {blog.category}
              </span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            </div>

            {/* CONTENT */}
            <div className="p-8 flex flex-col h-full">
              <span className="text-yellow-400 text-sm uppercase tracking-wide mb-2">
                {blog.span}
              </span>

              <h3 className="text-2xl font-bold text-white leading-snug mb-4 group-hover:text-yellow-400 transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {blog.para}
              </p>

              {/* CTA */}
              <a
                href="#blogs"
                className="mt-6 inline-flex items-center gap-2 text-yellow-500 font-semibold hover:gap-4 transition-all"
              >
                {blog.btn}
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
