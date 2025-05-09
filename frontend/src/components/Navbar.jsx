import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Currency", link: "/currency" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact Us", link: "/contact" },
];

function NavLink({ link }) {
  return (
    <Link
      to={link.link}
      className="text-white text-xl font-medium py-4 px-2 rounded-md transition duration-300 ease-in-out"
    >
      {link.name}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="w-full  p-4 mt-2">
      <div className="w-full max-w-[1280px] h-[98px]  flex justify-between items-center px-4 sm:px-6 lg:px-10 rounded-lg  mx-auto">
        {/* Logo Container */}
        <div className="flex justify-center items-center h-12">
          <img
            src={logo}
            alt="Company Logo"
            className="max-w-full max-h-full"
          />
        </div>

        {/* Navigation Links and Button Container */}
        <div className="flex justify-end items-center gap-10">
          {/* Nav Links */}
          {NavLinks.map((link, index) => (
            <NavLink key={index} link={link} />
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
