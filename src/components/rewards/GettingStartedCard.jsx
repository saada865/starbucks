import React from "react";

const GettingStartedCard = ({ number, heading, text }) => {
  return (
    <div className="flex flex-col items-center space-y-5 mt-12">
      <div className=" text-2xl border-green-700 border-[1px] h-12 w-12 p-2 rounded-full items-center text-center justify-center font-semibold text-green-700">
        {number}
      </div>
      <h3 className="font-semibold text-lg tracking-wide">{heading}</h3>
      <p className="tracking-wide">{text}</p>
    </div>
  );
};

export default GettingStartedCard;
