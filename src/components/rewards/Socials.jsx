import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="bg-[#edebeb] px-10 pb-32">
      <hr className="border-gray-300 border-[1px] w-full mb-10" />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4 mb-2">
          <FaFacebook className="h-8 w-8" />
          <FaSpotify className="h-8 w-8" />
          <FaSquareInstagram className="h-8 w-8" />
          <FaPinterest className="h-8 w-8" />
          <RxTwitterLogo className="h-8 w-8" />
          <FaYoutube className="h-8 w-8" />
        </div>
        <p className="tracking-wide">Privacy Notice</p>
        <p className="tracking-wide">Consumer Health Privacy Notice</p>
        <p className="tracking-wide">Terms of Use</p>
        <p className="tracking-wide">Do Not Share My Personal Information</p>
        <p className="tracking-wide">CA Supply Chain Act</p>
        <p className="tracking-wide">Accessibility</p>
        <p className="tracking-wide">Cookie Preferences</p>
        <p className="tracking-wide text-gray-600 text-sm">
          © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Socials;
