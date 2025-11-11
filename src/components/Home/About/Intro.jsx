import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faRocket,
  faLightbulb,
  faFutbol,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const simpleFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      icon: faHandSparkles,
      title: "Introduction",
      content: (
        <>
          Hi! I’m <strong>Rohan Kabir</strong>, a passionate MERN Stack
          Developer with a love for crafting clean, scalable web applications.
          I’m also pursuing a BBA degree. During school, I led prayers and
          served as a mentor, helping others grow.
        </>
      ),
    },
    {
      icon: faRocket,
      title: "My Programming Journey",
      content: (
        <>
          My programming journey began when I discovered the power of
          JavaScript. I started learning HTML, CSS, Tailwind CSS, and JavaScript
          through YouTube tutorials. Later, I completed a course with
          Programming Hero. Now, I’m a MERN Stack Developer continuously
          sharpening my skills.
        </>
      ),
    },
    {
      icon: faLightbulb,
      title: "The Type of Work I Enjoy",
      content: (
        <>
          I enjoy solving complex problems, optimizing code, and exploring new
          technologies. Whether designing elegant UIs with React or building
          robust REST APIs with Node.js and Express, I love creating efficient,
          user-friendly solutions.
        </>
      ),
    },
    {
      icon: faFutbol,
      title: "Hobbies & Interests Outside Programming",
      content: (
        <>
          Outside programming, I’m passionate about playing volleyball,
          analyzing football matches, and spending time farming — activities
          that keep me balanced and inspired.
        </>
      ),
    },
    {
      icon: faStar,
      title: "About My Personality",
      content: (
        <>
          I have a calm and thoughtful mindset with strong problem-solving and
          leadership skills. With experience as a Mass Manager and Scout, I’ve
          led prayers for 650+ students and developed patience, focus, and
          responsibility in every challenge.
        </>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-neutral font-bold text-center text-4xl mb-4">
        Some Info
      </h2>

      <div className="mx-4">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isMobile ? simpleFade : fadeUp}
          >
            <h3 className="text-3xl font-semibold mb-3 text-primary flex items-center gap-2">
              <FontAwesomeIcon icon={section.icon} className="text-primary" />
              {section.title}
            </h3>
            <p className="leading-relaxed text-info font-medium text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
