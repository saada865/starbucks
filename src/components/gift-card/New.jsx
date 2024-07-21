import React from "react";
import logo from "../assets/logo.webp";

const New = () => {
  return (
    <div className="ml-24 mr-10 bg-neutral-200 rounded-xl p-3">
      <div className="flex flex-row items-center">
        <img src={logo} className=" h-14 w-14" alt="" />
        <p className=" ml-4">
          New! Effortlessly send up to 10 eGifts per purchase. Select a design
          to start!
        </p>
      </div>
    </div>
  );
};

export default New;
