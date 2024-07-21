import React from "react";
import logo1 from "../assets/delta.webp";
import logo2 from "../assets/bank.webp";
import logo3 from "../assets/marriott-logo.webp";
import plants from "../assets/plants.avif";

const RewardsComing = () => {
  return (
    <div className="relative mb-10">
      <img src={plants} alt="" className=" h-[475px] w-full " />
      <div className=" flex flex-col justify-center items-center  bg-[#b8dcdc] absolute top-0 left-0 text-center m-8 pt-8 px-8 pb-14">
        <h2 className="text-3xl font-semibold tracking-wide mb-5">
          Keep the rewards coming
        </h2>
        <p className="tracking-wide">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
          and unlock perks from our partners, all while earning more Stars.
        </p>
        <div className="flex flex-row px-32 mt-10 space-x-8">
          <div className="flex flex-col text-center items-center">
            <img src={logo1} alt="" className="h-20 w-40 mb-8" />
            <p className="tracking-wide">
              Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn
              miles on Starbucks Card reloads of $25 or more, plus Double Stars
              on travel days.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src={logo2} alt="" className="h-20 w-40 mb-8" />
            <p className="tracking-wide">
              Link your Bank of America eligible card and Starbucks® Rewards
              account to earn 2% Cash Back and Bonus Stars on qualifying
              Starbucks in-app purchases.
            </p>
          </div>
          <div className="flex flex-col text-center items-center">
            <img src={logo3} alt="" className="h-20 w-40 mb-8" />
            <p className="tracking-wide">
              Link your Marriott Bonvoy® and Starbucks® Rewards accounts to earn
              Double Stars during eligible stays, points during any Marriott
              Bonvoy Week and more.
            </p>
          </div>
        </div>
        <div>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default RewardsComing;
