import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../assets/IMG-20221009-WA0000.jpg";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-primary/0 to-neutral/0 text-accent flex flex-col md:flex-row items-center md:justify-between p-4 md:py-8">
      {/* Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          className="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full animate-glowPulse"
          src={img}
          alt="Profile"
        />
      </div>

      {/* Text */}
      <div className="md:ml-8 text-center md:text-left max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-16 text-info text-fade-bottom">
          Rohan Kabir
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-primary mb-3">
          &lt;
          <span className="text-info">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Full Stack Developer",
                "Front-End Developer",
              ]}
              loop={0} // infinite
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          /&gt;
        </p>

        <p className="text-lg mb-5 text-info">
          Passionate about building modern, scalable web applications with clean
          UI and efficient backend architecture.
        </p>

        {/* Social Icons */}
        <ul className="flex flex-wrap gap-3 md:gap-6 text-2xl mb-6">
          <li>
            <a
              href="https://www.facebook.com/rohan.kabir.877108"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                className="p-1.5 text-primary border border-primary rounded-lg hover:text-neutral hover:border-neutral hover:rotate-30 transition"
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
                className="p-1.5 text-primary border border-primary rounded-lg hover:text-neutral hover:border-neutral hover:rotate-30 transition"
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
                className="p-1.5 text-primary border border-primary rounded-lg hover:text-neutral hover:border-neutral hover:rotate-30 transition"
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
                className="p-1.5 text-primary border border-primary rounded-lg hover:text-neutral hover:border-neutral hover:rotate-30 transition"
                icon={faWhatsapp}
              />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1pQNXuHtsJMpAC9OUGX-KrdKq5tHJrnCm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-secondary hidden md:inline-block bg-gradient-to-r from-info to-neutral text-accent font-bold px-6 py-2 rounded-lg shadow-md hover:from-primary hover:to-info transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
