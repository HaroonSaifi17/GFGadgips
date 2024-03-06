import React from "react";
import "./Events.css";

function Events() {
  return (
    <>
      <div className="eventbg-wpr"></div>
      <div className="mx-auto text-white max-w-screen-2xl flex flex-col gap-20  px-[5vw] py-16">
        <div className="flex justify-center gap-10 max-md:flex-col max-md:items-center">
          <img className="max-w-[300px] object-contain" src="/assets/sih.webp" alt="" />
          <div className="bg-card p-8 rounded-xl overflow-hidden">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">Smart India Hackathon</h2>
            <p className="max-w-[500px]  min-w-[250px] pl-20 max-sm:pl-6">
              The SIH (Smart India Hackathon) internal hackathon event organized
              by CodeChef in 2022 is a platform for participants to showcase
              their problem-solving and technical skills. The hackathon will
              provide participants with real-world challenges and opportunities
              to work on innovative solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 max-md:flex-col-reverse max-md:items-center">
          <div className="bg-card p-8 rounded-xl overflow-hidden">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">CodeBlooded 1.0</h2>
            <p className="max-w-[500px] min-w-[250px] pl-20 max-sm:pl-6">
              CodeBlooded 1.0: A Virtual Coding Extravaganza of 2021 CodeBlooded
              1.0, the virtual coding event of the year, was a collaborative
              venture organized by CodeChef ADGITM, in partnership with CodeChef
              MPSTME, Coding Club RVCE, and Coding Ninjas. Got up to 100
              registrations, the event created a shared platform for students to
              connect, compete, and learn.
            </p>
          </div>
          <img
            className="max-w-[300px] object-contain"
            src="/assets/codeBlooded.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Events;
