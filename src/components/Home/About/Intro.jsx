import React from "react";

const Intro = () => {
  return (
    <div>
      <div >
        <h2 className="text-primary font-bold text-center text-4xl mb-4">
          Some Info
        </h2>
        {/* Introduction */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-neutral">
            👋 Introduction
          </h3>
          <p className="leading-relaxed text-primary font-medium text-lg">
            Hi! I’m{" "}
            <strong className="text-2xl text-primary">Rohan Kabir</strong>, a
            passionate MERN Stack Developer 💻 with a love for crafting clean,
            scalable web applications. I’m also pursuing a BBA degree 🎓. In
            school, I used to lead prayers 🙏 and serve as a mentor — helping
            others grow.
          </p>
        </div>

        {/* Programming Journey */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-neutral">
            🚀 My Programming Journey
          </h3>
          <p className="leading-relaxed text-primary font-medium text-lg">
            My programming journey began a few years ago when I discovered the
            power of JavaScript ⚡. I started learning HTML, CSS, Tailwind CSS,
            and JavaScript from YouTube tutorials 📺. Later, I completed a
            course with Programming Hero 🚀. Now, I am a MERN Stack Developer,
            continuously growing and sharpening my skills 📚.
          </p>
        </div>

        {/* Work Enjoyment */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-neutral">
            💡 The Type of Work I Enjoy
          </h3>
          <p className="leading-relaxed text-primary font-medium text-lg">
            I enjoy solving complex problems, optimizing code, and exploring new
            technologies 🔍. Whether designing beautiful UIs with React or
            building robust REST APIs with Node.js and Express, I love making
            life easier for users through efficient solutions.
          </p>
        </div>

        {/* Hobbies and Interests */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-3 text-neutral">
            ⚽ Hobbies & Interests Outside Programming
          </h3>
          <p className="leading-relaxed text-primary font-medium text-lg">
            Outside programming, I’m passionate about playing volleyball 🏐,
            analyzing football matches ⚽, and farming 🌱 — activities that keep
            me balanced and inspired.
          </p>
        </div>

        {/* Personality */}
        <div>
          <h3 className="text-3xl font-semibold mb-3 text-neutral">
            🌟 About My Personality
          </h3>
          <p className="leading-relaxed italic text-primary font-medium text-lg">
            I have a calm and composed mind, strong problem-solving skills, and
            the ability to handle tough situations thoughtfully. With nearly a
            year of experience as a Mass Manager and former Scout, I’ve honed
            leadership and organizational skills, including directing school
            prayers in front of 650+ students. I thrive in collaborative
            environments and approach challenges with patience, focus, and
            responsibility 🤝.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
