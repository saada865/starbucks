import React from "react";
import logo2 from "../assets/logo2.webp";

const BusinessGifting = () => {
  return (
    <div className="bg-neutral-100 pl-24  py-12">
      <div className=" flex flex-row space-x-10">
        <img src={logo2} className=" h-1/4 w-1/4" alt="" />
        <div className="flex flex-col w-1/5 space-y-5">
          <h2 className="text-2xl tracking-wide">
            Business gifting — simplified
          </h2>
          <p className="text-neutral-400 tracking-wide">
            Bulk send physical or digital Starbucks Cards to gift, reward,
            incentivize, or show appreciation towards your customers, clients
            and team members. Minimum 15 cards per order.
          </p>
          <button className="border-black border-[1.5px] rounded-2xl p-1 w-28">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessGifting;
