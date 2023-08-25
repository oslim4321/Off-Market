"use client";

// import { HeadingText } from "@/utility/Font";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkdveno");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center text-green-400 ">
        <p>Thanks for contacting, we will get back to you!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      // name="contact"
      // method="POST"
      // action="https://formspree.io/f/xyyblqvo"
    >
      <div className="mb-6">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="px-4 py-2 w-full bg-black text-white transition duration-300 border border-gray-500 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A75FF]"
        />
      </div>
      <div className="text-red-700">
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        ></ValidationError>
      </div>
      <div className="mb-6">
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="Message"
          className="px-4 py-2 w-full text-white bg-black transition duration-300 border border-gray-500 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A75FF]"
        ></textarea>
      </div>
      <div className="text-red-700">
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        ></ValidationError>
      </div>
      <div className="mb-6 flex md:justify-end">
        <button
          type="submit"
          disabled={state.submitting}
          className=" px-3 py-3 text-white md:w-[30%] font-extrabold bg-gray-400 rounded-md focus:bg-[#1A75FF] focus:outline-none"
        >
          Send Mail
        </button>
      </div>
      <ValidationError
        className="text-red-700"
        errors={state.errors}
      ></ValidationError>
    </form>
  );
};
export default Contact;
