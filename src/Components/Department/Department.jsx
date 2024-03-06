import React from "react";
import "./Department.css";

function Department() {
  return (
    <>
      <div className="departmentbg-wpr"></div>
      <div>
        <div className="mx-auto text-white max-w-screen-2xl px-[5vw] py-16">
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentManagement.webp" alt="department" className="zoom" />
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Management
              </h3>
            </div>
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden  h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentTech.webp" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Tech
              </h3>
            </div>
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden  h-[316px]  flex flex-col justify-between items-center">
              <img src="/assets/departmentGraphic.webp" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Graphics
              </h3>
            </div>
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden  h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentContent.webp" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Content
              </h3>
            </div>
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden  h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentMarketing.webp" alt="department" className="zoom"/>
              <h3 className="text-center text-[#FFB100] font-semibold text-3xl">
                Marketing
              </h3>
            </div>
            <div className="w-[300px] bg-card p-10 rounded-lg overflow-hidden  h-[316px] flex flex-col justify-between items-center">
              <img src="/assets/departmentEdit.webp" alt="department" className="zoom"/>
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
