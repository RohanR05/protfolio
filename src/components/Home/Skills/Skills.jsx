import React from "react";

const Skills = () => {
  return (
    <section className=" mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-16">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        My Skills
      </h2>

      {/* Languages */}
      <div className="mb-8">
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: "#24583C" }}
        >
          📝 Languages
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
          These are the core programming languages I use to build the foundation
          of my projects.
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
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: "#24583C" }}
        >
          ⚙️ Frameworks & Libraries
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
          Tools and libraries I use to build interactive UIs, handle data
          fetching, and style my applications.
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
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: "#24583C" }}
        >
          🗄️ Backend & Database
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
          Backend technologies and databases I use to build APIs, handle
          authentication, and manage data storage.
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
        <h3
          className="text-2xl font-semibold mb-2"
          style={{ color: "#24583C" }}
        >
          🛠️ Tools & Others
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">
          Development tools, payment gateways, icon fonts, and animations that
          enhance my development workflow and project quality.
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
    </section>
  );
};

export default Skills;
