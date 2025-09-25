import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMobileScreenButton,
  faDesktop,
  faPalette,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Myservices = () => {
  const data = [
    {
      id: "1",
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks like React, Next.js, TypeScript, Express.js, Node.js and MongoDB.",
      icon: faLaptopCode,
      gradient: "from-blue-500 to-indigo-500", // normal icon gradient
      hoverGradient: ["#93c5fd", "#c7d2fe"], // lighter gradient for card hover
      types: [
        "Custom Web Apps",
        "Progressive Web Apps",
        "Single Page Applications",
        "Server-Side Rendering",
      ],
    },
    {
      id: "2",
      title: "Responsive Design",
      description:
        "Mobile-first, responsive websites that work flawlessly across all devices.",
      icon: faMobileScreenButton,
      gradient: "from-green-400 to-teal-500",
      hoverGradient: ["#a7f3d0", "#5eead4"],
      types: [
        "Mobile Optimization",
        "Cross-Browser Compatibility",
        "Touch-Friendly Interfaces",
        "Adaptive Layouts",
      ],
    },
    {
      id: "3",
      title: "Frontend Development",
      description:
        "Interactive and responsive user interfaces built with modern web technologies.",
      icon: faDesktop,
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: ["#e9d5ff", "#fbcfe8"],
      types: [
        "React.js, Next.js & Modern JavaScript (ES6+)",
        "Tailwind CSS, HTML5, CSS3, TypeScript",
        "Axios & localStorage Integration",
        "State Management (useState, useEffect, useContext)",
      ],
    },
    {
      id: "4",
      title: "UI/UX Implementation",
      description:
        "Pixel-perfect implementation of modern designs using React and Tailwind CSS, based on tools like Figma or Pixso.",
      icon: faPalette,
      gradient: "from-yellow-400 to-orange-500",
      hoverGradient: ["#fef3c7", "#fed7aa"],
      types: [
        "Figma to React",
        "Design System Creation",
        "Component Libraries",
        "Responsive Layouts & Animations",
      ],
    },
    {
      id: "5",
      title: "Backend Development",
      description:
        "Scalable backend solutions using Node.js, Express.js, MongoDB and integrating third-party services.",
      icon: faServer,
      gradient: "from-red-500 to-rose-500",
      hoverGradient: ["#fecaca", "#fda4af"],
      types: [
        "Express API Development",
        "MongoDB Schema Design",
        "JWT Authentication",
        "Role-Based Access Control",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-4">
        My <span className="text-neutral">Services</span>
      </h2>
      <p className="text-center text-primary mb-10">
        Comprehensive web development services to bring your ideas to life
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4">
        {data.map((service) => (
          <motion.div
            key={service.id}
            className="bg-accent p-5 rounded-2xl shadow-xl shadow-primary/40 cursor-pointer overflow-hidden"
            whileHover={{
              y: -8,
              background: `linear-gradient(135deg, ${service.hoverGradient[0]}, ${service.hoverGradient[1]})`,
              transition: { duration: 0.5 },
            }}
          >
            {/* Icon */}
            <motion.div
              className={`p-4 rounded-lg mb-3 inline-block bg-gradient-to-r ${service.gradient} text-white`}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <FontAwesomeIcon icon={service.icon} className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-primary/80">
              {service.title}
            </h3>
            {/* Description */}
            <p className="opacity-90 mb-3">{service.description}</p>
            {/* Types */}
            <ul className="list-disc list-inside opacity-70 font-medium space-y-1">
              {service.types.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Myservices;
