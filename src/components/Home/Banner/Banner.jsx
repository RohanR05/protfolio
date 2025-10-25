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
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-primary shadow-lg"
          src={img}
          alt="Profile"
        />
      </div>

      {/* Text */}
      <div className="md:ml-8 text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-info">
          Hi, I’m{" "}
          <span className="text-3xl md:text-5xl text-neutral">
            <Typewriter
              words={["Rohan Kabir"]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-primary mb-3">
          &lt; MERN Stack Developer /&gt;
        </p>

        <p className="text-lg mb-5 text-info">
          Passionate about building modern, scalable web applications with clean
          UI ✨ and efficient backend architecture ⚡.
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
                className="border border-primary p-1.5 rounded-lg text-primary bg-neutral hover:bg-primary hover:text-neutral transition"
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
                className="border border-primary p-1.5 rounded-lg text-primary bg-neutral  hover:bg-primary hover:text-neutral transition"
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
                className="border border-primary p-1.5 rounded-lg text-primary bg-neutral hover:bg-primary hover:text-neutral transition"
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
                className="border border-primary p-1.5 rounded-lg text-primary bg-neutral hover:bg-primary hover:text-neutral transition"
                icon={faWhatsapp}
              />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://drive.google.com/file/d/180oEGkCsjBwAmAoht8vH36QYI19XcP4M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block md:inline-block btn border-secondary bg-gradient-to-r from-neutral to-primary text-accent font-bold px-6 py-2 rounded-lg shadow-md hover:from-primary hover:to-neutral transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Resume Button */}
      </div>
    </div>
  );
};

export default Banner;
