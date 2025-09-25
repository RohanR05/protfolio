import React from "react";
import Card from "./Card";
import Intro from "./Intro";
import Skills from "./Skills";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconBounce = {
    hidden: { scale: 0 },
    visible: {
      scale: [1, 1.3, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="my-8 md:my-12">
      <h2 className="text-4xl font-bold text-center">
        About <span className="text-neutral">Me</span>
      </h2>
      <p className="text-center text-primary/80 mt-3">
        A passionate Full-Stack / MERN Stack Developer with a strong foundation
        in modern web technologies
      </p>

      <Card />

      {/* Flexbox for intro & skills */}
      <section className="mt-12 flex flex-col md:flex-row items-start mx-2">
        {/* Intro */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Intro />
        </motion.div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6 md:mx-6">
          {/* Line */}
          <div className="absolute inset-0 flex items-center md:justify-center">
            <div className="w-full md:w-px h-px md:h-full bg-gray-300"></div>
          </div>
          {/* Icon in center */}
          <motion.div
            className="relative bg-base-100 p-2 rounded-full shadow-md border border-primary"
            initial="hidden"
            animate="visible"
            variants={iconBounce}
          >
            <span className="text-primary text-xl">⚡</span>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Skills />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
