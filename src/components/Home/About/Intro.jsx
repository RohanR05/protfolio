import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Full animation for larger screens
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Simpler animation for small screens
  const simpleFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      title: "👋 Introduction",
      content: (
        <>
          Hi! I’m <strong className="text-2xl text-primary">Rohan Kabir</strong>, a
          passionate MERN Stack Developer 💻 with a love for crafting clean,
          scalable web applications. I’m also pursuing a BBA degree 🎓. In
          school, I used to lead prayers 🙏 and serve as a mentor — helping
          others grow.
        </>
      ),
    },
    {
      title: "🚀 My Programming Journey",
      content: (
        <>
          My programming journey began a few years ago when I discovered the
          power of JavaScript ⚡. I started learning HTML, CSS, Tailwind CSS,
          and JavaScript from YouTube tutorials 📺. Later, I completed a
          course with Programming Hero 🚀. Now, I am a MERN Stack Developer,
          continuously growing and sharpening my skills 📚.
        </>
      ),
    },
    {
      title: "💡 The Type of Work I Enjoy",
      content: (
        <>
          I enjoy solving complex problems, optimizing code, and exploring new
          technologies 🔍. Whether designing beautiful UIs with React or
          building robust REST APIs with Node.js and Express, I love making
          life easier for users through efficient solutions.
        </>
      ),
    },
    {
      title: "⚽ Hobbies & Interests Outside Programming",
      content: (
        <>
          Outside programming, I’m passionate about playing volleyball 🏐,
          analyzing football matches ⚽, and farming 🌱 — activities that keep
          me balanced and inspired.
        </>
      ),
    },
    {
      title: "🌟 About My Personality",
      content: (
        <>
          I have a calm and composed mind, strong problem-solving skills, and
          the ability to handle tough situations thoughtfully. With nearly a
          year of experience as a Mass Manager and former Scout, I’ve honed
          leadership and organizational skills, including directing school
          prayers in front of 650+ students. I thrive in collaborative
          environments and approach challenges with patience, focus, and
          responsibility 🤝.
        </>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-primary font-bold text-center text-4xl mb-4">
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
            <h3 className="text-3xl font-semibold mb-3 text-neutral">{section.title}</h3>
            <p className="leading-relaxed text-primary font-medium text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
