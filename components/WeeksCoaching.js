"use client";
import { HeadingText } from "@/utility/Font";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import { ImgComp } from "@/utility/Image";

const WeeksCoaching = () => {
  return (
    <div className="overflow-hidden md:my-20">
      <div className="sideSpace md:flex justify-between items-center ">
        <div className="relative">
          <div className="flex items-center">
            {" "}
            <HeadingText
              text="Weekly coaching example"
              className="md:w-[60%]"
            />
            <ImgComp
              src="./images/ArrowIconWeekly.svg"
              path="arrow"
              alt={"arrow"}
              className={" w-[79px] h-[47px] md:-ml-[20%] mt-10 "}
            />
          </div>
          <p className="text-[14px] text-slate-500 font-extrabold md:w-[70%] leading-[24px] tracking-wide opacity-[10] my-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit.
          </p>

          <a href="/introductory-call" className="custom-button !px-7">
            Start Now
          </a>
        </div>
        {/* right side  */}
        <div>
          <AnimatedImg
            path="/images/Dashboard.svg"
            alt={"dashboard"}
            direction="-100%"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WeeksCoaching;
