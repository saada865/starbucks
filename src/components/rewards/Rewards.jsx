import React from "react";
import Top from "./Top";
import Star from "./Star";
import GettingStarted from "./GettingStarted";
import Favourites from "./Favourites";
import Extras from "./Extras";
import CashOrCards from "./CashOrCards";
import RewardsComing from "./RewardsComing";
import Questions from "./Questions";
import Restrictions from "./Restrictions";
import Footer from "../utils/Footer";

const Rewards = () => {
  return (
    <div className="">
      <Top />
      <Star />
      <GettingStarted />
      <Favourites />
      <Extras />
      <CashOrCards />
      <RewardsComing />
      <Questions />
      <Restrictions />
      <Footer />
    </div>
  );
};

export default Rewards;
