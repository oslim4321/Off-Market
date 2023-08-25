"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Hamburger, HamburgerClose, poppins } from "../utility/Font";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useState } from "react";

const CustomLinks = ({ text, href }) => (
  <div>
    <Link
      className="uppercase text-black-text text-xs font-bold leading-4 tracking-widest"
      href={href}
    >
      {" "}
      {text}
    </Link>
  </div>
);
const Contact = ({ href = "/", text, className }) => (
  <a href={href} className={className}>
    {text}
  </a>
);

const Navbar = () => {
  // const ref = useRef();
  // const [NavWidth, setNavWidth] = useState();
  // useEffect(() => {
  //   setNavWidth(ref?.current?.clientHeight);
  // }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className={`mb-${NavWidth + 50}px`}>{NavWidth}</div> */}
      <header
        className={`fixded top-0 left-0 right-0 py-[18px] shardow z-30 brg-slate-100 ${poppins.className}`}
      >
        <div
          className="sideSpace w-full flex justify-between items-center align-self-sd
      tretch "
        >
          {/* logo */}
          <div>
            <Logo />
          </div>
          {/* Desktop list */}
          <div className={` lg:flex items-start gap-x-[60px] hidden `}>
            <CustomLinks text="Explore" href={"#explore"} />
            <CustomLinks text="Mentors" href={"#"} />
            <CustomLinks text="Faq" href={"#faq"} />
            <CustomLinks text="Community" href={"#"} />
          </div>
          {/* CTA */}
          <div className=" items-center gap-x-[23px] hidden lg:flex">
            {/* <Contact
              text="Login"
              className="text-gray-700 text-base font-inter font-bold leading-6"
            /> */}
            <Contact
              href="/introductory-call"
              text="Get Started" //" Start Now"
              className="bg-[#1A75FF] rounded-[8px] px-[20px] py-[10px] text-white font-bold"
            />
          </div>
          {/* Mobile */}
          <div className="lg:hidden" onClick={toggleMenu}>
            {" "}
            {/* <Hamburger /> */}
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-5 h-0.5 bg-gray-600"></span>
            </div>
          </div>
          {/*  Mobile side bar calling */}
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};

export default Navbar;

// Movile navbar

const MobileNav = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarVariants = {
    open: { x: "100%" },
    closed: { x: "0%" },
  };

  const linksVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const buttonVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  return (
    <>
      {/* drop shadow */}
      {isOpen && (
        <div onClick={toggleMenu} className="w-full h-full fixed inset-0 z-10">
          <div className="w-full h-screen bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg"></div>
        </div>
      )}

      <motion.nav
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-100 lg:hidden z-20 ${
          isOpen ? "" : "opacity-0"
        }`}
        initial="closed"
        animate={isOpen ? "closed" : "open"}
        variants={navbarVariants}
        transition={{ duration: 0.3 }}
      >
        {/* <div onClick={toggleMenu}>remove</div> */}
        <div onClick={toggleMenu} className="p-5">
          {" "}
          <HamburgerClose />
        </div>

        <motion.div className="flex flex-col items-start px-6 py-10">
          <motion.div
            className="flex flex-col gap-2"
            variants={linksVariants}
            transition={{ duration: 0.2 }}
          >
            <CustomLinks text="Explore" href={"#explore"} />
            <CustomLinks text="Mentors" href={"#"} />
            <CustomLinks text="Faq" href={"#faq"} />
            <CustomLinks text="Community" href={"#"} />
          </motion.div>

          <motion.div
            className="mt-auto flex flex-col gap-2"
            variants={buttonVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="borde w-full h-[1px] bg-black my-10"></div>
            <div className="flex flex-col gap-y-5">
              {/* <Contact
                text="Login"
                className="text-gray-700 text-base font-inter font-bold leading-6"
              /> */}
              <Contact
                href="/introductory-call"
                text="Get Started" //"Start Now"
                className="custom-button"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
};
