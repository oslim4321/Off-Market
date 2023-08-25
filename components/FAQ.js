"use client";

import React from "react";

const FAQ = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default FAQ;

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { HeadingText, poppins } from "@/utility/Font";
import { useInView } from "react-intersection-observer";
// import { ContentPlaceholder } from "./ContentPlaceholder";

const Accordion = ({ i, expanded, setExpanded, elem }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <div className="border border-gray-300 rounded-md w-full md:w-[700px] lg:w-[800px] p-8 ">
        <m.header
          className={`flex gap-x-3 items-center justify-between text-black-text text-[16px] md:text-[18px] font-extrabold leading-28 mb-4 ${poppins.className} cursor-pointer`}
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <p className="flex gap-x-2 items-center">
            <span>0{i + 1}.</span> {elem.question}
          </p>
          <div className="border rounded-full">
            <m.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-8 h-8 p-2 font-bold"
            >
              89
              {isOpen ? (
                <line x1="12" y1="5" x2="12" y2="19" />
              ) : (
                <>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                </>
              )}
            </m.svg>
          </div>
        </m.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="md:mx-[8px]"
            >
              <span className="text-black-text text-[16px] font-bold leading-26 opacity-70 text-center max-w-[80%] mx-auto ">
                {elem.answer}
              </span>
            </m.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const Example = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });
  //

  return (
    <>
      <div id="#faq" className={`my-20  ${poppins.className}`}>
        <div className="flex flex-col items-center justify-center sideSpace">
          {/* <h1
            className={`text-black-text text-[30px] md:text-[40px] font-bold leading-43 tracking-wide md:w-[43%] mb-5 md:mb-0 text-center  `}
          >
            Frequently Asked Questions
          </h1> */}
          <HeadingText
            text="Frequently Asked Questions"
            className="md:w-[43%]d mb-5 md:mb-0 md:text-center"
          />
          <p className="text-black text-center text-[14px] md:text-[18px] font-bold leading-28 opacity-70 md:w-[45%] text-center">
            We tried to answer most common questions, if you have any
            additional, please get in touch with our friendly team
          </p>
        </div>

        <div className="sideSpace">
          {faqData.map((elem, i) => (
            <m.div
              key={i}
              className=" flex items-center justify-center flex-col mb-3"
              // initial={{ y: 100 }}
              animate={inView ? { y: 100 } : {}}
              whileInView={{ y: 0 }}
              //   transition={{ delay: 0.3, staggerChildren: 0.08 }}
              transition={{ duration: 0.5, type: "spring" }}
              ref={ref}
            >
              <Accordion
                elem={elem}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            </m.div>
          ))}
        </div>
      </div>
    </>
  );
};
const faqData = [
  {
    question: "How long is the course?",
    answer:
      "The course is designed to be completed within a month. We have carefully curated the content to provide you with the necessary skills and knowledge to excel in job interviews.",
  },
  {
    question: "What topics are covered in the course?",
    answer:
      "Our course covers a wide range of topics including resume building, interview preparation, common interview questions, behavioral interviews, technical interviews, and much more. We aim to provide you with a comprehensive understanding the interview process.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Absolutely! Our course is designed to cater to individuals of all skill levels, including beginners. We start from the basics and gradually progress to more advanced topics, ensuring that everyone can benefit from the course.",
  },
  {
    question: "Are there any assignments or assessments?",
    answer:
      "Yes, throughout the course, you will be given assignments and assessments to test your understanding of the concepts covered. These assignments are designed to help you practice and reinforce what you've learned.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course, you will receive a certificate of completion. This certificate can be a valuable addition to your resume and can showcase your dedication to professional development.",
  },
];
