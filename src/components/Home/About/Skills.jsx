import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCogs, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const badgePop = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      title: (
        <>
          <FaCode className="inline-block mr-2 text-primary" />
          Languages
        </>
      ),
      description:
        "These are the core programming languages I use to build the foundation of my projects.",
      badges: [
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
          alt: "HTML5",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
          alt: "CSS3",
        },
        {
          src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
          alt: "JavaScript",
        },
      ],
    },
    {
      title: (
        <>
          <FaCogs className="inline-block mr-2 text-primary" />
          Frameworks & Libraries
        </>
      ),
      description:
        "Tools and libraries I use to build interactive UIs, handle data fetching, and style my applications.",
      badges: [
        {
          src: "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black",
          alt: "React",
        },
        {
          src: "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white",
          alt: "Next.js",
        },
        {
          src: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white",
          alt: "Tailwind CSS",
        },
        {
          src: "https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white",
          alt: "shadcn/ui",
        },
        {
          src: "https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white",
          alt: "Framer Motion",
        },
        {
          src: "https://img.shields.io/badge/DaisyUI-1A73E8?style=flat-square&logo=daisyui&logoColor=white",
          alt: "DaisyUI",
        },
      ],
    },
    {
      title: (
        <>
          <FaDatabase className="inline-block mr-2 text-primary" />
          Backend & Database
        </>
      ),
      description:
        "Backend technologies and databases I use to build APIs, handle authentication, and manage data storage.",
      badges: [
        {
          src: "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
          alt: "Node.js",
        },
        {
          src: "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
          alt: "MongoDB",
        },
        {
          src: "https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black",
          alt: "Firebase",
        },
        {
          src: "https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white",
          alt: "JWT",
        },
      ],
    },
    {
      title: (
        <>
          <FaTools className="inline-block mr-2 text-primary" />
          Tools & Others
        </>
      ),
      description:
        "Development tools, hosting platforms, and utilities that enhance my workflow and project quality.",
      badges: [
        {
          src: "https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white",
          alt: "VSCode",
        },
        {
          src: "https://img.shields.io/badge/Stripe-6772E5?style=flat-square&logo=stripe&logoColor=white",
          alt: "Stripe",
        },
        {
          src: "https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
          alt: "Vercel",
        },
        {
          src: "https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white",
          alt: "Netlify",
        },
        {
          src: "https://img.shields.io/badge/Lottie-FF6F00?style=flat-square&logo=lottie&logoColor=white",
          alt: "Lottie",
        },
        {
          src: "https://img.shields.io/badge/React_Icons-61DAFB?style=flat-square&logo=react&logoColor=black",
          alt: "React Icons",
        },
        {
          src: "https://img.shields.io/badge/SweetAlert2-FF2D55?style=flat-square&logo=sweetalert2&logoColor=white",
          alt: "SweetAlert2",
        },
        {
          src: "https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white",
          alt: "Font Awesome",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-neutral text-center">
        My Skills
      </h2>

      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          className="mb-8 bg-secondary py-8 px-4 rounded-2xl shadow-xl shadow-neutral/20 border border-primary/20 hover:border-primary/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-2 text-primary">
            {section.title}
          </h3>
          <p className="mb-4 text-info max-w-xl">{section.description}</p>
          <div className="flex flex-wrap gap-3">
            {section.badges.map((badge, i) => (
              <motion.img
                key={i}
                src={badge.src}
                alt={badge.alt}
                className="h-9 w-auto"
                variants={badgePop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
