import img from "../../../assets/IMG-20221009-WA0000.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-[#24583C] to-[hsl[#F8F8EC] text-white flex flex-col md:flex-row items-center md:justify-evenly p-8 shadow-2xl">
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
          <span className="md:text-5xl text-green-900 animate-pulse">
            Rohan Kabir
          </span>{" "}
          👋
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-3">
          💻 MERN Stack Developer 🚀
        </p>
        <p className="text-lg text-white">
          Passionate about building modern, scalable web applications with clean
          UI ✨ and efficient backend architecture ⚡.
        </p>
        <a href="
        https://docs.google.com/document/d/1oQzn6bXB0g_AulOqvlK8RSG0e58VKB1XXZ-_etP8VC4/edit?usp=sharing"
          // add your resume link here
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
