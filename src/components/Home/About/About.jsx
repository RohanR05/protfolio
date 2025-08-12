import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-16 flex flex-col md:flex-row gap-12">
      
      {/* About Me Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          About Me
        </h2>

        {/* Introduction */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#24583C" }}>
            👋 Introduction
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "#24583C", fontWeight: "500", fontSize: "1.125rem" }}
          >
            Hi! I’m <strong className="text-2xl">Rohan Kabir</strong>, a passionate MERN Stack Developer 💻 with a love for crafting clean, scalable web applications. I’m also pursuing a BBA degree 🎓. In school, I used to lead prayers 🙏 and serve as a mentor — helping others grow.
          </p>
        </div>

        {/* Programming Journey */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#24583C" }}>
            🚀 My Programming Journey
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "#24583C", fontWeight: "500", fontSize: "1.125rem" }}
          >
            My programming journey began a few years ago when I discovered the power of JavaScript ⚡. I started learning HTML, CSS, Tailwind CSS, and JavaScript from YouTube tutorials 📺. Later, I completed a course with Programming Hero 🚀. Now, I am a MERN Stack Developer, continuously growing and sharpening my skills 📚.
          </p>
        </div>

        {/* Work Enjoyment */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#24583C" }}>
            💡 The Type of Work I Enjoy
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "#24583C", fontWeight: "500", fontSize: "1.125rem" }}
          >
            I enjoy solving complex problems, optimizing code, and exploring new technologies 🔍. Whether designing beautiful UIs with React or building robust REST APIs with Node.js and Express, I love making life easier for users through efficient solutions.
          </p>
        </div>

        {/* Hobbies and Interests */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#24583C" }}>
            ⚽ Hobbies & Interests Outside Programming
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "#24583C", fontWeight: "500", fontSize: "1.125rem" }}
          >
            Outside programming, I’m passionate about playing volleyball 🏐, analyzing football matches ⚽, and farming 🌱 — activities that keep me balanced and inspired.
          </p>
        </div>

        {/* Personality */}
        <div>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#24583C" }}>
            🌟 About My Personality
          </h3>
          <p
            className="leading-relaxed italic"
            style={{ color: "#24583C", fontWeight: "500", fontSize: "1.125rem" }}
          >
            I’m curious, driven, and friendly, believing that continuous learning and collaboration are essential for growth — both professionally and personally 🤝. I’m also diplomatic and skilled at handling tough situations calmly and thoughtfully.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          My Skills
        </h2>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#24583C" }}>
            📝 Languages
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
            These are the core programming languages I use to build the foundation of my projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
              alt="HTML5"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
              alt="CSS3"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
              alt="JavaScript"
            />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#24583C" }}>
            ⚙️ Frameworks & Libraries
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
            Tools and libraries I use to build interactive UIs, handle data fetching, and style my applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS"
            />
            <img
              src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
              alt="Express.js"
            />
            <img
              src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"
              alt="Axios"
            />
            <img
              src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
              alt="TanStack Query"
            />
            <img
              src="https://img.shields.io/badge/DaisyUI-1A73E8?style=flat-square&logo=daisyui&logoColor=white"
              alt="DaisyUI"
            />
          </div>
        </div>

        {/* Backend & Database */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#24583C" }}>
            🗄️ Backend & Database
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
            Backend technologies and databases I use to build APIs, handle authentication, and manage data storage.
          </p>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"
              alt="Node.js"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
            <img
              src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"
              alt="Firebase"
            />
            <img
              src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white"
              alt="JWT"
            />
            <img
              src="https://img.shields.io/badge/CORS-339933?style=flat-square"
              alt="CORS"
            />
          </div>
        </div>

        {/* Tools & Others */}
        <div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#24583C" }}>
            🛠️ Tools & Others
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
            Development tools, payment gateways, icon fonts, and animations that enhance my development workflow and project quality.
          </p>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
              alt="VSCode"
            />
            <img
              src="https://img.shields.io/badge/Stripe-6772E5?style=flat-square&logo=stripe&logoColor=white"
              alt="Stripe"
            />
            <img
              src="https://img.shields.io/badge/Icon%20Fonts-333333?style=flat-square"
              alt="Icon Fonts"
            />
            <img
              src="https://img.shields.io/badge/Animation-F24E1E?style=flat-square&logo=lottie&logoColor=white"
              alt="Animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
