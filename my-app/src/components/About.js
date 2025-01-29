import React from "react";
import Profile from "../assets/img/profile-pic.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Image Section */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="about_img">
              <img 
                src={Profile}
                alt="profile"
                className="w-full rounded-lg "
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:w-1/2 w-full">
            <div className="about_info">
              <h4 className="text-lg font-medium border-b-2 border-dashed border-gray-700 pb-1 inline-block mb-3">
                About Me
              </h4>
              <h3 className="text-3xl lg:text-4xl font-semibold mb-5">
                Award-winning designer with 12+ years of experience
              </h3>
              <p className="text-lg leading-8 text-gray-700 mb-6">
                Bootstrap has reached widespread adoption among developers.{" "}
                <b>
                  The person who designed and built Envato is a programmer and
                  web developer who enjoys a diverse array of hobbies, including
                  building web apps.
                </b>{" "}
                Many have expressed their desire for design customization beyond
                the default styles. This marketplace was created to solve this
                issue.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500"
                >
                  Download CV
                </a>
                <a
                  href=""
                  className="flex items-center text-gray-800 hover:text-yellow-500"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white border-2 border-yellow-400 text-yellow-400 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="ml-3 uppercase font-medium text-sm">
                    Video Tour
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
