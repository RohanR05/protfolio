import React, { useState } from "react";
import Theme from "./Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFolderOpen,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu on click
  };

  const links = (
    <>
      <li>
        <button
          onClick={() => handleScroll("about")}
          className="text-info font-bold flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faUser} className="text-primary" />
          About Me
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("projects")}
          className="text-info font-bold flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faFolderOpen} className="text-primary" />
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("myServices")}
          className="text-info font-bold flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faLaptopCode} className="text-primary" />
          My Services
        </button>
      </li>

      <li>
        <button
          onClick={() => handleScroll("contact")}
          className="text-info font-bold flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          Contact Me
        </button>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-accent/40 shadow-sm">
      <div className="navbar mx-auto px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul className="menu menu-compact dropdown-content mt-2 p-4 shadow bg-secondary rounded-lg w-52 absolute">
                {links}
              </ul>
            )}
          </div>

          {/* Brand */}
          <p className="text-2xl md:text-3xl font-bold text-info cursor-pointer">
            Rohan<span className="text-primary">R05</span>..
          </p>
        </div>

        {/* Navbar Center for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[17px]">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-2">
          <Theme />

          <a
            href="https://drive.google.com/file/d/1pQNXuHtsJMpAC9OUGX-KrdKq5tHJrnCm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-secondary hidden md:inline-block bg-gradient-to-r from-info to-neutral text-accent font-bold px-6 py-2 rounded-lg shadow-md hover:from-primary hover:to-info transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
