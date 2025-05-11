import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Currency", link: "/currency" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact Us", link: "/contact" },
];

function NavLink({ link, onClick }) {
  return (
    <Link
      to={link.link}
      onClick={onClick}
      className="text-white text-xl font-medium py-4 px-2 rounded-md transition duration-300 ease-in-out"
    >
      {link.name}
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-4 mt-2">
      <div className="w-full max-w-[1280px] h-[98px] flex justify-between items-center px-4 sm:px-6 lg:px-10 rounded-lg mx-auto">
        {/* Logo Container */}
        <div className="flex justify-center items-center h-12">
          <img
            src={logo}
            alt="Company Logo"
            className="max-w-full max-h-full"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links and Button Container */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:relative top-[100px] lg:top-0 left-0 right-0 bg-gray-800 lg:bg-transparent p-4 lg:p-0 lg:justify-end items-center gap-4 lg:gap-10`}
        >
          {/* Nav Links */}
          {NavLinks.map((link, index) => (
            <NavLink key={index} link={link} onClick={() => setIsOpen(false)} />
          ))}

          {/* Login Button */}
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="h-[44px] bg-[#077EB3] text-white w-[93px] rounded-xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
