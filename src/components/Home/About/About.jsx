import React, { useState, useEffect } from "react";
import Card from "./Card";
import Intro from "./Intro";
import Skills from "./Skills";
import { motion } from "framer-motion";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconBounce = {
    hidden: { scale: 0 },
    visible: {
      scale: [1, 1.3, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center">
        About <span className="text-neutral">Me</span>
      </h2>
      <p className="text-center text-info/80 mt-3">
        A passionate Full-Stack / MERN Stack Developer with a strong foundation
        in modern web technologies
      </p>

      {/* Card */}
      {isMobile ? (
        <div className="mt-6">
          <Card />
        </div>
      ) : (
        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <Card />
        </motion.div>
      )}

      {/* Flexbox for Intro & Skills */}
      <section className="mt-12 flex flex-col md:flex-row items-start mx-2">
        {/* Intro */}
        {isMobile ? (
          <div className="flex-1">
            <Intro />
          </div>
        ) : (
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
          >
            <Intro />
          </motion.div>
        )}

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6 md:mx-6">
          <div className="absolute inset-0 flex items-center md:justify-center">
            <div className="w-full md:w-px h-px md:h-full bg-gray-300"></div>
          </div>
          {isMobile ? (
            <div className="relative bg-base-100 p-2 rounded-full shadow-md border border-primary">
              <span className="text-primary text-xl">⚡</span>
            </div>
          ) : (
            <motion.div
              className="relative bg-base-100 p-2 rounded-full shadow-md border border-primary"
              initial="hidden"
              animate="visible"
              variants={iconBounce}
            >
              <span className="text-primary text-xl">⚡</span>
            </motion.div>
          )}
        </div>

        {/* Skills */}
        {isMobile ? (
          <div className="flex-1">
            <Skills />
          </div>
        ) : (
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
          >
            <Skills />
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default About;
