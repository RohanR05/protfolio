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
      <div className="max-w-screen-xl mx-auto p-6 md:p-12 rounded mt-16">
        {/* Upper Section */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          {/* Brand + Social Icons */}
          <div className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Rohan<span className="text-neutral">R05</span>..
            </p>
            <h2 className="text-primary text-[17px] break-words">
              Learning by building. Improving with every project.
            </h2>
            <nav>
              <ul className="flex flex-wrap gap-3 md:gap-6 text-2xl">
                <li>
                  <a
                    href="https://www.facebook.com/rohan.kabir.877108"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon
                      className="border border-primary p-1.5 rounded-lg text-primary bg-neutral/30 hover:bg-primary hover:text-neutral transition"
                      icon={faFacebook}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RohanR05"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon
                      className="border border-primary p-1.5 rounded-lg text-primary bg-neutral/30 hover:bg-primary hover:text-neutral transition"
                      icon={faGithub}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohan-batman/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon
                      className="border border-primary p-1.5 rounded-lg text-primary bg-neutral/30 hover:bg-primary hover:text-neutral transition"
                      icon={faLinkedin}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/8801906647607"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon
                      className="border border-primary p-1.5 rounded-lg text-primary bg-neutral/30 hover:bg-primary hover:text-neutral transition"
                      icon={faWhatsapp}
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <h2 className="text-xl font-bold text-neutral">Quick Links</h2>
            <ul className="flex flex-col items-start gap-1">
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-primary font-bold hover:underline"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("skills")}
                  className="text-primary font-bold hover:underline"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="text-primary font-bold hover:underline"
                >
                  My Services
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-start flex-1 min-w-0">
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

        {/* Divider */}
        <hr className="border-t border-neutral/30 w-full my-6" />

        {/* Lower Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 text-center text-sm">
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
