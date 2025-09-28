import React, { useMemo } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Education from "../Educaion/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Myservices from "../MyServices/Myservices";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import Testimonial from "../Testimonial/Testimonial";
import Loading from "../Loading/Loading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Hook to check if screen is small (sm breakpoint)
const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsSmall(mq.matches);

    const handler = (e) => setIsSmall(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return isSmall;
};

// Section wrapper for scroll animations
const SectionWrapper = ({ children, animation, stagger = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isSmall = useIsSmallScreen();

  if (isSmall) return <div ref={ref}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={
        stagger
          ? { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }
          : animation
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Memoized animation variants
  const bannerAnim = useMemo(
    () => ({
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    }),
    []
  );

  const aboutAnim = useMemo(
    () => ({
      hidden: { x: -150, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    }),
    []
  );

  const educationAnim = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    []
  );

  const projectsAnim = useMemo(
    () => ({
      hidden: { x: 150, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    }),
    []
  );

  const contactAnim = useMemo(
    () => ({
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    }),
    []
  );

  if (loading) return <Loading />;

  return (
    <div className="relative my-8 md:my-16 m-1">
      {/* Banner */}
      <SectionWrapper animation={bannerAnim}>
        <Banner />
      </SectionWrapper>

      {/* About */}
      <div id="about">
        <SectionWrapper animation={aboutAnim}>
          <About />
        </SectionWrapper>
      </div>

      {/* Education */}
      <SectionWrapper animation={educationAnim}>
        <Education />
      </SectionWrapper>

      {/* Projects */}
      <div id="projects">
        <SectionWrapper animation={projectsAnim}>
          <Projects />
        </SectionWrapper>
      </div>

      {/* My Services */}
      <div id="myServices">
        <SectionWrapper stagger={true}>
          <Myservices />
        </SectionWrapper>
      </div>

      {/* Additional Services */}
      <div id="additionalServices">
        <SectionWrapper stagger={true}>
          <AdditionalServices />
        </SectionWrapper>
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <SectionWrapper stagger={true}>
          <Testimonial />
        </SectionWrapper>
      </div>

      {/* Contact */}
      <div id="contact">
        <SectionWrapper animation={contactAnim}>
          <Contact />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Home;
