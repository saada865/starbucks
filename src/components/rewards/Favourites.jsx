import React from "react";
import coffee from "../assets/coffee.webp";

const Favourites = () => {
  return (
    <div className=" pt-12 bg-[#eff3f1]">
      <div className="flex flex-col items-center ">
        <h2 className=" text-3xl font-semibold tracking-wide">
          Get your favorites for free
        </h2>
        <div className="flex flex-row  space-x-14 mt-16 mb-2">
          <h2 className="text-2xl tracking-wide font-semibold">25</h2>
          <h2 className="text-2xl tracking-wide font-semibold">100</h2>
          <h2 className="text-2xl tracking-wide font-semibold">200</h2>
          <h2 className="text-2xl tracking-wide font-semibold">300</h2>
          <h2 className="text-2xl tracking-wide font-semibold">400</h2>
        </div>
        <div className="flex flex-row pt-16 pb-8 px-80 space-x-16 bg-[#d6eae1]">
          <img src={coffee} className="h-2/5 w-2/5" alt="" />
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold tracking-wide">
              Customize your drink
            </h2>
            <p>
              Make your drink just right with an extra espresso shot, nondairy
              milk or a dash of your favorite syrup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
