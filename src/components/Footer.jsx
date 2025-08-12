import { Link } from "react-router"; // use react-router-dom
import img1 from "../assets/facebook_3536394.png";
import img2 from "../assets/github_733609.png";
import img3 from "../assets/linkedin_3992606.png";
import img4 from "../assets/logo_15713434.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#24583C] text-white rounded p-10 mt-16">
      <nav className="grid grid-flow-col gap-4">
        {/* Use Link for internal routes */}
        <Link to="/about" className="link link-hover">
          About us
        </Link>

      </nav>
      <nav>
        <ul className="flex w-72 gap-5">
          {/* External links should use <a> */}
          <li>
            <a href="https://www.facebook.com/rohan.kabir.877108" target="_blank" rel="noreferrer">
              <img src={img1} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://github.com/RohanR05" target="_blank" rel="noreferrer">
              <img src={img2} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rohan-batman/" target="_blank" rel="noreferrer">
              <img src={img3} alt="LinkedIn" />
            </a>
          </li>
          <li>
            {/* Assuming this is your logo, no link or link to home */}
            <Link to="/">
              <img src={img4} alt="Logo" />
            </Link>
          </li>
        </ul>
      </nav>
      <aside>
        <p className="mt-6 text-center text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by Rohan Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
