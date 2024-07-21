import React from "react";

const Restrictions = () => {
  return (
    <div className="bg-[#eff3f1]">
      <div className="flex flex-col mx-12 py-10 space-y-2">
        <p className="text-sm tracking-wide">
          At participating stores. Restrictions apply.
        </p>
        <p className="text-sm tracking-wide">
          1Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. Flights purchased close to departure may not earn
          double Stars. Stars and miles may not be earned on purchases of
          alcohol, Starbucks Cards and Starbucks Card reloads.
        </p>
        <p className="text-sm tracking-wide">
          2At participating stores only. Some restrictions apply. Linked Card
          members will earn 2% Cash Back on the full purchase price of every
          Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars
          may not be earned on purchases of alcohol or on reloads of Starbucks
          Cards that are not registered. For details, visit Terms and Conditions
          . Bank of America, N.A. Member FDIC.↩
        </p>
        <p className="text-sm tracking-wide">
          3Individuals must link loyalty program accounts to participate in
          offer. Members with linked accounts will earn: (a) double Starbucks
          Rewards Stars on Qualifying Starbucks Transactions during Eligible
          Stays at Participating Marriott Bonvoy Hotels, excluding stays at
          Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht
          Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of
          3 Qualifying Starbucks Transactions during Marriott Bonvoy Week.
          Qualifying Starbucks Transactions must be made at U.S. participating
          Starbucks stores and exclude purchases of alcoholic beverages,
          Starbucks Card eGifts and physical Starbucks gift. To earn Double
          Stars, the applicable stay must qualify as an Eligible Stay at a
          Participating Marriott Bonvoy® Hotel under offer terms and conditions.
          Other restrictions and exclusions apply. For full offer terms and
          conditions, visit Starbucks.com/MarriottBonvoy . Marriott Bonvoy® and
          its affiliated brands and hotels are the registered trademarks and/or
          service marks of Marriott International, Inc. and its affiliates. Used
          under license from Marriott International, Inc.↩
        </p>
        <div className="flex flex-row space-x-12">
          <div className="flex flex-col space-y-2">
            <h3 className=" my-3 text-sm font-bold">EARNING STARS</h3>
            <p className="text-sm tracking-wide">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p className="text-sm tracking-wide">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p className="text-sm tracking-wide">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="my-3 text-sm font-bold">TERMS OF USE</h3>
            <p className="text-sm tracking-wide">
              For full program details visit starbucks.com/rewards/terms .
            </p>
            <p className="text-sm tracking-wide">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the Starbucks Store Locator and search for
              locations honoring “Redeem Rewards”.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h3 className="my-3 text-sm font-bold">BENEFITS</h3>
            <p className="flex flex-col">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="my-3 text-sm font-bold">REDEEMING REWARDS</h3>
            <p className="text-sm tracking-wide">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. You pay the difference for any beverage customization over
              $1 and/or merchandise item over $20. Not all stores honor tiered
              Rewards. Select stores redeem 200 Stars for free food or drink
              items only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restrictions;
