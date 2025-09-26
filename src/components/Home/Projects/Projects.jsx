import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/Screenshot 2025-08-08 170020.png";
import img2 from "../../../assets/Screenshot 2025-09-26 005136.png";
import img3 from "../../../assets/Screenshot 2025-08-08 175058.png";
import img4 from "../../../assets/jobportal.png";
import img5 from "../../../assets/word.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: "1",
    name: "Parcel Delivery Website",
    image: img1,
    techStack: ["React", "TailwindCSS", "MongoDB", "Express.js", "Stripe"],
    description:
      "A complete MERN stack parcel delivery application with payment integration and parcel tracking.",
    liveLink: "https://zap-project-5e0b5.web.app/",
    githubClient: "https://github.com/RohanR05/Courier-Site",
    features: [
      "User-friendly parcel booking system",
      "Real-time parcel tracking with tracking ID",
      "Stripe payment integration for secure transactions",
      "Admin panel for parcel management",
      "Rider application system with approval workflow",
      "Dynamic map showing 64 district service coverage",
    ],
  },
  {
    id: "2",
    name: "Food Waste Reduction Platform",
    image: img2,
    techStack: ["React", "Firebase", "MongoDB", "Express.js", "JWT"],
    description:
      "Platform connecting restaurants with charities to donate surplus food.",
    liveLink: "https://assignment-12-7f281.web.app/",
    githubClient: "https://github.com/RohanR05/Food_Donation",
    features: [
      "Role-based access for users, restaurants, and charities",
      "Verified donations by admin before publishing",
      "Request and confirm donation pickup system",
      "Save to favorites for future reference",
      "Charity can leave reviews on donations",
      "Featured donations displayed on homepage",
    ],
  },
  {
    id: "3",
    name: "Article Posting Platform",
    image: img3,
    techStack: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "MongoDB",
      "Express.js",
    ],
    description:
      "A dynamic article posting platform where users can create, edit, and interact with blog articles in real-time.",
    liveLink: "https://assignment-11-49577.web.app/",
    githubClient: "https://github.com/RohanR05/Article-Post",
    features: [
      "Create, edit, and delete articles in real-time",
      "Rich text editor for better writing experience",
      "Responsive and animated UI with Framer Motion",
      "Search and filter articles dynamically",
      "User authentication and role-based access",
      "Interactive dashboard for managing posts",
    ],
  },
  {
    id: "4",
    name: "Modern Job Portal",
    image: img4, // <-- make sure you import or add an image for this project
    techStack: [
      "Next.js 13+",
      "React",
      "TailwindCSS",
      "DaisyUI",
      "ShadCN UI",
      "NextAuth",
      "MongoDB",
      "Node.js",
    ],
    description:
      "A modern job portal where applicants can browse and apply for jobs, while HR or admins can post and manage listings. Built with Next.js 13+, MongoDB, NextAuth, Tailwind CSS, DaisyUI, and ShadCN UI.",
    liveLink: "https://job-portal-alpha-snowy.vercel.app/", // replace with actual live link if deployed
    githubClient: "https://github.com/RohanR05/internNaki-", // replace with actual repo
    features: [
      "Browse available jobs with filtering by location, company, or employment type",
      "View detailed job descriptions, requirements, salary, and benefits",
      "Register and login using email/password or Google OAuth",
      "Live error messages for login and registration",
      "Apply to jobs and navigate easily with 'Back to Jobs' buttons",
      "Dark mode & light mode toggle with custom colors",
      "Post new jobs with full details (title, company, description, requirements, salary, benefits, deadlines)",
      "Manage job listings with role-based authentication and authorization",
      "Tailwind CSS + DaisyUI + ShadCN UI for a clean, responsive interface",
      "Light & Dark themes with custom brand colors",
    ],
  },
  {
    id: "5",
    name: "English-Word",
    image: img5, // import or assign an image/icon for this project
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "A web app focused on English vocabulary / word learning, lookup, and practice—built to help users explore, test, and improve their word knowledge.",
    liveLink: "https://englishwordbyr.netlify.app/", // replace with your actual live link
    githubClient: "https://github.com/RohanR05/English-Word",
    features: [
      "Search and lookup English words and definitions",
      "Save favorite words for later review",
      "Quiz mode to test vocabulary knowledge",
      "Responsive layout for mobile & desktop",
      "Light and dark theme toggling",
      "History of looked up words",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-10 max-w-7xl mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured <span className="text-neutral">Projects</span>
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 mx-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-secondary shadow-2xl shadow-primary/80 rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl text-neutral font-bold mb-2">
                {project.name}
              </h3>
              <p className="mb-3 text-primary flex-grow line-clamp-3">
                {project.description}
              </p>

              <h4 className="font-semibold mb-2">🛠 Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-secondary px-2 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="bg-neutral text-secondary px-2 py-1 rounded text-sm font-medium">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              <h4 className="font-semibold mb-2">✨ Key Features:</h4>
              <ul className="list-disc list-inside text-primary text-sm mb-4">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
                {project.features.length > 3 && (
                  <li className="italic text-neutral">
                    +{project.features.length - 3} more...
                  </li>
                )}
              </ul>

              {/* Buttons */}
              <div className="flex gap-2 items-center mt-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex justify-center items-center border border-primary p-3 rounded-lg text-primary font-medium hover:bg-primary/10 transition"
                  whileHover={{ scale: 1.03 }}
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="mr-2"
                  />
                  Live Project
                </motion.a>

                <motion.button
                  onClick={() => setSelectedProject(project)}
                  className="border border-primary p-3 rounded-lg text-primary hover:bg-primary/10 transition"
                  aria-label="View Project Details"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                </motion.button>

                <motion.a
                  href={project.githubClient}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-primary p-3 rounded-lg text-primary hover:bg-primary/10 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog open className="modal">
          <motion.div
            className="modal-box max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-neutral mb-4">
              {selectedProject.name}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4"
            />
            <p className="text-primary mb-4">{selectedProject.description}</p>

            <h4 className="font-semibold mb-2">✨ Features:</h4>
            <ul className="list-decimal list-inside text-primary mb-4 space-y-1">
              {selectedProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h4 className="font-semibold mb-2">🛠 Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary text-secondary px-2 py-1 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </motion.div>
        </dialog>
      )}
    </section>
  );
};

export default Projects;
