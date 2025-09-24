import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-secondary">
      {" "}
      <div className="footer footer-horizontal footer-center rounded p-10 mt-16 max-w-screen-xl mx-auto">
        {/* upper section */}
        <div className="w-full md:px-4 md:flex md:items-center md:justify-between">
          {/* Links */}
          <div className="flex flex-col items-start gap-3">
            {" "}
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Rohan<span className="text-neutral">R05</span>..
            </p>
            <h2 className="text-primary text-[17px]">
              Learning by building. Improving with every project.
            </h2>{" "}
            <nav>
              <ul className="flex w-80 gap-6 text-2xl">
                <li>
                  <a
                    href="https://www.facebook.com/rohan.kabir.877108"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-neutral text-3xl"
                      icon={faFacebook}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RohanR05"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-neutral text-3xl"
                      icon={faGithub}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohan-batman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-neutral text-3xl"
                      icon={faLinkedin}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/8801XXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-neutral text-3xl"
                      icon={faWhatsapp}
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <nav className=" flex flex-col items-start gap-3">
            <h2 className="text-xl font-bold text-neutral">Quick Links</h2>
            <ul className="flex flex-col items-start gap-1">
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-primary font-bold"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-primary font-bold"
                >
                  Skills{" "}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-primary font-bold"
                >
                  My Services
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-neutral mb-2">
              Contact Info..
            </h2>
            <p className="text-sm text-primary mb-1">Narail, Bangladesh</p>
            <p className="text-sm text-primary mb-1">rohankabir061@gmail.com</p>
            <p className="text-sm text-primary mb-1">+8801906647607</p>
            <p className="text-sm text-primary font-medium">
              Available For Work
            </p>
          </div>
        </div>

        <hr className="border border-neutral/20 w-full" />

        {/* Lower Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-6 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by</p>
          <p className="text-2xl md:text-3xl font-bold text-primary md:ml-2">
            Rohan<span className="text-neutral">R05</span>..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
