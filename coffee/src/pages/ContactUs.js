import React, { useState } from "react";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="w-screen bg-[#081a14] py-24 relative"
    >
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold uppercase text-white mb-16">
        Contact <span className="text-yellow-500">Us</span>
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

        {/* MAP */}
        <div className="w-full h-[500px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676978631384!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f2a21] px-8 md:px-20 py-16 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold uppercase text-white mb-10 text-center">
            Get in Touch
          </h3>

          {/* INPUT */}
          <div className="relative mb-6">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full bg-[#081a14] border border-yellow-500/40 
              text-white px-12 py-4 rounded-lg outline-none
              focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40"
            />
            <label className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400
              peer-placeholder-shown:top-1/2
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500
              transition-all bg-[#0f2a21] px-2">
              Name
            </label>
            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"></i>
          </div>

          <div className="relative mb-6">
            <input
              type="email"
              required
              placeholder=" "
              className="peer w-full bg-[#081a14] border border-yellow-500/40 
              text-white px-12 py-4 rounded-lg outline-none
              focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40"
            />
            <label className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400
              peer-placeholder-shown:top-1/2
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500
              transition-all bg-[#0f2a21] px-2">
              Email
            </label>
            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"></i>
          </div>

          <div className="relative mb-8">
            <input
              type="tel"
              required
              placeholder=" "
              className="peer w-full bg-[#081a14] border border-yellow-500/40 
              text-white px-12 py-4 rounded-lg outline-none
              focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40"
            />
            <label className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400
              peer-placeholder-shown:top-1/2
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500
              transition-all bg-[#0f2a21] px-2">
              Phone
            </label>
            <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"></i>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="py-4 rounded-full bg-yellow-600 text-black font-semibold
            hover:tracking-widest transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* SUCCESS TOAST */}
      {success && (
        <div className="fixed top-6 right-6 bg-green-500 text-black px-6 py-3 rounded-xl shadow-lg">
          ✅ Message sent successfully!
        </div>
      )}

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full
        flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>
    </section>
  );
};

export default ContactUs;
