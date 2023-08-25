"use client";
import React from "react";
import { GreyText, poppins } from "../utility/Font";
import { ImgComp } from "../utility/Image";
import { m } from "framer-motion";

export const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const quote = {
  initial: {
    opacity: 0, // Set initial opacity to 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const Heropage = () => {
  let text = "Crack Any Interview With Us";

  return (
    <div className="my-20 overflow-hidden">
      <div className="sideSpace lg:flex justify-between items-center gap-5">
        {/* left */}
        <div className="flex flex-col gap-y-5 relative mb-10">
          <div className="">
            <GreyText
              text={"Your Path to Interview Success Begins Here!"}
              className={""}
            />
          </div>
          <ImgComp
            src="/images/HeroStar.svg"
            alt="star"
            className="w-[40px] h-[42px] transform -rotate-22.5 absolute top-[12%] md:top-[50%] left-[63%] md:left-[100%] x-10"
          />
          <ImgComp
            src="/images/heroPageArrow.svg"
            alt="arrow"
            className="w-[300px] h-[150px] transform rotate-82.989 absolute top-[70%] left-[60%]"
          />
          <m.h1
            className="text-black-text text-[54px] md:text-[100px] font-semibold leading-10 tracking-wide flex flex-col gap-y-7 md:gap-y-12"
            variants={quote}
            initial="initial" // Set initial state to "initial"
            whileInView="animate"
          >
            {/*    ${
                  i === 0
                    ? "bordder border-b-[10px] border-[#1975FF] w-[70%]"
                    : ""
                  } */}
            {/* Crack Any Interview With */}
            {text.split(" ").map((word, i) => (
              <m.span
                variants={singleWord}
                key={word + i}
                className={`md:block ${poppins.className} md:my-2 
             
                `}
              >
                {word}
              </m.span>
            ))}
            {/* <span className=" h-[7px] md:h-[10px] w-f[40%] w-[180px] mt-2 md:mt-0  md:w-[320px] bg-[#1975FF] absolute top-[26%]"></span> */}
          </m.h1>
        </div>
        {/* right side */}
        <div className=" md:flex justify-center items-center ">
          <div className="md:w-[80%] h-[80vh] flex justify-center items-center dbg-[#f9f0e7]">
            <div className="md:w-[70%]  ">
              <JoinCardDesc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Heropage;

export const JoinCardDesc = () => {
  // const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  // function showCalendly() {
  //   setIsCalendlyOpen(!isCalendlyOpen);
  // }

  return (
    <>
      <div className="">
        <div
          className={`flex flex-col items-start py-[16px] px-[25px] rounded-2xl bg-slate-100 bg-opacity-90 backdrop-blur-md w-full ${poppins.className}`}
        >
          <div className="relative">
            <span className="w-[1px] p-[1px] h-[25px] bg-[#999FA8] absolute -left-2"></span>
            <h2
              className={`text-black-text text-[16px] font-bold leading-[25px] tracking-wide uppercase `}
            >
              Off Market
            </h2>{" "}
          </div>
          <p
            className={
              "text-black-text text-[14px] font-bold leading-[27px]  tracking-wide opacity-60 my-6 "
            }
          >
            Unlocking the secrets to success, our comprehensive interview course
            is designed to equip you with the skills and confidence you need to
            pass any interview with flying colors. It's time to take charge of
            your career and land that dream job!
          </p>
          <a
            // onClick={showCalendly}
            // onClick={() => {
            //   router.push("/schedule");
            // }}
            href="/introductory-call"
            className="flex rounded-[16px] px-[20px] py-[16px] justify-between items-center gap-20 self-stretch rounded-13 bg-black-text text-white text-20 bg-black font-bold leading-[30px] cursor-pointer"
          >
            Join The Class
            <ImgComp
              src="/images/JoinArrow.svg"
              alt="join class arrow"
              className={"w-[13px] h-[16px] transform -rotate-9f0"}
            />
          </a>
        </div>
      </div>
    </>
  );
};
