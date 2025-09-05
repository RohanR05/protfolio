import React from "react";
import { useParams, Link } from "react-router";
import img1 from "../../../assets/Screenshot 2025-08-08 170020.png";
import img2 from "../../../assets/Screenshot 2025-08-08 165352.png";
import img3 from "../../../assets/Screenshot 2025-08-08 175058.png";

// Badge URLs for tech stack
const techBadges = {
  React: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=flat-square",
  TailwindCSS: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square",
  MongoDB: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square",
  "Express.js": "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat-square",
  Stripe: "https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white&style=flat-square",
  Firebase: "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-square",
  JWT: "https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens&logoColor=white&style=flat-square",
  "Framer Motion": "https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white&style=flat-square",
};

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

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Project Not Found
        </h2>
        <Link
          to="/projects"
          className="text-primary underline hover:text-primary/80"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8 bg-secondary rounded-lg shadow mt-10">
      <h1 className="text-4xl font-bold mb-6 text-primary">{project.name}</h1>

      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <p className="mb-6 text-lg text-primary">{project.description}</p>

      <h3 className="text-2xl font-semibold mb-2 text-primary">
        🛠 Main Tech Stack:
      </h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <img
            key={tech}
            src={techBadges[tech]}
            alt={tech}
            title={tech}
            className="h-8"
          />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-2 text-primary">
        ⚠ Challenges Faced:
      </h3>
      <ul className="list-disc list-inside mb-6 text-primary">
        {project.challenges.map((ch, i) => (
          <li key={i}>{ch}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-primary">
        🔮 Potential Improvements:
      </h3>
      <ul className="list-disc list-inside mb-6 text-primary">
        {project.improvements.map((imp, i) => (
          <li key={i}>{imp}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-secondary px-5 py-2 rounded hover:bg-primary/80 transition font-semibold"
        >
          Live Project
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noreferrer"
          className="bg-base-100 text-primary px-5 py-2 rounded border border-primary hover:bg-primary hover:text-secondary transition font-semibold"
        >
          GitHub Repo (Client)
        </a>
      </div>

      <Link
        to="/"
        className="inline-block mt-8 text-primary underline hover:text-primary/80"
      >
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetails;
