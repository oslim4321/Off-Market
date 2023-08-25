import {
  FacebookOIcon,
  GitHub,
  InstragramIcon,
  TwitterIcon,
  poppins,
} from "@/utility/Font";
import React from "react";

const Footer = () => {
  return (
    <div
      className={`md:h-[35vh] flex flex-col justify-center items-center text-[#999FA8] font-light my-5 font- ${poppins.className}`}
    >
      <ul className="flex justify-center items-center flex-col md:flex-row gap-3 sm:gap-6 md:gap-10">
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          Explore
        </li>
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          Mentors
        </li>
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          FAQ
        </li>
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          Community
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-3 sm:gap-6 md:gap-10 my-5 md:my-8">
        {/* <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          <FacebookOIcon />
        </li>
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          <TwitterIcon />
        </li>
        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          <InstragramIcon />
        </li>

        <li className="text-[#999FA8] font-thin text-base font-normal leading-7">
          <GitHub />
        </li> */}
      </ul>
      <p className="text-[#999FA8] font-thin text-base font-normal leading-7">
        © 2023 Off Market. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
