import React, { useState } from "react";
import logo from "../images/fugneiz-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 z-50 flex items-center gap-5 bg-amber-900 opacity-80 backdrop-blur-lg p-3 rounded-md shadow-lg f2">
      <img src={logo} alt="Logo" className="w-32 brightness-110 drop-shadow-md" />
      
      {/* Hamburger Icon */}
      <svg
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-white cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-slate-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full flex flex-col items-center bg-zinc-900/95 border border-gold backdrop-blur-lg shadow-xl p-4 rounded-md transform transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          className="text-white text-lg font-semibold tracking-wide hover:text-amber-400 transition duration-200 border-b border-transparent hover:border-amber-400 w-full text-center pb-2"
        >
          Home
        </Link>
        <a
          href="#about"
          className="text-white text-lg font-semibold tracking-wide hover:text-amber-400 transition duration-200 border-b border-transparent hover:border-amber-400 w-full text-center pb-2"
        >
          About
        </a>
        <a
          href="#events"
          className="text-white text-lg font-semibold tracking-wide hover:text-amber-400 transition duration-200 border-b border-transparent hover:border-amber-400 w-full text-center pb-2"
        >
          Theme
        </a>
        <Link
          to="/events"
          className="text-white text-lg font-semibold tracking-wide hover:text-amber-400 transition duration-200 border-b border-transparent hover:border-amber-400 w-full text-center pb-2"
        >
          Events
        </Link>
        <a
          href="#contact"
          className="text-white text-lg font-semibold tracking-wide hover:text-amber-400 transition duration-200 border-b border-transparent hover:border-amber-400 w-full text-center pb-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
