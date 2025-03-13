"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa"; // Importing React Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <FaCode className="w-10 h-10 text-white p-2 bg-indigo-700 rounded-full" />
          <span className="ml-3 text-xl font-bold">CodeCraft</span>
        </a> */}
        <a href="/" className="flex items-center">
          <img
            src="https://placehold.co/150x40?text=Kids+Zone" // Replace with a playful logo
            alt="Kids Zone Logo"
            className="h-14"
          />
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-8" />
            ) : (
              <FaBars className="w-6 h-8" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <a
            href="/games"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Games
          </a>
          <a
            href="/stories"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Stories
          </a>
          <a
            href="/videos"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Videos
          </a>
          <a
            href="/activities"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Activities
          </a>
          <a
            href="/parents"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
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
