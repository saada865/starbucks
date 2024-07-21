import React from "react";

const ExtrasCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} className=" h-28 w-28 mb-8" alt="" />
      <h2 className="text-lg tracking-wide font-semibold mb-5">{title}</h2>
      <p className="tracking-wide">{text}</p>
      <a className="tracking-wide text-green-800 mt-4 underline" href="#">
        Learn more
      </a>
    </div>
  );
};

export default ExtrasCard;
