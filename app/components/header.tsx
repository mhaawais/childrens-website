"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing React Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://placehold.co/150x40?text=Kids+Zone" // Replace with a playful logo
            alt="Kids Zone Logo"
            className="h-10"
          />
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <a href="/games" className="text-white hover:text-yellow-300 font-medium text-lg">
            Games
          </a>
          <a href="/stories" className="text-white hover:text-yellow-300 font-medium text-lg">
            Stories
          </a>
          <a href="/videos" className="text-white hover:text-yellow-300 font-medium text-lg">
            Videos
          </a>
          <a href="/activities" className="text-white hover:text-yellow-300 font-medium text-lg">
            Activities
          </a>
          <a href="/parents" className="text-white hover:text-yellow-300 font-medium text-lg">
            For Parents
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <button className="hidden md:inline-flex items-center bg-yellow-400 text-purple-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition duration-300 shadow-lg">
          Play Now
        </button>
      </div>
    </header>
  );
};

export default Header;