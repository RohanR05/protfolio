import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCodeBranch,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: "1",
      title: "Programming Hero",
      description: "Course Completion",
      icon: faGraduationCap,
    },
    {
      id: "2",
      title: "Freelance Projects",
      description: "1+",
      icon: faBriefcase,
    },
    {
      id: "3",
      title: "Group Projects",
      description: "1+",
      icon: faCodeBranch,
    },
    {
      id: "4",
      title: "Personal Projects",
      description: "9",
      icon: faProjectDiagram,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-3">
        Client <span className="text-primary">Testimonials</span>
      </h2>
      <p className="mb-10">
        Feedback from courses, freelance clients, open source projects, and
        personal work
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 p-2 md:p-0">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-secondary p-5 rounded-2xl  shadow-primary/20 shadow-xl flex hover:shadow-primary/50 flex-col items-center cursor-pointer border-l-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-4xl text-primary mb-3"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-info">{item.title}</h3>
            <p className="text-primary font-bold text-2xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
