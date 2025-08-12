import Navbar from "../components/Navbar";
import Home from "../components/Home/Home/Home";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-[#F8F8EC] pt-16">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto ">
        {" "}
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
