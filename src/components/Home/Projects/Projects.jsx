import React from "react";
import { Link } from "react-router";
import img1 from "../../../assets/Screenshot 2025-08-08 170020.png";
import img2 from "../../../assets/Screenshot 2025-08-08 165352.png";
import img3 from "../../../assets/Screenshot 2025-08-08 175058.png";

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
  },
];

const Projects = () => {
  return (
    <section className=" py-10 max-w-7xl mx-auto bg-secondary my-16">
      <h2 className="text-3xl text-primary font-bold text-center mb-10">
        🚀 My Projects
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 mx-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-100 shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-3 text-primary flex-grow line-clamp-3">
                {project.description}
              </p>

              <h4 className="font-semibold mb-2">🛠 Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-secondary px-2 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.id}`}
                className="mt-auto bg-secondary px-4 py-2 rounded-lg hover:bg-primary/40 transition-colors duration-300 text-center text-primary font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
