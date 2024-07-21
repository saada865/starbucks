import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.webp";
import row21 from "../assets/row21.png";
import row22 from "../assets/row22.webp";

const CashOrCards = () => {
  return (
    <div className="pt-12 bg-[#f3f1ed] py-10 px-10 ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold tracking-wide mb-4">
          Cash or Card, you earn stars
        </h2>
        <p className="tracking-wide">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="flex flex-row mt-20 pr-64">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-wide">
            1 ★ per dollar
          </h2>
          <p>Pay as you go</p>
        </div>
        <div className="flex flex-row  space-x-5">
          <div>
            <img className=" h-40 w-28" src={img1} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-wide mb-5">
              Scan and pay separately
            </h2>
            <p>
              Use cash or credit/debit card at the <br /> register.
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-8"></div>
        <div className="flex flex-row  space-x-5">
          <div>
            <img className=" h-40 w-28" src={img2} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-wide mb-5">
              Save payment in the app
            </h2>
            <p>
              Check-out faster by saving a <br /> credit/debit card or PayPal to
              your <br /> account. You’ll be able to order <br /> ahead or scan
              and pay at the register <br /> in one step.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-600 border-[0.25px]" />
      <div className="flex flex-row mt-20 pr-64">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-wide">
            2 ★ per dollar
          </h2>
          <p>Pay as you go</p>
        </div>
        <div className="flex flex-row  space-x-5">
          <div>
            <img className=" h-40 w-28" src={row21} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-wide mb-5">
              Preload
            </h2>
            <p>
              To save time and earn Stars twice as <br /> fast, add money to
              your digital <br /> Starbucks Card using any payment option.{" "}
              <br /> Scan and pay in one step or <br />
              order ahead in the app.
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-8"></div>
        <div className="flex flex-row  space-x-5">
          <div>
            <img className=" h-40 w-28" src={row22} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-wide mb-5">
              Register your gift card
            </h2>
            <p>
              Then use it to pay through the app. <br /> You can even
              consolidate balances <br />
              from multiple cards in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOrCards;
