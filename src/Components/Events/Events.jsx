import React from "react";
import "./Events.css";

function Events() {
  return (
    <>
      <div className="eventbg-wpr"></div>
      <div className="mx-auto text-white max-w-screen-2xl flex flex-col gap-20  px-[5vw] py-16">
        <div className="flex justify-center gap-10 bg-card2 max-md:gap-1 max-md:flex-col max-md:items-center">
          <img
            className="max-w-[300px] object-contain max-md:p-4"
            src="/assets/liveTheCode2.webp"
            alt="LTC"
          />
          <div className="bg-card1 p-8 rounded-xl overflow-hidden max-md:pt-0">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">
              Live the Code 2.0
            </h2>
            <p className="max-w-[500px]  min-w-[250px] pl-20 max-sm:pl-6">
              A weekend of innovation and creativity awaits! Join us for
              electrifying challenges, collaborative brilliance, and the chance
              to shape the future. Unleash y our potential and be part of a
              vibrant community driving positive change. Let's hack together!
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-card2 max-md:gap-1 gap-10 max-md:flex-col-reverse max-md:items-center">
          <div className="bg-card1 p-8 rounded-xl overflow-hidden max-md:pt-0">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">
              CodeBlooded 3.0
            </h2>
            <p className="max-w-[500px] min-w-[250px] pl-20 max-sm:pl-6">
              CodeBlooded is the perfect gift for computer programmers. Anyone
              who loves to code will enjoy this play on words, when coding is
              simply in your blood. The event is organized by CodeChef ADGITM in
              collaboration with Coding Ninjas. 🚀Registration was amazing and
              surprised us; free gifts were distributed to the candidates. It
              was not just an event; it was a celebration for those who love to
              code. It was the best opportunity for freshers to explore their
              coding skills and gain knowledge. 🔮Furthermore, more events will
              be coming soon.
            </p>
          </div>
          <img
            className="max-w-[300px] object-contain max-md:p-4"
            src="/assets/codeBlooded3.webp"
            alt=""
          />
        </div>
        <div className="flex justify-center gap-10 bg-card2 max-md:gap-1 max-md:flex-col max-md:items-center">
          <img
            className="max-w-[300px] object-contain max-md:p-4"
            src="/assets/sih.webp"
            alt="SIH"
          />
          <div className="bg-card1 p-8 rounded-xl overflow-hidden max-md:pt-0">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">
              Smart India Hackathon
            </h2>
            <p className="max-w-[500px]  min-w-[250px] pl-20 max-sm:pl-6">
              The SIH (Smart India Hackathon) internal hackathon event organized
              by CodeChef in 2022 is a platform for participants to showcase
              their problem-solving and technical skills. The hackathon will
              provide participants with real-world challenges and opportunities
              to work on innovative solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-card2 max-md:gap-1 gap-10 max-md:flex-col-reverse max-md:items-center">
          <div className="bg-card1 p-8 rounded-xl overflow-hidden max-md:pt-0">
            <h2 className="font-semibold text-4xl text-amber-400 mb-6">
              CodeBlooded 1.0
            </h2>
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
            className="max-w-[300px] object-contain max-md:p-4"
            src="/assets/codeBlooded.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Events;
