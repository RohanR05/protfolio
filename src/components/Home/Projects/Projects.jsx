import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../../assets/courier.webp";
import img2 from "../../../assets/food.webp";
import img3 from "../../../assets/article.webp";
import img4 from "../../../assets/jobportal.webp";
import img5 from "../../../assets/word.webp";

// Motion variants for variety
const variants = [
  { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }, // slide up
  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }, // slide from left
  { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }, // slide from right
  { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }, // zoom in
  { hidden: { opacity: 0, rotate: -5 }, visible: { opacity: 1, rotate: 0 } }, // slight rotate
];

// Memoized Project Card
const ProjectCard = React.memo(({ project, index, onSelect }) => {
  const variant = variants[index % variants.length]; // rotate through variants

  return (
    <motion.div
      key={project.id}
      className="bg-secondary shadow-xl rounded-2xl overflow-hidden flex flex-col"
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl text-neutral font-bold mb-2">{project.name}</h3>
        <p className="mb-3 text-primary flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Show only up to 3 technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="bg-primary/10 text-neutral px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="bg-primary/20 text-neutral px-2 py-1 rounded text-xs font-medium">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 items-center mt-auto">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex justify-center items-center border border-primary p-3 rounded-lg text-primary font-medium hover:bg-primary/10 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} className="mr-2" />
            Live
          </motion.a>

          <motion.button
            onClick={() => onSelect(project)}
            className="border border-primary p-3 rounded-lg text-primary hover:bg-primary/10 transition"
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
  );
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      techStack: ["React", "TailwindCSS", "Framer Motion", "MongoDB", "Express.js"],
      description:
        "A dynamic article posting platform where users can create, edit, and interact with blog articles.",
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
      image: img4,
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
        "A modern job portal where applicants can browse and apply for jobs, while HR or admins can post and manage listings.",
      liveLink: "https://job-portal-alpha-snowy.vercel.app/",
      githubClient: "https://github.com/RohanR05/internNaki-",
      features: [
        "Browse jobs with filtering by location, company, or type",
        "Detailed job descriptions with salary & benefits",
        "Email/Google OAuth with NextAuth",
        "Live error messages for login and registration",
        "Apply to jobs with 'Back to Jobs' navigation",
        "Light/Dark mode toggle with custom brand colors",
        "Role-based authentication for job posting & management",
      ],
    },
    {
      id: "5",
      name: "English-Word",
      image: img5,
      techStack: ["React", "JavaScript", "HTML", "CSS"],
      description:
        "A web app focused on English vocabulary / word learning, lookup, and practice.",
      liveLink: "https://englishwordbyr.netlify.app/",
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

  const handleSelect = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured <span className="text-neutral">Projects</span>
      </h2>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 mx-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog open className="modal">
          <motion.div
            className="modal-box max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-neutral mb-4">
              {selectedProject.name}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              loading="lazy"
              className="rounded-lg mb-4"
            />
            <p className="text-primary mb-4">{selectedProject.description}</p>

            <h4 className="font-semibold mb-2">✨ Features:</h4>
            <ul className="list-disc list-inside text-primary mb-4 space-y-1">
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
