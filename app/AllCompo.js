"use client";
import React from "react";
import CalenderDisplay from "@/components/CalenderDisplay";
import FAQ from "@/components/FAQ";
import Heropage from "@/components/Heropage";
import HowWeWork from "@/components/HowWeWork";
import SatisfiedClient from "@/components/SatisfiedClient";
import SeeResults from "@/components/SeeResults";
import Testimonial from "@/components/Testimonial";
import TrustedBy from "@/components/TrustedBy";
import WeeksCoaching from "@/components/WeeksCoaching";
import GetInTouch from "@/components/GetInTouch";
import { LazyMotion, domAnimation } from "framer-motion";
import FormspreeProviderContext from "./formspreeContext";

const AllCompo = () => {
  return (
    <div>
      {" "}
      <LazyMotion features={domAnimation}>
        <FormspreeProviderContext>
          <Heropage />
          <TrustedBy />
          <SeeResults />
          <HowWeWork />
          <CalenderDisplay />
          <Testimonial />
          <WeeksCoaching />
          <FAQ />
          <SatisfiedClient />
          <GetInTouch />
        </FormspreeProviderContext>
      </LazyMotion>
    </div>
  );
};

export default AllCompo;
