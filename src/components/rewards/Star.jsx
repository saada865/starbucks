import React from "react";
import star from "../assets/img4.webp";

const Star = () => {
  return (
    <div className=" bg-[#d6eae1]">
      <div className="flex flex-row">
        <div className="flex flex-col mt-48 pl-10">
          <h2 className=" text-4xl font-semibold space-y-36 tracking-wide">
            FREE COFFEE <br /> IS A TAP AWAY
          </h2>
          <p className=" mt-6 text-lg tracking-wide">
            Join now to start earning Rewards.
          </p>
          <button className=" bg-green-700 text-white rounded-2xl w-24 h-8 mt-10">
            Join now
          </button>
          <p className="mt-4 text-lg tracking-wide">
            Or join in the app for the best experience
          </p>
        </div>
        <div className="">
          <img className=" ml-[255px] h-[800px] w-[800px]" src={star} alt="" />
        </div>
      </div>
    </div>
  );
};
// bg-[#d6eae5]
export default Star;
