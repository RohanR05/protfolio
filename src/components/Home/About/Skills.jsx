import React from "react";

const Skills = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-primary text-center">
        My Skills
      </h2>

      {/* Languages */}
      <div className="mb-8 bg-secondary py-8 px-4 rounded-2xl shadow-2xl shadow-primary/60">
        <h3 className="text-2xl font-semibold mb-2 text-neutral">
          📝 Languages
        </h3>
        <p className="mb-4 text-primary max-w-xl">
          These are the core programming languages I use to build the foundation
          of my projects.
        </p>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
            alt="HTML5"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"
            alt="CSS3"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
            alt="JavaScript"
            className="h-9 w-auto"
          />
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-8 bg-secondary py-8 px-4 rounded-2xl shadow-xl shadow-primary/40">
        <h3 className="text-2xl font-semibold mb-2 text-neutral">
          ⚙️ Frameworks & Libraries
        </h3>
        <p className="mb-4 text-primary max-w-xl">
          Tools and libraries I use to build interactive UIs, handle data
          fetching, and style my applications.
        </p>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"
            alt="React"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"
            alt="Next.js"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white"
            alt="Tailwind CSS"
            className="h-9 w-auto"
          />{" "}
          <img
            src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"
            alt="Axios"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white"
            alt="shadcn/ui"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"
            alt="Express.js"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react-query&logoColor=white"
            alt="TanStack Query"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/DaisyUI-1A73E8?style=flat-square&logo=daisyui&logoColor=white"
            alt="DaisyUI"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white"
            alt="Framer Motion"
            className="h-9 w-auto"
          />
        </div>
      </div>

      {/* Backend & Database */}
      <div className="mb-8 bg-secondary py-8 px-4 rounded-2xl shadow-xl shadow-primary/40">
        <h3 className="text-2xl font-semibold mb-2 text-neutral">
          🗄️ Backend & Database
        </h3>
        <p className="mb-4 text-primary max-w-xl">
          Backend technologies and databases I use to build APIs, handle
          authentication, and manage data storage.
        </p>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"
            alt="Node.js"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
            alt="MongoDB"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"
            alt="Firebase"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white"
            alt="JWT"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/CORS-339933?style=flat-square"
            alt="CORS"
            className="h-9 w-auto"
          />
        </div>
      </div>

      {/* Tools & Others */}
      <div className="bg-secondary py-8 px-4 rounded-2xl shadow-xl shadow-primary/40">
        <h3 className="text-2xl font-semibold mb-2 text-neutral">
          🛠️ Tools & Others
        </h3>
        <p className="mb-4 text-primary max-w-xl">
          Development tools, payment gateways, hosting platforms, and utilities
          that enhance my workflow and project quality.
        </p>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
            alt="VSCode"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Stripe-6772E5?style=flat-square&logo=stripe&logoColor=white"
            alt="Stripe"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
            alt="Vercel"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"
            alt="Netlify"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Lottie-FF6F00?style=flat-square&logo=lottie&logoColor=white"
            alt="Lottie"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/React_Icons-61DAFB?style=flat-square&logo=react&logoColor=black"
            alt="React Icons"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/SweetAlert2-FF2D55?style=flat-square&logo=sweetalert2&logoColor=white"
            alt="SweetAlert2"
            className="h-9 w-auto"
          />
          <img
            src="https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white"
            alt="Font Awesome"
            className="h-9 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
