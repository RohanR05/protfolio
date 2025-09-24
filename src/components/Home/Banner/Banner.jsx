import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../assets/IMG-20221009-WA0000.jpg";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-primary to-secondary text-white flex flex-col md:flex-row items-center md:justify-evenly p-8 shadow shadow-neutral">
      {/* Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          className="w-48 h-48 md:w-72 md:h-74 object-cover rounded-full border-4 border-primary shadow-lg"
          src={img}
          alt="Profile"
        />
      </div>

      {/* Text */}
      <div className="md:ml-8 text-center md:text-left max-w-xl">
        <h1 className="text-3xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="md:text-5xl text-secondary  animate-pulse">
            Rohan Kabir
          </span>{" "}
          👋
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-3">
          💻 MERN Stack Developer 🚀
        </p>
        <p className="text-lg">
          Passionate about building modern, scalable web applications with clean
          UI ✨ and efficient backend architecture ⚡.
        </p>
        <ul className="flex flex-wrap gap-3 mt-5 md:gap-6 text-2xl">
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
      </div>
    </div>
  );
};

export default Banner;
