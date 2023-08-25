import { GreyText } from "@/utility/Font";
import { ImgComp } from "@/utility/Image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="my-20">
      <div className="sideSpace">
        <div className="mb-4">
          <GreyText text="Trusted by" className={"!capitalize"} />
        </div>
        <div className="flex justify-between items-start overflow-x-scroll no-scrollbar">
          <ImgComp
            src={"/images/Noviexia.svg"}
            alt="trusted by Noviexia"
            className="w-[163px] h-[32px] mx-4 md:mx-0"
          />
          <ImgComp
            src={"/images/ZenithRon.svg"}
            alt="trusted by ZenithRon"
            className="w-[163px] h-[32px] mx-4 md:mx-0"
          />
          <ImgComp
            src={"/images/skyWaves.svg"}
            alt="trusted by skyWaves"
            className="w-[163px] h-[32px] mx-4 md:mx-0"
          />
          <ImgComp
            src={"/images/NexaCore.svg"}
            alt="trusted by NexaCore"
            className="w-[163px] h-[32px] mx-4 md:mx-0"
          />
          <ImgComp
            src={"/images/eliteXel.svg"}
            alt="trusted by eliteXel"
            className="w-[163px] h-[32px] mx-4 md:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
