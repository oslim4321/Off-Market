"use client";
import React from "react";
import { m, useScroll } from "framer-motion";
import { HeadingText, poppins } from "@/utility/Font";
import { useRef } from "react";

let list = [
  {
    id: 1,
    title: "Planning",
    text: "Building a Solid Foundation - Understand the fundamentals, master the art of self-presentation, and fine-tune your elevator pitch.",
  },
  {
    id: 2,
    title: "Build-up",
    text: "Navigating Behavioral Interviews - Learn to answer competency-based questions, showcase your skills, and demonstrate your suitability for the role.",
  },
  {
    id: 3,
    title: "Implementation",
    text: "Expert Strategies for Technical Interviews - Gain insights into common technical interview formats and techniques to effectively showcase your expertise.",
  },
  {
    id: 4,
    title: "Closeout",
    text: "Putting It All Together - Polish your interviewing skills, practice mock interviews, and receive valuable feedback to boost your confidence.",
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="explore" className=" py-32 overflow-hidden">
      <div className="sideSpace">
        <HeadingText
          text="Let’s see how it works"
          className="leading-[43px] tracking-wide md:w-[25%]"
        />
        <div className="mt-10">
          {/* Horizontal line */}
          <div className="relative hidden md:block">
            <m.div
              className="absolute w-full h-0.5 bg-[#789CD2] top-2 opacity-[0.5]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
            ></m.div>

            <m.div
              className="absolute top-1/2 transform -translate-x-1/2 -ml-3 -translate-y-1/2 left-1/4 w-4 h-4 bg-[#1A75FF] rounded-full"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1 }}
            ></m.div>
            <m.div
              className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-2/4 w-4 h-4 bg-[#1A75FF] rounded-full"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1 }}
            ></m.div>
            <m.div
              className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-3/4 w-4 h-4 bg-[#1A75FF] rounded-full"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1 }}
            ></m.div>
          </div>
          {/* Vertivcal line */}
          <div className="grid grid-cols-12 relative gap-10">
            {list.map((elem, i) => (
              <div
                key={i}
                className="col-span-full md:col-span-3 -mr-5"
                ref={ref}
              >
                {/* nobile */}
                <m.div
                  style={{ scaleY: scrollYProgress }}
                  className="absolute left-0 top-0 w-[2px] h-full bg-[#789CD2] origin-top md:hidden opacity-[0.5]"
                />
                <LiIcon />
                {/* mobile end */}
                <div
                  key={elem.id}
                  className="flex justify-start items-center relative md:mt-10 ml-7 md:ml-0  "
                >
                  <div className={`${poppins.className} w-[100%] `}>
                    <h1 className="text-black-text text-[20px]  font-bold leading-normal  tracking-wider">
                      {elem.title}
                    </h1>
                    <p className="text-black-text text-14  font-bold leading-normval tracking-wide opacity-75 w-[60%] md:w-full">
                      {elem.text}
                    </p>
                  </div>
                  <div className="line w-[3px] h-[49px] opacity-30 bg-white absolute  right-0 bottom-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;

const LiIcon = () => {
  return (
    <m.div
      className="absolute -left-2  w-4 h-4 bg-[#1A75FF] rounded-full z-10  md:fhidden"
      // initial={{ x: 0 }}
      // whileInView={{ x: "100%" }}
      // transition={{ duration: 1 }}
    ></m.div>
  );
};
