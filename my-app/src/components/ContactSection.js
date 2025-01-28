import React from "react";

// Footer Component
const Footer = () => (
  <div className="bg-[#F7FAEB] pb-8 font-serif">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-400 m-6 text-center p-6 rounded-xl">
        {[
          { title: "Address", content: "3481 Melrose Place" },
          { title: "Phone", content: "+512 513 96324" },
          { title: "Email", content: "example@example.com" },
        ].map((item, i) => (
          <div key={i}>
            <h4 className="font-bold">{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <ul className="list-none flex justify-center flex-wrap gap-4 mb-4">
          {["Facebook", "Twitter", "Instagram", "Pinterest", "Tumblr"].map((social, i) => (
            <li key={i}>
              <a
                href="#"
                className="text-[#232434] text-lg py-2 px-4 hover:text-[#ffde67] transition-all duration-300"
              >
                {social}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-lg">&copy; 2024 | All Rights Reserved.</p>
      </div>
    </div>
  </div>
);

// ContactSection Component
const ContactSection = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <section className="py-16 bg-[#F7FAEB] px-6 sm:px-12 lg:px-36 font-serif">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h1>
            <p className="text-gray-600">We'd love to hear from you!</p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {/* Image */}
            <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
              <img
                src="http://127.0.0.1:5500/anushka/assets/img/contact.png"
                alt="Contact"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Form */}
            <div className="w-full lg:w-7/12 px-4">
              <form onSubmit={handleSubmit} className="grid gap-6">
                {[
                  { name: "name", placeholder: "Name", type: "text" },
                  { name: "email", placeholder: "Email", type: "email" },
                  { name: "subject", placeholder: "Subject", type: "text" },
                ].map((field, i) => (
                  <input
                    key={i}
                    {...field}
                    required
                    className="w-full h-[60px] px-4 bg-white border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-800 text-lg rounded-md"
                  />
                ))}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-gray-300 text-gray-800 text-lg rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ffde67] hover:bg-[#ffd633] text-white py-4 text-lg rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <div className="w-full h-[300px] sm:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
          className="w-full h-full border-0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactSection;
