import React, { useState } from "react";

import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";
import img3 from "../assets/carousel-3.jpg";

import cool2 from "../assets/cool2.jpg";
import cool3 from "../assets/cool3.jpg";
import cool4 from "../assets/cool4.jpg";
import cool5 from "../assets/cool5.jpg";
import cool6 from "../assets/cool6.jpg";
import cool7 from "../assets/cool7.jpg";
import cool8 from "../assets/cool8.jpg";

import coffee1 from "../assets/coffee1.jpg";
import coffee2 from "../assets/coffee2.jpg";
import coffee3 from "../assets/coffee3.jpg";
import coffee4 from "../assets/coffee4.jpg";
import coffee5 from "../assets/coffee5.jpg";
import coffee6 from "../assets/coffee6.jpg";

import can1 from "../assets/can1.jpg";
import can2 from "../assets/can2.jpg";
import can3 from "../assets/can3.jpg";
import can4 from "../assets/can4.jpg";
import can5 from "../assets/can5.jpg";
import can6 from "../assets/can6.jpg";

const categories = {
  "Iced Energy": {
    "Cool Drinks": [
      { name: "Tropical Citrus Iced Energy (VENTI ONLY)", image: cool2 },
      { name: "Melon Burst Iced Energy (VENTI ONLY)", image: cool3 },
      {
        name: "Frozen Tropical Citrus Iced Energy with Strawberry Puree (VENTI ONLY)",
        image: cool4,
      },
    ],
  },
  "Hot Coffees": {
    Americanos: [{ name: "Caffee Americanos", image: coffee1 }],
    "Brewed Coffees": [
      { name: "Featured Blonde Roast", image: coffee2 },
      { name: "Featured Medium Roast", image: coffee1 },
      { name: "Featured Dark Roast", image: coffee3 },
      { name: "Decaf Only", image: coffee4 },
      { name: "Veranda Blend", image: coffee4 },
      { name: "Starbucks Green", image: coffee4 },
      { name: "Cover Vertica", image: coffee4 },
      { name: "Caffe Misto", image: coffee2 },
    ],
    Cappucinos: [{ name: "Cappucino", image: coffee3 }],
    "Espresso Shots": [
      { name: "Espresso", image: coffee1 },
      { name: "Espresso Cano", image: coffee5 },
    ],
  },
  "Cold Coffees": {
    "Cold Brew": [
      { name: "White Chocolate", image: cool8 },
      { name: "Cinnamon Caramel", image: cool7 },
      { name: "Salted Caramel Cream Bowl", image: cool4 },
      { name: "Vanilla Sweet Cream Brew", image: cool6 },
    ],
    "Nitro Cold Brews": [
      { name: "Vanilla Sweet Cream Nitro", image: cool3 },
      { name: "Cinnamon Cream Bowl", image: cool3 },
      { name: "Nitro Cold Brew", image: cool2 },
    ],
  },
  "Starbucks Refreshers Beverages": {
    "Seasonal Exclusives": [
      { name: "Summer Berry lemonade", image: cool2 },
      { name: "Summer Skies Drink", image: cool3 },
      { name: "Summer Berry Refreshers Beverage", image: cool8 },
    ],
    "Lemonades and Frozens": [
      { name: "Strawberry Acia Lemonade Burberry", image: cool7 },
      { name: "Mango DragonFruit Lemonade", image: cool5 },
      { name: "Pineapple Passionate Fruit", image: cool6 },
      { name: "Spicy Strawberry", image: cool3 },
      { name: "CSpicy DragonFruit", image: cool4 },
      { name: "Spicy Pineapple", image: cool2 },
      { name: "Frozen Acai", image: cool8 },
      { name: "Frozen mango DragonFruit", image: cool3 },
      { name: "Frozen Pineapple dragonFruit", image: cool2 },
    ],
  },
  "Frappuccino Blended Beverages": {
    "Coffee Frappuccino": [
      { name: "Mocca Cookie Crumple Frappuccino", image: coffee3 },
      { name: "Caramel Ribbon Crunch", image: coffee4 },
      { name: "Espresso Blended Frappuccino", image: coffee5 },
      { name: "Coffee Frapuccino", image: coffee1 },
      { name: "Cafe Vanillo Frappuccino", image: coffee6 },
    ],
    "Creme Frappuccino": [
      { name: "Chocolate Cookie Crumble Creme", image: cool7 },
      { name: "Caramel Ribbon Crunch", image: cool5 },
      { name: "Strawberry Creme Frappuccino", image: cool6 },
      { name: "Chai Frappuccino", image: cool3 },
      { name: "Double Choclaty Creme Frappuccino", image: cool4 },
      { name: "Matcha Creme Frappuccino", image: cool2 },
      { name: "Vanilla Bean Creme", image: cool8 },
      { name: "Frozen mango DragonFruit", image: cool3 },
      { name: "white Chocolate Creme", image: cool2 },
    ],
  },
  "Hot Teas": {
    "Tea Chai": [
      { name: "Tea Chai", image: coffee3 },
      { name: "Hot Chai latte", image: coffee4 },
    ],
  },
  "Ice Tea & Lemonade ": {
    "Iced Black Tea": [
      { name: "Iced Black Tea", image: coffee3 },
      { name: "Iced Black Tea Lemonade", image: coffee4 },
      { name: "Iced London Lattee", image: coffee5 },
      { name: "Iced Royal English Blacked", image: coffee1 },
    ],
    "Iced Chai Teas": [
      { name: "Iced Chai Latte", image: cool7 },
      { name: "Iced Chai Latte with Creme", image: cool5 },
    ],
    "Iced Green Teas": [
      { name: "Green Latte", image: coffee1 },
      { name: "Green Chai Latte with Creme", image: coffee6 },
    ],
    "Iced Chai Teas": [
      { name: "Green Brewed Cold Chai", image: coffee3 },
      { name: "Iced Chai Latte with Vanilla", image: coffee4 },
      { name: "Iced Green Tea Mocca with Vanilla", image: coffee6 },
    ],
    "Iced Herbal Teas": [
      { name: "Iced Herbal Green Drink", image: cool7 },
      { name: "Brown Latte with Vanilla", image: cool5 },
    ],
  },
  "Bottled Water & Drinks": {
    Water: [
      { name: "Flavoured Water", image: can5 },
      { name: "Summer Mineral Water", image: can6 },
    ],
    "Lemonades and Frozens": [
      { name: "Royal Standard", image: can1 },
      { name: "Pepsi Diet", image: can2 },
      { name: "Pepsi", image: can3 },
      { name: "Super Rock", image: can4 },
    ],
  },
};

const Drinks = () => {
  const [selectedCategory, setSelectedCategory] = useState("Iced Energy");

  return (
    <div className="flex">
      <div className="w-1/4 p-4 ml-28">
        <h2 className="text-lg font-semibold tracking-wide mb-4">Drinks</h2>
        <ul className="space-y-4 text-neutral-500">
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4  mr-72">
        <h2 className="text-3xl font-bold tracking-wide">{selectedCategory}</h2>
        {Object.entries(categories[selectedCategory]).map(
          ([subCategory, drinks], index) => (
            <div key={subCategory}>
              {index !== 0 && <hr className="my-4" />}
              <h3 className="text-xl my-5 font-bold tracking-wide">
                {subCategory}
              </h3>
              <div className="flex flex-wrap text-center">
                {drinks.map((drink, idx) => (
                  <div key={idx} className="w-1/4 px-4 my-4">
                    <img
                      src={drink.image}
                      alt=""
                      className=" w-36  h-36  rounded-full"
                    />
                    <p className="tracking-wide text-lg mt-3"> {drink.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Drinks;
