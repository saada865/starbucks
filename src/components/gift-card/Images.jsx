import React from "react";
import picture1 from "../assets/carousel-1.jpg";
import picture2 from "../assets/carousel-2.jpg";
import picture3 from "../assets/carousel-3.jpg";
import picture4 from "../assets/carousel-4.jpg";

const Images = ({ text, ...props }) => {
  return (
    <div className="flex flex-col ml-24 mt-8">
      <h2 className="font-bold tracking-wider text-sm">{text}</h2>
      <div className="flex flex-row space-x-4 mt-8">
        {Object.entries(props).map(([key, value]) => (
          <div key={key} className="">
            <img
              src={value}
              alt={key}
              className="h-44 w-[280px]  rounded-2xl mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
