"use client";
import {
  ChervonLeft,
  ChervonRight,
  HeadingText,
  poppins,
} from "@/utility/Font";
import { ImgComp } from "@/utility/Image";
import React, { useRef } from "react";
import { m } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  let testimonial = [
    {
      ratings: 5,
      text: "“Quis nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat. Nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat.”",
      name: "Jennifer L .",
      career: "Actress",
      img: "/images/LadyTestimony.svg",
    },
    {
      ratings: 4,
      text: "“Quis nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat. Nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat.”",
      name: "Jennifer L .",
      career: "Actress",
      img: "/images/LadyTestimony.svg",
    },
    {
      ratings: 5,
      text: "“Quis nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat. Nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat.”",
      name: "Jennifer L .",
      career: "Actress",
      img: "/images/LadyTestimony.svg",
    },
    {
      ratings: 3,
      text: "“Quis nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat. Nostrud exercitation amco laboris nisi ut aliquip ex ea commodo ite consequat.”",
      name: "Jennifer L .",
      career: "Actress",
      img: "/images/LadyTestimony.svg",
    },
  ];
  const imgScroll = useRef(null);
  const [disabeIcon, setdisabeIcon] = useState({ left: null, right: null });
  const [scrollAmount, setscrollAmount] = useState(0);

  // const scrollAmount = 400; // Adjust the scroll amount as needed
  const container = imgScroll.current;

  function checkScrollLeftToDisableIcon() {
    setdisabeIcon({ left: imgScroll.current?.scrollLeft });
  }

  useEffect(() => {
    checkScrollLeftToDisableIcon();
  }, []);
  //   }

  function scrollLeft() {
    if (imgScroll.current) {
      imgScroll.current.scroll({
        left: imgScroll.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
      checkScrollLeftToDisableIcon();
    }
  }
  function scrollRight() {
    if (imgScroll.current) {
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
      checkScrollLeftToDisableIcon();
    }
  }

  return (
    <div>
      <div className="sideSpace my-20">
        {" "}
        <HeadingText text="Testimonials" className=" md:w-[25%]" />
        <div className="mt-10 flex items-center gap-x-6">
          {/* scroll icon */}
          <div className=" flex-col gap-10 hidden md:flex">
            <button className={"border p-2 rounded-full"} onClick={scrollLeft}>
              <ChervonRight />
            </button>
            <button
              className={"border p-2 rounded-full"}
              onClick={scrollRight}
              disabled={!disabeIcon}
            >
              <ChervonLeft className={!disabeIcon.left && "opacity-20"} />
            </button>
          </div>

          <div
            className="flex overflow-x-scroll overflow-y-hidden no-scrollbar snap-mandatory"
            ref={imgScroll}
          >
            {testimonial.map((elem, i) => (
              <Card key={i} elem={elem} setscrollAmount={setscrollAmount} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Card = ({ elem, setscrollAmount }) => {
  const divRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setscrollAmount(width);
    }
  }, []);
  return (
    <div ref={divRef}>
      <m.div
        className={`flex-shrink-0 w-[270px] md:w-[500px] h-full bg-[#F9F9FB] rounded-[16px] p-2  mr-4 relative ${poppins.className}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="flex justify-center gap-x-5">
          {/* image for mobile view */}
          <ImgComp
            src={elem.img}
            alt={elem.text}
            className={"w-[40%] h-[247px] hidden md:block"}
          />
          <div>
            <div className="flex my-3">
              {[...Array(elem.ratings)].map((_, index) => (
                <ImgComp
                  key={index}
                  src={"/images/StartTestimony.svg"}
                  alt="star"
                  className={"w-[20px] h-[20px]"}
                />
              ))}
            </div>
            <m.p
              className="text-[14px] text-slate-500 font-bold leading-[24px] tracking-wide opacity-[0.699999988079071]"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {elem.text}
            </m.p>
            {/* image for mobile view */}
            <div className="flex my-6">
              <ImgComp
                src={elem.img}
                alt={elem.text}
                className={"w-[44px] h-[44px] rounded-full md:hidden"}
              />
              <div className="flex items-center md:items-end justify-end md:absolute bottom-0">
                <m.p
                  className="text-black-text text-16 font-bold leading-normal tracking-wider opacity-100"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {elem.name}
                </m.p>
                <m.span
                  className="text-slate-400 text-[16px] font-bold leading-normal tracking-wider opacity-[0.5]"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {elem.career}
                </m.span>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};
