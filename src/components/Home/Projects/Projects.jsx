import React, { useState } from "react";
import img1 from "../../../assets/Screenshot 2025-08-08 170020.png";
import img2 from "../../../assets/Screenshot 2025-08-08 165352.png";
import img3 from "../../../assets/Screenshot 2025-08-08 175058.png";
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
    challenges: [
      "Integrating Stripe payments securely",
      "Displaying 64 district map markers dynamically",
    ],
    improvements: [
      "Add AI-based delivery route optimization",
      "Implement SMS notifications",
    ],
    features: [
      "1. User-friendly parcel booking system",
      "2. Real-time parcel tracking with tracking ID",
      "3. Stripe payment integration for secure transactions",
      "4. Admin panel for parcel management",
      "5. Rider application system with approval workflow",
      "6. Dynamic map showing 64 district service coverage",
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
    challenges: [
      "Role-based authentication with Firebase Admin",
      "Real-time donation updates",
    ],
    improvements: ["Mobile app version", "AI-based donation suggestion system"],
    features: [
      "1. Role-based access for users, restaurants, and charities",
      "2. Verified donations by admin before publishing",
      "3. Request and confirm donation pickup system",
      "4. Save to favorites for future reference",
      "5. Charity can leave reviews on donations",
      "6. Featured donations displayed on homepage",
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
    challenges: [
      "Implementing rich text editor for articles",
      "Ensuring responsive and animated layouts with Framer Motion",
    ],
    improvements: ["Add comment system", "Enable article categories and tags"],
    features: [
      "1. Create, edit, and delete articles in real-time",
      "2. Rich text editor for better writing experience",
      "3. Responsive and animated UI with Framer Motion",
      "4. Search and filter articles dynamically",
      "5. User authentication and role-based access",
      "6. Interactive dashboard for managing posts",
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
        {projects.map((project) => {
          const shownTech = project.techStack.slice(0, 3);
          const remaining = project.techStack.length - shownTech.length;

          return (
            <div
              key={project.id}
              className="bg-secondary shadow-2xl shadow-primary/80 rounded-2xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-neutral transition-transform"
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
                  {shownTech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary text-secondary px-2 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {remaining > 0 && (
                    <span className="bg-neutral text-secondary px-2 py-1 rounded text-sm font-medium">
                      +{remaining} more
                    </span>
                  )}
                </div>

                {/* Features Preview */}
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

                {/* Open Modal Button */}
                <div className="flex gap-2 items-center mt-4">
                  {/* Live Link Button - grows to maximum width, simple border, no background */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center border border-primary p-3 rounded-lg text-primary font-medium hover:bg-primary/10 transition"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="mr-2"
                    />
                    Live Project
                  </a>

                  {/* Info / Modal Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="border border-primary p-3 rounded-lg text-primary hover:bg-primary/10 transition"
                    aria-label="View Project Details"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </button>

                  {/* GitHub Button */}
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="border border-primary p-3 rounded-lg text-primary hover:bg-primary/10 transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog open className="modal">
          <div className="modal-box max-w-3xl">
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

            <div className="flex gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-neutral text-secondary px-4 py-2 rounded-lg hover:bg-neutral/80"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.githubClient}
                target="_blank"
                rel="noreferrer"
                className="bg-secondary border border-primary px-4 py-2 rounded-lg hover:bg-secondary/80"
              >
                GitHub
              </a>
            </div>

            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Projects;
