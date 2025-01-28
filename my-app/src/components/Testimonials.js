import { useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    name: "Alex Chohan",
    designation: "Marketing Manager",
  },
  {
    text: "Lorem ipsum dolor adipisicing elit sed do eiusmod tempor incididunt ut labore sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur .",
    name: "Kader Bhai",
    designation: "Chapabazz Group",
  },
  {
    text: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.  adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    name: "Hashu Apa",
    designation: "Ovidhu Sarkar",
  },
  {
    text: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit, . Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    name: "Chorer Dhol",
    designation: "Batpar INC",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#e5ffff] py-16 px-6 font-serif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="http://127.0.0.1:5500/anushka/assets/img/testi.png"
              alt="Client Testimonials"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">References</h2>
            <p className="text-yellow-500 font-semibold mb-6">What Clients Say.</p>

            {/* Ratings Section */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="bg-green-500 text-white py-4 px-6 rounded-tr-3xl rounded-bl-3xl">
                <span className="block text-2xl font-bold">4.9</span>
                <span className="text-sm">Rating</span>
              </div>
              <div className="bg-yellow-500 text-white py-4 px-6 rounded-tr-3xl rounded-bl-3xl">
                <span className="block text-2xl font-bold">171</span>
                <span className="text-sm">Reviews</span>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="relative">
              <p className="text-lg italic mb-6">"{testimonials[activeIndex]?.text}"</p>
              <span className="block text-xl font-semibold">{testimonials[activeIndex]?.name}</span>
              <span className="text-gray-600">{testimonials[activeIndex]?.designation}</span>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="bg-gray-200 w-10 h-10 rounded-full hover:bg-gray-300"
                  aria-label="Previous Testimonial"
                >
                  &larr;
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-gray-200 w-10 h-10 rounded-full hover:bg-gray-300"
                  aria-label="Next Testimonial"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
