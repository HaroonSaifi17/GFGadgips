import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-[5vw] py-5 flex flex-wrap justify-center items-center gap-16 max-sm:gap-8 text-white">
        <a href="">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube fa-xl"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-discord fa-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
