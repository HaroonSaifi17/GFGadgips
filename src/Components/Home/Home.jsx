import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-black fixed top-0 left-0 w-full h2 -z-10">
        <div className="absolute bottom-[50px] max-md:bottom-0 left-0 w1 min-w-[1000px] overflow-hidden">
          <svg
            viewBox="0 0 1597 493"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_562_14)">
              <path
                id="path1"
                opacity="0.15"
                d="M0 148.996C0 148.996 220.569 -16.8148 417.63 148.996C614.692 314.807 773.742 148.996 773.742 148.996C773.742 148.996 1025.32 -98.4949 1193.37 148.996C1361.43 396.487 1600 148.996 1600 148.996V577H0L0 148.996Z"
                fill="#4A097D"
                fill-opacity="0.5"
              />
              <path
                id="path2"
                opacity="0.3"
                d="M374.019 215.333C183.244 -152.166 0 215.333 0 215.333V575H1600V215.333C1600 215.333 1489.05 314.551 1399.18 215.333C1309.32 116.114 1214.43 215.333 1214.43 215.333C1214.43 215.333 1093.94 399.408 1017.63 215.333C941.324 31.2571 790.21 215.333 790.21 215.333C790.21 215.333 564.794 582.831 374.019 215.333Z"
                fill="#3B0566"
                fill-opacity="0.5"
              />
              <path
                id="path3"
                opacity="0.45"
                d="M230.436 317.527C117.477 228.344 0 317.527 0 317.527V575H1600V317.527C1600 317.527 1409.22 635.963 1240.04 317.527C1070.85 -0.908997 884.594 317.527 884.594 317.527C884.594 317.527 739.504 483.799 664.7 317.527C589.896 151.255 450.329 317.527 450.329 317.527C450.329 317.527 343.395 406.71 230.436 317.527Z"
                fill="#6A2EB3"
                fill-opacity="0.5"
              />
              <path
                id="path4"
                d="M0 428.619C0 428.619 220.569 371.911 417.63 428.619C614.692 485.328 773.742 428.619 773.742 428.619C773.742 428.619 1025.32 343.976 1193.37 428.619C1361.43 513.263 1600 428.619 1600 428.619V575H0V428.619Z"
                fill="#692DB2"
                fill-opacity="0.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_562_14">
                <rect width="1600" height="493" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="text-white">
        <div className="mx-auto max-w-screen-2xl px-[5vw] py-16 justify-center  flex gap-16 max-md:flex-col-reverse">
          <div className="pt-6">
            <h2 className="font-semibold max-sm:text-5xl text-6xl">GFG</h2>
            <h2 className="text-4xl font-semibold">
              <span className="text-[#7133F5]">&lt;ADGIPS&gt;</span> Chapter
            </h2>
            <h4 className="mt-6 mb-4 font-semibold text-2xl">What we do?</h4>
            <p className="max-w-[500px]">
              CodeChef ADGITM is a close-knit community of diligent coders who
              come together and share best practices, new coding
              accomplishments, and plenty of resources to become the best
              problem solvers.
            </p>
            <Link
      to="/about"
      className="inline-block hover:bg-[#4A0291] duration-300 ease-out hover:scale-[1.1] rounded-sm px-4 py-2 mt-5 bg-[#7133f5]"
    >
      Get Started
    </Link>
          </div>
          <div className="max-w-[400px] min-w-[250px] max-md:min-w-full">
            <div className="shadow1 p-1  overflow-hidden rounded-[24%]">
              <img
                src="/assets/home1.png"
                className=" rounded-[24%] hover:rotate-1 duration-300 ease-in overflow-hidden"
                alt="cc"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
