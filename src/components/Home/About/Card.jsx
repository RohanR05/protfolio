import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  const data = [
    {
      id: "1",
      number: "1+",
      title: "Years Experience",
      icon: "💼",
    },
    {
      id: "2",
      number: "4+",
      title: "Projects Completed",
      icon: "📁",
    },
    {
      id: "3",
      number: "1+",
      title: "Certifications",
      icon: "🎓",
    },
    {
      id: "4",
      number: "2024",
      title: "Started Year",
      icon: "📅",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mx-3 mt-4 md:mt-10">
      {data.map((d, index) => (
        <motion.div
          key={d.id}
          className="shadow-xl shadow-primary/40 py-4 rounded-2xl text-center bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        >
          <h2 className="text-2xl">{d.icon}</h2>
          <p className="text-neutral text-3xl font-semibold">{d.number}</p>
          <p className="text font-medium text-primary/90">{d.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
