import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/blackbelt.png";
import img2 from "../../../assets/web11.png";

const Certificate = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        My <span className="text-primary">Achievements </span>
      </motion.h2>

      {/* Certificates Grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 w-full max-w-7xl"
      >
        {/* Certificate 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="card bg-secondary shadow-xl shadow-primary/30 border border-primary/20 hover:shadow-primary/50 transition-all duration-300"
        >
          <figure className="px-4 pt-4">
            <motion.img
              src={img1}
              alt="Black Belt Certificate"
              className="rounded-xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-primary font-semibold">
              Black Belt Certificate
            </h3>
            <p className="text-sm text-info">
              Awarded by Programming Hero for completing all 12 assignments,
              mini projects, mock interview, and final project with excellence.
            </p>
          </div>
        </motion.div>

        {/* Certificate 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="card bg-secondary shadow-xl shadow-primary/30 border border-secondary/40 hover:shadow-primary/50 transition-all duration-300"
        >
          <figure className="px-4 pt-4">
            <motion.img
              src={img2}
              alt="Web Development Certificate"
              className="rounded-xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-primary font-semibold">
              Web Development Completion
            </h3>
            <p className="text-sm text-info">
              Successfully completed the Full Stack Web Development course from
              Programming Hero, mastering MERN stack and modern web practices.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Quote */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-info font-medium"
      >
        “Hard work pays off — this is just the beginning.”
      </motion.p>
    </div>
  );
};

export default Certificate;
