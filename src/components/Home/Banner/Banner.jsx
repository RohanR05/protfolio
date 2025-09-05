import img from "../../../assets/IMG-20221009-WA0000.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-primary to-secondary text-white flex flex-col md:flex-row items-center md:justify-evenly p-8 shadow-2xl">
      {/* Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          className="w-48 h-48 md:w-72 md:h-74 object-cover rounded-full border-4 border-white shadow-lg"
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
        <p className="text-lg text-secondary">
          Passionate about building modern, scalable web applications with clean
          UI ✨ and efficient backend architecture ⚡.
        </p>
        <a
          href="
       https://drive.google.com/file/d/180oEGkCsjBwAmAoht8vH36QYI19XcP4M/view?usp=sharing"
          // add your resume link here
          target="_blank"
          rel="noopener noreferrer"
          className="btn border border-white bg-gradient-to-r from-[#051622] to-[#24583C] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-[#24583C] hover:to-[#051622] transition duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
