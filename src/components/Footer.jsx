import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faFolderOpen,
  faLaptopCode,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary">
      <div className="max-w-screen-xl mx-auto p-6 md:py-12 rounded mt-16">
        {/* Upper Section */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          {/* Brand + Social Icons */}
          <div className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <p className="text-2xl md:text-3xl font-bold text-info">
              Rohan<span className="text-primary">R05</span>..
            </p>
            <h2 className="text-info text-[17px] break-words">
              Learning by building. Improving with every project.
            </h2>
            <nav>
              <ul className="flex flex-wrap gap-3 md:gap-6 text-2xl mt-2">
                {[faFacebook, faGithub, faLinkedin, faWhatsapp].map(
                  (icon, idx) => (
                    <li key={idx}>
                      <a
                        href={
                          icon === faFacebook
                            ? "https://www.facebook.com/rohan.kabir.877108"
                            : icon === faGithub
                            ? "https://github.com/RohanR05"
                            : icon === faLinkedin
                            ? "https://www.linkedin.com/in/rohan-batman/"
                            : "https://wa.me/8801906647607"
                        }
                        target="_blank"
                        rel="noreferrer"
                        aria-label="social link"
                      >
                        <FontAwesomeIcon
                          className="p-1.5 border rounded-md text-primary hover:rotate-30 transition"
                          icon={icon}
                        />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Quick Links with Icons */}
          <nav className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <h2 className="text-xl font-bold text-primary">Quick Links</h2>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="flex items-center gap-2 text-info font-bold hover:underline"
                >
                  <FontAwesomeIcon className="text-primary" icon={faUser} />
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("projects")}
                  className="flex items-center gap-2 text-info font-bold hover:underline"
                >
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faFolderOpen}
                  />
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("myServices")}
                  className="flex items-center gap-2 text-info font-bold hover:underline"
                >
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faLaptopCode}
                  />
                  My Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="flex items-center gap-2 text-info font-bold hover:underline"
                >
                  <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
                  Contact Me
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Info with Icons */}
          <div className="flex flex-col items-start flex-1 min-w-0">
            <h2 className="text-xl font-bold text-primary mb-2">
              Contact Info..
            </h2>
            <p className="flex items-center gap-2 text-sm text-info mb-1">
              <FontAwesomeIcon
                className="text-primary text-lg"
                icon={faMapMarkerAlt}
              />{" "}
              Narail, Bangladesh
            </p>
            <p className="flex items-center gap-2 text-sm text-info mb-1">
              <FontAwesomeIcon
                className="text-primary text-lg"
                icon={faEnvelope}
              />{" "}
              rohankabir061@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm text-info mb-1">
              <FontAwesomeIcon
                className="text-primary text-lg"
                icon={faPhone}
              />{" "}
              +8801906647607
            </p>
            <p className="flex items-center gap-2 text-sm text-info font-medium">
              <FontAwesomeIcon
                className="text-primary text-lg"
                icon={faBriefcase}
              />{" "}
              Available For Work
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-primary/30 w-full my-6" />

        {/* Lower Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by</p>
          <p className="text-2xl md:text-3xl font-bold text-info md:ml-2">
            Rohan<span className="text-primary">R05</span>..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
