import React from "react";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar bg-[#24583C] shadow-sm text-white fixed top-0 z-10 ">
        <div className="navbar-start">
          {/* Hamburger dropdown for small screens */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#24583C] rounded-box w-52 text-white"
            >
              <li>
                <button onClick={() => handleScroll("about")}>About</button>
              </li>
              <li>
                <button onClick={() => handleScroll("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("contact")}>Contact</button>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <a className="text-xl font-extrabold uppercase px-6 py-3 cursor-pointer">
            Marn
            <span className="text-yellow-400 text-2xl mx-2">Stack</span>
            Developer
          </a>
        </div>

        {/* Horizontal menu for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="btn btn-ghost text-white"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="btn btn-ghost text-white"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="btn btn-ghost text-white"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Resume button */}
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/180oEGkCsjBwAmAoht8vH36QYI19XcP4M/view?usp=sharing" // add your resume link here
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden md:inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
