import React from "react";
import "./Department.css";

function Department() {
  return (
    <>
      <div className="departmentbg-wpr"></div>
      <div>
        <div className="mx-auto text-white max-w-screen-2xl px-[5vw] py-16">
          <div className="flex flex-wrap gap-20 justify-center items-center">
            <div className="w-[300px] h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentManagement.png" alt="department" className="zoom" />
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Management
              </h3>
            </div>
            <div className="w-[300px] h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentTech.png" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Tech
              </h3>
            </div>
            <div className="w-[300px] h-[316px]  flex flex-col justify-between items-center">
              <img src="/assets/departmentGraphic.png" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Graphics
              </h3>
            </div>
            <div className="w-[300px] h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentContent.png" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Content
              </h3>
            </div>
            <div className="w-[300px] h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentMarketing.png" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Marketing
              </h3>
            </div>
            <div className="w-[300px] h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentEdit.png" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Video Editing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Department;
