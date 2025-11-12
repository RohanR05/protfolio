import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const educations = [
    {
      title: "Secondary School Certificate (SSC) - Science",
      institution: "Sammilani Secondary School Chalitatala, Narail",
      year: "2020",
      icon: <FaSchool className="text-3xl text-primary mb-2" />,
    },
    {
      title: "Higher Secondary Certificate (HSC) - Science",
      institution: "Abdul High City College, Narail",
      year: "2022",
      icon: <FaGraduationCap className="text-3xl text-primary mb-2" />,
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      institution: "National University (Currently Studying)",
      year: "",
      icon: <FaUniversity className="text-3xl text-primary mb-2" />,
    },
  ];

  return (
    <section className="mx-auto p-2 md:p-0">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Educational <span className="text-primary">Qualification</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-secondary rounded-xl p-6 shadow-xl shadow-primary/20 hover:shadow-primary/40 text-center border-l-4 border-primary"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {edu.icon}
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {edu.title}
            </h3>
            <p className="text-info mb-1">{edu.institution}</p>
            {edu.year && (
              <p className="text-info">Year of Completion: {edu.year}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
