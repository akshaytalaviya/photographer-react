import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-20"> 
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0"> 
          <span className="text-black">ANUSH</span>
          <span className="text-blue-500">KA</span>
        </div>

        {/* Hamburger Menu Button (for smaller screens) */}
        <button
          className="md:hidden flex items-center p-2 rounded-md"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`md:flex md:space-x-8 text-gray-700 font-medium font-serif ${
            isMenuOpen ? 'flex flex-col space-y-4' : 'hidden' 
          }`}
        >
          <a href="#home" className="hover:text-blue-500 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition duration-300">
            About
          </a>
          <a href="#services" className="hover:text-blue-500 transition duration-300">
            Services
          </a>
          <a href="#projects" className="hover:text-blue-500 transition duration-300">
            Projects
          </a>
          <a href="#resume" className="hover:text-blue-500 transition duration-300">
            Resume
          </a>
          <a href="#blog" className="hover:text-blue-500 transition duration-300">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-500 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;