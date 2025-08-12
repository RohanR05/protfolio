import { createBrowserRouter } from "react-router"; // IMPORTANT: use react-router-dom
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home/Home";
import Projects from "../components/Home/Projects/Projects";
import ProjectDetails from "../components/Home/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // this renders at "/"
        element: <Home />,
      },
      {
        path: "projects", // this renders at "/projects"
        element: <Projects />,
      },
      {
        path: "projects/:id", // this renders at "/projects/123"
        element: <ProjectDetails />,
      },
    ],
  },
]);
