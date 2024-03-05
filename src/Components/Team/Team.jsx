import React from "react";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="teambg-wpr"></div>
      <div>
        <div className="mx-auto text-white max-w-screen-2xl px-[5vw] py-16">
          <div className="flex justify-center">
            <h1 className="font-semibold text-3xl rounded-full px-5 py-3 bg-[#9500F0]">
              CORE TEAM
            </h1>
          </div>
          <div className="flex gap-8 justify-center items-center flex-wrap mt-8">
            <div className="bg-card p-8">
              <div className="shadow1 p-1">
                <img
                  src="/assets/anushka.webp"
                  className=" w-[250px] rounded-sm"
                  alt=""
                />
              </div>
              <h4 className="text-center my-2 font-semibold text-2xl">
                Anushka Gupta
              </h4>
              <h5 className="text-center text-xl">President</h5>
            </div>
            <div className="bg-card p-8">
              <div className="shadow1 p-1">
                <img
                  src="/assets/satyam.webp"
                  className=" w-[250px] rounded-sm"
                  alt=""
                />
              </div>
              <h4 className="text-center my-2 font-semibold text-2xl">
                Satyam Saini
              </h4>
              <h5 className="text-center text-xl">Voice President</h5>
            </div>
            <div className="bg-card p-8">
              <div className="shadow1 p-1">
                <img
                  src="/assets/hardik.webp"
                  className="w-[250px]  rounded-sm"
                  alt=""
                />
              </div>
              <h4 className="text-center my-2 font-semibold text-2xl">
                Hardik Sharma
              </h4>
              <h5 className="text-center text-xl">General Secrectary</h5>
            </div>
            <div className="bg-card p-8">
              <div className="shadow1 p-1">
                <img
                  src="/assets/mansi.webp"
                  className="w-[250px] rounded-sm"
                  alt=""
                />
              </div>
              <h4 className="text-center my-2 font-semibold text-2xl">
                Mansi Sharma
              </h4>
              <h5 className="text-center text-xl">Media Outreach Head</h5>
            </div>
            <div className="bg-card p-8">
              <div className="shadow1 p-1">
                <img
                  src="/assets/archita.webp"
                  className=" w-[250px] rounded-sm"
                  alt=""
                />
              </div>
              <h4 className="text-center my-2 font-semibold text-2xl">
                Archita Jain
              </h4>
              <h5 className="text-center text-xl">Event Head</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
