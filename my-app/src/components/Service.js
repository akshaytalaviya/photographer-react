import React from "react";

const Service = () => {
  return (
    <section id="service" className="bg-[#e5ffff] py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">What I Offer</h1>
          <p className="text-lg text-gray-600 mt-2">
            High-quality services tailored to meet your business needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-white p-8 shadow-lg rounded-md transition transform hover:-translate-y-2 hover:bg-[#ffde67] text-center">
            <div className="text-yellow-400 text-5xl mb-6">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Web Design</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-8 shadow-lg rounded-md transition transform hover:-translate-y-2 hover:bg-[#ffde67] text-center">
            <div className="text-yellow-400 text-5xl mb-6">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Development</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-8 shadow-lg rounded-md transition transform hover:-translate-y-2 hover:bg-[#ffde67] text-center sm:col-span-2 lg:col-span-1">
            <div className="text-yellow-400 text-5xl mb-6">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Social Media</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-8 shadow-lg rounded-md transition transform hover:-translate-y-2 hover:bg-[#ffde67] text-center">
            <div className="text-yellow-400 text-5xl mb-6">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Branding</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white p-8 shadow-lg rounded-md transition transform hover:-translate-y-2 hover:bg-[#ffde67] text-center">
            <div className="text-yellow-400 text-5xl mb-6">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Strategy</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
