import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Education from "../Educaion/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({ children, animation }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="my-16 m-1">
      {/* Banner - Slide from Top */}
      <SectionWrapper
        animation={{
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <Banner />
      </SectionWrapper>

      {/* About - Slide from Left */}
      <div id="about">
        <SectionWrapper
          animation={{
            hidden: { x: -150, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <About />
        </SectionWrapper>
      </div>

      {/* Education - Fade In */}
      <SectionWrapper
        animation={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Education />
      </SectionWrapper>

      {/* Projects - Slide from Right */}
      <div id="projects">
        <SectionWrapper
          animation={{
            hidden: { x: 150, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <Projects />
        </SectionWrapper>
      </div>

      {/* Contact - Scale Up */}
      <div id="contact">
        <SectionWrapper
          animation={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
        >
          <Contact />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Home;
