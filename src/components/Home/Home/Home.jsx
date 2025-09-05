import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Education from "../Educaion/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Hook to check if screen is small (sm breakpoint)
const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)"); // sm breakpoint in Tailwind
    setIsSmall(mq.matches);

    const handler = (e) => setIsSmall(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return isSmall;
};

const SectionWrapper = ({ children, animation }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isSmall = useIsSmallScreen();

  if (isSmall) {
    return <div ref={ref}>{children}</div>; // ❌ No animation on small screens
  }

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
    <div className="my-8 md:my-16 m-1">
      <SectionWrapper
        animation={{
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <Banner />
      </SectionWrapper>

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

      <SectionWrapper
        animation={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Education />
      </SectionWrapper>

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
