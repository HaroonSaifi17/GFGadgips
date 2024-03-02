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
            <div>
              <img
                src="https://placehold.it/200"
                className="border-4 border-white rounded-sm"
                alt=""
              />
              <h4 className="text-center my-2 font-semibold text-2xl">Name</h4>
              <h5 className="text-center text-xl">Position</h5>
            </div>
            <div>
              <img
                src="https://placehold.it/200"
                className="border-4 border-white rounded-sm"
                alt=""
              />
              <h4 className="text-center my-2 font-semibold text-2xl">Name</h4>
              <h5 className="text-center text-xl">Position</h5>
            </div>
            <div>
              <img
                src="https://placehold.it/200"
                className="border-4 border-white rounded-sm"
                alt=""
              />
              <h4 className="text-center my-2 font-semibold text-2xl">Name</h4>
              <h5 className="text-center text-xl">Position</h5>
            </div>
            <div>
              <img
                src="https://placehold.it/200"
                className="border-4 border-white rounded-sm"
                alt=""
              />
              <h4 className="text-center my-2 font-semibold text-2xl">Name</h4>
              <h5 className="text-center text-xl">Position</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
