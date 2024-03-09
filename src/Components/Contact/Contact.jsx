import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="bg-wpr"></div>
      <div>
        <div className="mx-auto text-white max-w-screen-2xl flex justify-center   px-[5vw] py-10">
          <div className="bg-card p-10 py-20 rounded-3xl overflow-hidden">
            <h1 className="text-[#FFB100] text-5xl font-semibold text-center">
              Get in touch!
            </h1>
            <div className="mx-auto max-w-[450px] my-4 h-[2px] w-[70vw] bg-white"></div>
            <h3 className=" text-3xl font-semibold text-center">
              Contact us for any queries
            </h3>
            <p className="mt-8 text-center max-w-[400px] mx-auto">
              Got a question? Need assistance? Don't hesitate to reach out to
              us! Connect with us on our social media handles for updates,
              events, and exciting coding challenges. <br /> Join our community
              today and let's code our way to success together!
            </p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-300 pb-2 px-[5vw]">
          Build by <a href="https://github.com/HaroonSaifi17">@HaroonSaifi17</a>
        </p>
      </div>
    </>
  );
}

export default Contact;
