import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faSearch,
  faLifeRing,
  faCode,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AdditionalServices = () => {
  const extraServices = [
    {
      id: "1",
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and SEO.",
      icon: faTachometerAlt,
      direction: "left",
    },
    {
      id: "2",
      title: "SEO Implementation",
      description: "On-page SEO optimization for better search rankings.",
      icon: faSearch,
      direction: "right",
    },
    {
      id: "3",
      title: "Maintenance & Support",
      description: "Ongoing support and updates for your applications.",
      icon: faLifeRing,
      direction: "up",
    },
    {
      id: "4",
      title: "Code Review & Refactoring",
      description: "Improve code quality and maintainability.",
      icon: faCode,
      direction: "down",
    },
  ];

  // Variants for individual card animations
  const cardVariants = {
    hidden: (direction) => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -50 };
        case "right":
          return { opacity: 0, x: 50 };
        case "up":
          return { opacity: 0, y: 50 };
        case "down":
          return { opacity: 0, y: -50 };
        default:
          return { opacity: 0 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-6">
        Additional <span className="text-neutral">Services</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-4">
        {extraServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-accent p-5 rounded-2xl shadow-xl shadow-primary/50 flex flex-col items-center text-center cursor-pointer"
            custom={service.direction}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="text-3xl text-neutral mb-3">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-primary/80">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="md:w-2/3 lg:w-1/2 mx-auto mt-12 text-center p-8 bg-secondary rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-2">
          Ready to Start Your Project?
        </h2>
        <p className="text-primary/80 mb-4">
          Let's discuss your requirements and create something amazing together
        </p>
        <motion.button
          className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 transition"
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Consultation
          <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AdditionalServices;
