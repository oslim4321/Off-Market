"use client";
import { HeadingText, LongArrow, poppins } from "@/utility/Font";
import React from "react";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CalenderDisplay = () => {
  return (
    <div>
      <div className={`max max-w-[75%] mx-auto mb-0 ${poppins.className}`}>
        {/* <h1
          className={`text-black-text text-[30px] md:text-[40px]  font-bold leading-43 tracking-wide ${poppins.className}`}
        >
          Show how long it takes in a calendar
        </h1> */}
        <HeadingText
          text="Schedule in a calendar"
          className=" md:w-[43%] mb-5 md:mb-0 leading-43 tracking-wide "
        />
        <>
          {/* Desktpop calender */}
          <div className=" hidden md:block">
            <div className="flex items-center">
              {/* weeks */}
              <div className="p-4  flex-[3]">
                <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                  2 weeks
                </p>
              </div>

              <div className=" flex-[2]">
                {" "}
                <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                  1 week
                </p>
              </div>
              <div className="p-4  flex-[1] border-r-0">
                {" "}
                <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                  1 week
                </p>
              </div>
            </div>

            <div className="flex">
              {/* top */}
              <div className="border border-l-0 border-t-0 p-4 py-7 flex-[2]">
                <Button
                  text="UNDERSTANDING YOUR JOB MARKET"
                  bg={"bg-[#1975FF]"}
                />
              </div>
              <div className="border border-t-0 p-4 py-7 flex-[1]"></div>
              <div className="border border-t-0 p-4 py-7 flex-[1] border-r-0"></div>
            </div>
            {/* middle */}
            <div className="flex">
              <div className="border border-l-0  p-4 py-7 flex-[2]"></div>
              <div className="border p-4 py-7 flex-[1]">
                <Button text="BUILDING YOUR PROFILE" bg={"bg-[#FFC700]"} />
              </div>
              <div className="border p-4 py-7 flex-[1] border-r-0"></div>
            </div>
            <div className="flex border-b-0">
              <div className="border border-l-0 border-b-0  p-4 py-7 flex-[2]"></div>
              <div className="border border-b-0 p-4 py-7 flex-[1]"></div>
              <div className="border border-b-0 p-4 py-7 flex-[1] border-r-0">
                <Button
                  text="MASTERING THE INTERVIEW PROCESS"
                  bg={"bg-[#00BC08]"}
                />
              </div>
            </div>
          </div>
        </>
        {/* Mobile calender */}

        <>
          {/* first  */}
          <div className="flex w-full my-2 items-center gap-x-5 md:hidden">
            <div className="w-[80%]">
              <Button
                text={"UNDERSTANDING YOUR JOB MARKET"}
                bg={"bg-[#1975FF]"}
              />
            </div>
            <div className="w-[20%]">
              <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                2 weeks
              </p>
              {/* <LongArrow className={"w-[200px] h-10"} /> */}
            </div>
          </div>
          {/* first  */}
          <div className="flex w-full my-2 items-center gap-x-5 md:hidden">
            <div className="w-[70%]">
              <Button text={"BUILDING YOUR PROFILE"} bg={"bg-[#FFC700]"} />
            </div>
            <div className="w-[30%]">
              <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                1 week
              </p>
            </div>
          </div>
          {/* first  */}
          <div className="flex w-full my-2 items-center gap-x-5 md:hidden">
            <div className="w-[60%]">
              <Button
                text={"MASTERING THE INTERVIEW PROCESS"}
                bg={"bg-[#00BC08]"}
              />
            </div>
            <div className="w-[40%]">
              <p className="text-black text-[16px] font-bold leading-[21px] text-center mb-3">
                1 week
              </p>
            </div>
          </div>
        </>

        <button></button>
      </div>
    </div>
  );
};

export default CalenderDisplay;

const Button = ({ text, bg }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const buttonVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <m.button
        className={`w-full h-[58px] rounded flex-shrink-0 rounded-4 ${bg} text-white text-14 leading-[21px] shadow-xl`}
        variants={buttonVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {text}
      </m.button>

      <div ref={ref}></div>
    </>
  );
};
