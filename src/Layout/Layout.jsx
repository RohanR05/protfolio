import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-base-100 pt-16">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto ">
        {" "}
        <Outlet></Outlet>
      </div>{" "}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
