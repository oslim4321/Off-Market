import { HeadingText } from "@/utility/Font";
import { ImgComp } from "@/utility/Image";
import Contact from "./Contact";

const GetInTouch = () => {
  return (
    <div className="bg-[#0F172A] my-20 py-10">
      <div className=" max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-12 mx-20 place-content-center">
        <div className="flex items-start gap-y-5 p-5 justify-center flex-col w-full col-span-12 md:col-span-6">
          <HeadingText text="Get in touch -" className=" !text-white" />
          <p className="text-white text-[20px] md:w-[70%] font-bold leading-normal tracking-wide opacity-80">
            For any further information or assistance, please feel free to get
            in touch with our dedicated customer support team.
          </p>
          <ImgComp
            src={"/images/pattern.svg"}
            alt="pattern"
            className={"w-[133px] h-10"}
          />
          {/* phone */}
          <div className="flex items-center gap-x-4">
            <ImgComp
              src="/images/tabler-icon-phone-call.svg"
              alt="phone"
              className="w-10"
            />
            <a href="tel:+12064266949" className="text-[#FFFFFFCC]">
              (206) 426-6949
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center gap-x-4">
            <ImgComp src="/images/mail.svg" alt="phone" className="w-10" />
            <a href="mailto:info@off-market.us" className="text-[#FFFFFFCC]">
              info@off-market.us
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="m-7d  w-full">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
