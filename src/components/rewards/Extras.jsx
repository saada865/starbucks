import React from "react";
import extras1 from "../assets/extras1.webp";
import extras2 from "../assets/extras2.webp";
import extras3 from "../assets/extras3.webp";
import ExtrasCard from "./ExtrasCard";

const Extras = () => {
  return (
    <div className="my-28 mx-28">
      <div className="flex flex-col text-center">
        <h3 className="text-3xl font-semibold tracking-wide ">
          Endless Extras
        </h3>
        <p className="mt-3 tracking-wide">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
        <div className="flex flex-row space-x-10 mt-10">
          <ExtrasCard
            img={extras1}
            title="Fun freebies"
            text="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
          />
          <ExtrasCard
            img={extras2}
            title="Order & pay ahead"
            text="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
          />
          <ExtrasCard
            img={extras3}
            title="Get to free faster"
            text="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
          />
        </div>
      </div>
    </div>
  );
};

export default Extras;
