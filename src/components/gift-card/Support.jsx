import React from "react";

const Support = () => {
  return (
    <div className="bg-neutral-300 pl-24 py-10">
      <div className="flex flex-col space-y-5">
        <h3 className="font-bold tracking-wider text-sm">GIFT CARD SUPPORT</h3>
        <p className="tracking-wide">
          Use the links below to manage eGifts you have <br />
          sent or received, or view our full Card Terms & Conditions.
        </p>
        <div className="flex flex-row space-x-4">
          <button className="border-black border-[1.5px] rounded-2xl p-1">
            eGift Support
          </button>
          <button className="border-black border-[1.5px] rounded-2xl p-1">
            See Terms and Conditions
          </button>
          <button className="border-black border-[1.5px] rounded-2xl p-1">
            eGift FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
