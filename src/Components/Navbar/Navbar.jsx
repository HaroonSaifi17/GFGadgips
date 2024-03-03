import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); 
  const [navStatus, setNavStatus] = useState(false);

  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus && window.innerWidth <= 770) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div>
      <div className="flex gap-4 px-[5vw] w-full items-center justify-between py-5 text-white min-h-[98px] max-w-screen-2xl mx-auto">
        <div className="-my-4 duration-200">
          <Link to={"/"}>
            {isActive("/") && (
              <img className="h-[80px]" src="/assets/logo.png" alt="logo" />
            )}
            {isActive("/about") && (
              <p className="font-semibold text-4xl">About Us</p>
            )}
            {isActive("/team") && (
              <p className="font-semibold text-4xl">Our Team</p>
            )}
            {isActive("/department") && (
              <p className="font-semibold text-4xl">Departments</p>
            )}
            {isActive("/events") && (
              <p className="font-semibold text-4xl">Events</p>
            )}
            {isActive("/contact") && (
              <p className="font-semibold text-4xl">Contact Us</p>
            )}
          </Link>
        </div>
        <div
          className={`max-md:fixed max-md:w-[60vw] duration-300  z-10 max-md:h-full max-md:bg-[#1a1a1a] max-md:flex-col items-center max-md:justify-center max-md:shadow flex gap-6 justify-between  ease-in max-md:top-0 ${
            navStatus ? "right-0" : "-right-[60vw]"
          }`}
        >
          <Link className={`${isActive("/")} rounded-full ease-out  hover:text-[#7133f5] duration-300`}  onClick={toggleNav} to={"/"}>
            Home
          </Link>
          <Link
className={`${isActive("/about")} rounded-full ease-out  hover:text-[#7133f5]  duration-300`}  
            onClick={toggleNav}
            to={"/about"}
          >
            About
          </Link>
          <Link 
className={`${isActive("/team")} rounded-full ease-out  hover:text-[#7133f5] duration-300`}  
            onClick={toggleNav} to={"/team"}>
            Team
          </Link>
          <Link
className={`${isActive("/department")} rounded-full ease-out  hover:text-[#7133f5]  duration-300`}  
            onClick={toggleNav}
            to={"/department"}
          >
            Department
          </Link>
          <Link
className={`${isActive("/events")}  rounded-full ease-out  hover:text-[#7133f5]  duration-300`}  
            onClick={toggleNav}
            to={"/events"}
          >
            Events
          </Link>
          <Link
className={`${isActive("/contact")} rounded-full ease-out  hover:text-[#7133f5] duration-300`}  
            onClick={toggleNav}
            to={"/contact"}
          >
            Contact
          </Link>
        </div>
        <div className=" hidden max-md:block ">
          <a onClick={toggleNav} className="flex   items-center z-10  relative">
            <div className="w-10  flex flex-col ease-out justify-center gap-2 items-end">
              <div
                className={`h-1 rounded-md w-full  duration-300 bg-white ${
                  navStatus ? "rotate-45 translate-y-3" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-[75%] rounded-md  duration-300${
                  navStatus ? "bg-transparent" : " bg-white "
                }`}
              ></div>
              <div
                className={`h-1 rounded-md bg-white  duration-300 ${
                  navStatus
                    ? "-rotate-45 w-[100%] -translate-y-3 duration-300"
                    : " w-[50%] "
                }`}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
