import React, { useState } from 'react';
import Bloga from "../assets/img/blog/blog-a.jpg";
import Blogb from "../assets/img/blog/blog-b.jpg";

const BlogSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="blog" className="blog-area py-16 px-4 sm:px-8 md:px-16 font-serif">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Introduction Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl mb-4 font-bold leading-snug">
                Read my blog about the future of work with me
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>

          {/* Blog Post 1 */}
          <div className="col-span-1">
            <div className="single-blog bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="blog-img">
                <img
                  src={Bloga}
                  alt="Blog 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-4">
                <span className="block text-gray-700 text-sm mb-2">May 14, 2024</span>
                <h2 className="text-xl font-medium">
                  <button
                    className="text-gray-800 hover:text-yellow-400 text-start"
                    onClick={() => openModal('modal1')}
                  >
                    Never let your memories be greater than your dreams
                  </button>
                </h2>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-span-1">
            <div className="single-blog bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="blog-img">
                <img
                  src={Blogb}
                  alt="Blog 2"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-4">
                <span className="block text-gray-700 text-sm mb-2">May 15, 2024</span>
                <h2 className="text-xl font-medium">
                  <button
                    className="text-gray-800 hover:text-yellow-400 text-start"
                    onClick={() => openModal('modal2')}
                  >
                    Self-observation is the first step of inner unfolding
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
