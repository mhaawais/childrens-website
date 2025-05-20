"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);
  const [isCodeStoriesOpen, setIsCodeStoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleStories = () => {
    setIsStoriesOpen(!isStoriesOpen);
    setIsCodeStoriesOpen(false); // Close other dropdown
  };

  const toggleCodeStories = () => {
    setIsCodeStoriesOpen(!isCodeStoriesOpen);
    setIsStoriesOpen(false); // Close other dropdown
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You searched for: ${searchQuery}`);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Kids Zone Logo"
            className="h-12 w-20 mx-auto"
          />
          <h1 className="text-purple-900 font-bold text-3xl">Stormiz</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-4">
          <a
            href="/"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Home
          </a>

          {/* Stories by Age Dropdown */}
          <div className="relative">
            <button
              className="text-yellow-300 font-bold text-lg flex items-center"
              onClick={toggleStories}
            >
              Stories by Age
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${isStoriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isStoriesOpen && (
              <div className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg">
                <a
                  href="/stories/kids-poems"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  Kids Poems
                </a>
                <a
                  href="/stories/0-3"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  0-3 years
                </a>
                <a
                  href="/stories/3-6"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  3-6 years
                </a>
                <a
                  href="/stories/6-9"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  6-9 years
                </a>
                <a
                  href="/stories/9-12"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  9-12 years
                </a>
              </div>
            )}
          </div>

          <a
            href="/popular-stories"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            Popular Stories
          </a>

          {/* Code Stories Dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-yellow-300 font-bold text-lg flex items-center"
              onClick={toggleCodeStories}
            >
              Code Stories
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${isCodeStoriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isCodeStoriesOpen && (
              <div className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg">
                <a
                  href="/code-stories/html"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  HTML Stories
                </a>
                <a
                  href="/code-stories/css"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  CSS Stories
                </a>
                <a
                  href="/code-stories/javascript"
                  className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
                >
                  JavaScript Stories
                </a>
              </div>
            )}
          </div>

          <a
            href="/parents"
            className="text-white hover:text-yellow-300 font-bold text-lg"
          >
            For Parents
          </a>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center">
          {isSearchExpanded ? (
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-full overflow-hidden ml-4 transition-all duration-300"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 w-full focus:outline-none text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-yellow-400 p-2 hover:bg-yellow-500"
              >
                <FaSearch className="text-purple-800" />
              </button>
              <button
                onClick={toggleSearch}
                className="text-purple-800 p-2 ml-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <button onClick={toggleSearch} className="text-white ml-4">
              <FaSearch className="w-6 h-8" />
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaBars className="w-6 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-purple-500 to-pink-500 z-40 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <FaTimes className="w-6 h-8" />
          </button>

          <a href="/" className="flex items-center mb-8">
            <img
              src="/assets/images/logo.png"
              alt="Kids Zone Logo"
              className="h-12"
            />
            <h1 className="text-purple-900 font-bold text-xl">Stormiz</h1>
          </a>

          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-full overflow-hidden w-3/4 mb-8"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 p-2 hover:bg-yellow-500"
            >
              <FaSearch className="text-purple-800" />
            </button>
          </form>

          <nav className="flex flex-col items-center space-y-6">
            <a
              href="/"
              className="text-white hover:text-yellow-300 font-bold text-lg"
              onClick={toggleMenu}
            >
              Home
            </a>

            <div>
              <button
                onClick={toggleStories}
                className="text-yellow-300 font-bold text-lg flex items-center"
              >
                Stories by Age{" "}
                <FaChevronDown
                  className={`ml-1 ${isStoriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isStoriesOpen && (
                <div className="mt-2 space-y-2 text-center">
                  <a
                    href="/stories/kids-poems"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    Kids Poems
                  </a>
                  <a
                    href="/stories/0-3"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    0-3 years
                  </a>
                  <a
                    href="/stories/3-6"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    3-6 years
                  </a>
                  <a
                    href="/stories/6-9"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    6-9 years
                  </a>
                  <a
                    href="/stories/9-12"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    9-12 years
                  </a>
                </div>
              )}
            </div>

            <a
              href="/popular-stories"
              className="text-white hover:text-yellow-300 font-bold text-lg"
              onClick={toggleMenu}
            >
              Popular Stories
            </a>

            <div>
              <button
                onClick={toggleCodeStories}
                className="text-white hover:text-yellow-300 font-bold text-lg flex items-center"
              >
                Code Stories{" "}
                <FaChevronDown
                  className={`ml-1 ${isCodeStoriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isCodeStoriesOpen && (
                <div className="mt-2 space-y-2 text-center">
                  <a
                    href="/code-stories/html"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    HTML Stories
                  </a>
                  <a
                    href="/code-stories/css"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    CSS Stories
                  </a>
                  <a
                    href="/code-stories/javascript"
                    onClick={toggleMenu}
                    className="block text-white hover:text-yellow-300"
                  >
                    JavaScript Stories
                  </a>
                </div>
              )}
            </div>

            <a
              href="/parents"
              className="text-white hover:text-yellow-300 font-bold text-lg"
              onClick={toggleMenu}
            >
              For Parents
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// "use client"; // Mark this component as a Client Component

// import React, { useState } from "react";
// import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa"; // Importing React Icons

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isStoriesOpen, setIsStoriesOpen] = useState(false);
//   const [isCodeStoriesOpen, setIsCodeStoriesOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleStories = () => {
//     setIsStoriesOpen(!isStoriesOpen);
//   };

//   const toggleCodeStories = () => {
//     setIsCodeStoriesOpen(!isCodeStoriesOpen);
//   };

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Search Query:", searchQuery);
//     alert(`You searched for: ${searchQuery}`);
//   };

//   const toggleSearch = () => {
//     setIsSearchExpanded(!isSearchExpanded);
//   };

//   return (
//     <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <a href="/" className="flex items-center">
//           <img
//             src="/assets/images/logo.png" // Replace with a playful logo
//             alt="Kids Zone Logo"
//             className="h-12" // Same size for sm and md screens
//           />
//           <h1 className="text-purple-900 font-bold text-3xl">Stormiz</h1>
//         </a>

//         {/* Navigation Links for Larger Screens */}
//         <nav className="hidden md:flex items-center space-x-8 ml-4">
//           <a
//             href="/"
//             className="text-white hover:text-yellow-300 font-bold text-lg"
//           >
//             Home
//           </a>
//           <div
//             className="relative"
//             onMouseEnter={() => setIsStoriesOpen(true)}
//             onMouseLeave={() => setIsStoriesOpen(false)}
//           >
//             <button
//               className="text-yellow-300 font-bold text-lg flex items-center"
//               onClick={toggleStories} // Toggle dropdown on click
//             >
//               Stories by Age <FaChevronDown className="ml-1" />
//             </button>
//             {isStoriesOpen && (
//               <div
//                 className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
//                 onMouseEnter={() => setIsStoriesOpen(true)} // Keep dropdown open when hovered
//                 onMouseLeave={() => setIsStoriesOpen(false)} // Close dropdown when mouse leaves
//               >
//                 <a
//                   href="/stories/kids-poems"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   Kids Poems
//                 </a>
//                 <a
//                   href="/stories/0-3"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   0-3 years
//                 </a>
//                 <a
//                   href="/stories/3-6"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   3-6 years
//                 </a>
//                 <a
//                   href="/stories/6-9"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   6-9 years
//                 </a>
//                 <a
//                   href="/stories/9-12"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   9-12 years
//                 </a>
//               </div>
//             )}
//           </div>
//           <a
//             href="/popular-stories"
//             className="text-white hover:text-yellow-300 font-bold text-lg"
//           >
//             Popular Stories
//           </a>
//           <div
//             className="relative"
//             onMouseEnter={() => setIsCodeStoriesOpen(true)}
//             onMouseLeave={() => setIsCodeStoriesOpen(false)}
//           >
//             <button
//               className="text-white hover:text-yellow-300 font-bold text-lg flex items-center"
//               onClick={toggleCodeStories}
//             >
//               Code Stories <FaChevronDown className="ml-1" />
//             </button>
//             {isCodeStoriesOpen && (
//               <div
//                 className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
//                 onMouseEnter={() => setIsCodeStoriesOpen(true)}
//                 onMouseLeave={() => setIsCodeStoriesOpen(false)}
//               >
//                 <a
//                   href="/code-stories/html"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   HTML Stories
//                 </a>
//                 <a
//                   href="/code-stories/css"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   CSS Stories
//                 </a>
//                 <a
//                   href="/code-stories/javascript"
//                   className="block px-4 py-2 text-purple-800 hover:bg-purple-100"
//                 >
//                   JavaScript Stories
//                 </a>
//               </div>
//             )}
//           </div>
//           <a
//             href="/parents"
//             className="text-white hover:text-yellow-300 font-bold text-lg"
//           >
//             For Parents
//           </a>
//         </nav>

//         {/* Search Bar for Larger Screens */}
//         <div className="hidden md:flex items-center">
//           {isSearchExpanded ? (
//             <form
//               onSubmit={handleSearch}
//               className="flex items-center bg-white rounded-full overflow-hidden ml-4 transition-all duration-300"
//             >
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="px-4 py-2 w-full focus:outline-none text-sm md:text-base"
//               />
//               <button
//                 type="submit"
//                 className="bg-yellow-400 p-2 hover:bg-yellow-500 transition duration-300"
//               >
//                 <FaSearch className="text-purple-800" />
//               </button>
//               <button
//                 onClick={toggleSearch}
//                 className="text-purple-800 p-2 hover:bg-gray-100 rounded-full ml-2"
//               >
//                 <FaTimes className="w-5 h-5" />
//               </button>
//             </form>
//           ) : (
//             <button
//               onClick={toggleSearch}
//               className="text-white focus:outline-none ml-4"
//             >
//               <FaSearch className="w-6 h-8" />
//             </button>
//           )}
//         </div>

//         {/* Hamburger Menu Icon for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <FaBars className="w-6 h-8" /> {/* Always show the hamburger icon */}
//           </button>
//         </div>

//         {/* Full-Screen Menu for Small and Medium Screens */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-gradient-to-r from-purple-500 to-pink-500 z-40 flex flex-col items-center justify-center md:hidden">
//             {/* Close Icon (Cross) at the Top-Right Corner */}
//             <button
//               onClick={toggleMenu}
//               className="absolute top-4 right-4 text-white focus:outline-none"
//             >
//               <FaTimes className="w-6 h-8" /> {/* Cross icon to close the menu */}
//             </button>

//             {/* Logo in Full-Screen Menu */}
//             <a href="/" className="flex items-center mb-8">
//               <img
//                 src="/assets/images/logo.png" // Replace with a playful logo
//                 alt="Kids Zone Logo"
//                 className="h-12" // Same size for sm and md screens
//               />
//               <h1 className="text-purple-900 font-bold text-xl">Stormiz</h1>
//             </a>

//             {/* Search Bar for Mobile */}
//             <form
//               onSubmit={handleSearch}
//               className="flex items-center bg-white rounded-full overflow-hidden w-3/4 mb-8"
//             >
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="px-4 py-2 w-full focus:outline-none text-sm"
//               />
//               <button
//                 type="submit"
//                 className="bg-yellow-400 p-2 hover:bg-yellow-500 transition duration-300"
//               >
//                 <FaSearch className="text-purple-800" />
//               </button>
//             </form>

//             {/* Navigation Links */}
//             <nav className="flex flex-col items-center space-y-6 overflow-y-auto w-full">
//               <a
//                 href="/"
//                 className="text-white hover:text-yellow-300 font-bold text-lg"
//                 onClick={toggleMenu} // Close menu when a link is clicked
//               >
//                 Home
//               </a>
//               <div className="relative">
//                 <button
//                   onClick={toggleStories}
//                   className="text-yellow-300 font-bold text-lg flex items-center"
//                 >
//                   Stories by Age <FaChevronDown className="ml-1" />
//                 </button>
//                 {isStoriesOpen && (
//                   <div className="mt-2 space-y-2 text-center">
//                     <a
//                       href="/stories/kids-poems"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu} // Close menu when a link is clicked
//                     >
//                       Kids Poems
//                     </a>
//                     <a
//                       href="/stories/0-3"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu} // Close menu when a link is clicked
//                     >
//                       0-3 years
//                     </a>
//                     <a
//                       href="/stories/3-6"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu} // Close menu when a link is clicked
//                     >
//                       3-6 years
//                     </a>
//                     <a
//                       href="/stories/6-9"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu} // Close menu when a link is clicked
//                     >
//                       6-9 years
//                     </a>
//                     <a
//                       href="/stories/9-12"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu} // Close menu when a link is clicked
//                     >
//                       9-12 years
//                     </a>
//                   </div>
//                 )}
//               </div>
//               <a
//                 href="/popular-stories"
//                 className="text-white hover:text-yellow-300 font-bold text-lg"
//                 onClick={toggleMenu} // Close menu when a link is clicked
//               >
//                 Popular Stories
//               </a>
//               <div className="relative">
//                 <button
//                   onClick={toggleCodeStories}
//                   className="text-white hover:text-yellow-300 font-bold text-lg flex items-center"
//                 >
//                   Code Stories <FaChevronDown className="ml-1" />
//                 </button>
//                 {isCodeStoriesOpen && (
//                   <div className="mt-2 space-y-2 text-center">
//                     <a
//                       href="/code-stories/html"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu}
//                     >
//                       HTML Stories
//                     </a>
//                     <a
//                       href="/code-stories/css"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu}
//                     >
//                       CSS Stories
//                     </a>
//                     <a
//                       href="/code-stories/javascript"
//                       className="block text-white hover:text-yellow-300"
//                       onClick={toggleMenu}
//                     >
//                       JavaScript Stories
//                     </a>
//                   </div>
//                 )}
//               </div>
//               <a
//                 href="/parents"
//                 className="text-white hover:text-yellow-300 font-bold text-lg"
//                 onClick={toggleMenu} // Close menu when a link is clicked
//               >
//                 For Parents
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
