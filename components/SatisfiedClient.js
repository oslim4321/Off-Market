import React from "react";
import { HeadingText } from "@/utility/Font";
import { ImgComp } from "@/utility/Image";

const SatisfiedClient = () => {
  return (
    <div className="sideSpace bg-[#F9F9FB] rounded-[20px] my-20">
      <div className="max-w-[95%] mx-auto md:flex items-center justify-between">
        <div className="bg-white flex items-start gap-y-5 p-5 justify-center flex-col rounded-[20px]">
          <HeadingText
            text="Start Your Journey to Interview Success Today!"
            className="w-[80%]"
          />
          <a href="/introductory-call" className="custom-button">
            Join Now
          </a>
        </div>
        <div className="hidden md:block">
          <ImgComp
            src="/images/undraw_programming_re_kg9v 1.svg"
            alt="toon  programming"
          />
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClient;
