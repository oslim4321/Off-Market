"use client";
import { HeadingText, poppins } from "@/utility/Font";
import { ImgComp } from "@/utility/Image";
import { useState, useEffect } from "react";
import React from "react";

let list = [
  {
    id: 1,
    title: "Building Networks",
    text: "Job Market and Networking Insights",
  },
  {
    id: 2,
    title: "Resume Mastery",
    text: "Crafting Impressive Resumes to Match Job Descriptions",
  },
  {
    id: 3,
    title: "Interview Success",
    text: "Master Communication and Answering Techniques",
  },
];

const SeeResults = () => {
  const [visibleText, setVisibleText] = useState("");
  let text = "See real results in as little as a month";

  useEffect(() => {
    let currentIndex = 1;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        if (currentIndex !== text.length) {
          currentIndex++;
        }
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration to control the speed of the animation

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);
  return (
    <div className="bg-[#0F172A]  flex justdify-center itemds-center flex-col py-10 ">
      <div className="sideSpace">
        <HeadingText
          text="See real results in as little as a month"
          className=" md:text-center text-white"
        />
        {/* <h1
          className={`text-white text-[36px] font-extrabold tracking-wider leading-normal md:text-center ${poppins.className}`}
        >
          {" "}
          <AnimatePresence>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {visibleText.slice(0, text.length - 1)}
            </motion.span>
          </AnimatePresence>
        </h1> */}
        <div className="flex justify-center items-center my-6">
          <ImgComp
            src={"/images/pattern.svg"}
            alt="pattern"
            className={"w-[133px] h-10"}
          />
        </div>

        <div className="fledx items-center flex-wrap grid grid-cols-12 gap-[10px]">
          {/* a box */}
          {list.map((elem) => (
            <div
              key={elem.id}
              className="flex md:justify-center items-center relative col-span-full md:col-span-6 lg:col-span-4 "
            >
              <div className={`${poppins.className} w-[70%] `}>
                <h1 className="text-white text-[36px] font-bold leading-normal tracking-tight mb-4">
                  {elem.title}
                </h1>
                <div className="lg:flex items-center justify-center gap-x-4">
                  <p className="text-white text-sm font-bold  leading-normal opacity-80">
                    {elem.text}
                  </p>
                  <div className="line w-[49px] h-[3px] lg:w-[3px] lg:h-[49px] opacity-30 bg-white mt-5 lg:mt-0"></div>
                </div>
              </div>
              {/* <div className="line w-[3px] h-[49px] opacity-30 bg-white md:absolute  right-0 bottom-0"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeResults;
