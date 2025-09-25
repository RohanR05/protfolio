import React from "react";
import Card from "./Card";
import Intro from "./Intro";
import Skills from "./Skills";

const About = () => {
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

      {/* Flexbox instead of grid → easier for divider */}
      <section className="mt-12 flex flex-col md:flex-row items-start">
        {/* Intro */}
        <div className="flex-1">
          <Intro />
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6 md:mx-6">
          {/* Line */}
          <div className="absolute inset-0 flex items-center md:justify-center">
            <div className="w-full md:w-px h-px md:h-full"></div>
          </div>
          {/* Icon in center */}
          <div className="relative bg-base-100 p-2 rounded-full shadow-md border border-primary">
            <span className="text-primary text-xl">⚡</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex-1">
          <Skills />
        </div>
      </section>
    </div>
  );
};

export default About;
