import Script from "next/script";

const CalendlyForm = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div
        className={`flex flex-col items-center w-full absolute overflow-hidden h-screen`}
      >
        <p className="text-4xl">Meet with us</p>

        <>
          <div
            className="calendly-inline-widget w-screen h-screen relative"
            data-url={`https://calendly.com/info-off-marketjob/introductory-call?hide_event_type_details=1&hide_gdpr_banner=1`}
          >
            {" "}
          </div>

          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </>
      </div>
    </div>
  );
};

export default CalendlyForm;

{
  /* 
   // ) : (
      //   <div className="absolute inset-0 glass flex items-center justify-center z-20 overflow-y-hideden">
      //     <div id="text"></div>

      //     <PopupWidget
      //       url="https://calendly.com/info-off-marketjob/introductory-call?hide_event_type_details=1&hide_gdpr_banner=1"
      //       rootElement={document.getElementById("root")}
      //       text="Click here to schedule!"
      //       textColor="#ffffff"
      //       color="#00a2ff"
      //     />
      //   </div>
      // )} */
}
{
  /* </div> */
}
