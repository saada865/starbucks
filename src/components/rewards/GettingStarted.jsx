import React from "react";
import GettingStartedCard from "./GettingStartedCard";

const GettingStarted = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center my-28">
        <h2 className="text-3xl mb-3 font-semibold tracking-wide">
          Getting started is easy
        </h2>
        <p className=" tracking-wide">
          Earn Stars and get rewarded in a few easy steps.
        </p>
        <div className="flex flex-row px-32 space-x-14 text-center items-center justify-center">
          <GettingStartedCard
            number={1}
            heading="Create an account"
            text="To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits."
          />
          <GettingStartedCard
            number={2}
            heading="Order and pay how you’d like"
            text="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how"
          />
          <GettingStartedCard
            number={3}
            heading="Earn Stars, get Rewards"
            text="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
