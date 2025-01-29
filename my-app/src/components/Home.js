import React from 'react';
import Hero from "../assets/img/hero-author.png";

const Home = () => {
  return (
    <section id="home" className="relative bg-[#FFFAEE] min-h-screen font-serif" >
      <div className="container mx-auto px-4 md:px-32 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-4">
          <div className="about-content pt-32 sm:pt-24 md:pt-0">
            <span className="block text-[#484848] text-xl font-medium">
              - I Am Anushka Stoinis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#232434] mt-2">
              Photographer
            </h1>
          </div>

          {/* Basic Information */}
          <div className="basic-info mt-9 space-x-10 flex flex-wrap md:flex-row ">
            <Info label="Email:" value="info@example.com" icon="fas fa-envelope" />
            <Info label="Phone:" value="+456 789 321" icon="fas fa-phone" />
            <Info label="Nationality:" value="USA" icon="fas fa-flag" />
          </div>

          {/* Social Profiles */}
          <div className="social-profile mt-12">
            <ul className="flex  space-x-4 md:flex-row md:space-x-4"> 
              <SocialIcon
                href="#"
                bgColor="#3B5998"
                iconClass="fab fa-facebook-f"
                title="Facebook"
              />
              <SocialIcon
                href="#"
                bgColor="#1A90D9"
                iconClass="fab fa-twitter"
                title="Twitter"
              />
              <SocialIcon
                href="#"
                bgColor="#FF5252"
                iconClass="fab fa-instagram"
                title="Instagram"
              />
              <SocialIcon
                href="#"
                bgColor="#0e76a8"
                iconClass="fab fa-linkedin-in"
                title="LinkedIn"
              />
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <div className="hero-img w-full md:w-[600px] relative">
            <img
              src={Hero}
              alt="profile-picture"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Components */

// Basic Info Component with Icon
const Info = ({ label, value, icon }) => (
  <div className="flex items-center space-x-2">
    <i className={`${icon} text-xl text-[#484848]`}></i>
    <div>
      <p className="text-lg font-semibold">
        {label} <br />
        <span className="text-base font-normal">{value}</span>
      </p>
    </div>
  </div>
);

// Social Icon Component
const SocialIcon = ({ href, bgColor, iconClass, title }) => (
  <li className="flex flex-col items-center justify-center"> 
    <a
      href={href}
      className={`w-14 h-14 flex items-center justify-center bg-white text-xl text-[#232434] rounded-full shadow-md transition-all duration-300 hover:bg-[${bgColor}]`}
      title={title}
    >
      <i className={iconClass}></i>
    </a>
  </li>
);

export default Home;
