import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-[5vw] py-5 flex flex-wrap justify-center items-center gap-16 max-sm:gap-8 text-white">
        <a href="mailto:codechef.adgitm@adgitmdelhi.ac.in" className="hover:text-[#4A0291] hover:scale-[1.2] duration-300 ease-out">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </a>
        <a href="https://www.linkedin.com/company/codechefadgitm/" className="hover:text-[#4A0291] hover:scale-[1.2] duration-300 ease-out">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a className="hover:text-[#4A0291] hover:scale-[1.2] duration-300 ease-out" href="https://www.youtube.com/@CodeChefADGITMChapter">
          <i className="fa-brands fa-youtube fa-xl"></i>
        </a>
        <a className="hover:text-[#4A0291] hover:scale-[1.2] duration-300 ease-out" href="https://discord.com/invite/a5Sbt5UJEw">
          <i className="fa-brands fa-discord fa-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
