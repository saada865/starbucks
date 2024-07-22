import React, { useState } from "react";

import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";
import img3 from "../assets/carousel-3.jpg";

const categories = {
  "Iced Energy": [
    { name: "Tropical Citrus Iced Energy (VENTI ONLY)", image: img1 },
    { name: "Melon Burst Iced Energy (VENTI ONLY)", image: img2 },
    {
      name: "Frozen Tropical Citrus Iced Energy with Strawberry Puree (VENTI ONLY)",
      image: img3,
    },
    // Add more drinks here
  ],
  "Hot Coffees": [
    // Add hot coffee drinks here
  ],
  "Cold Coffees": [
    // Add cold coffee drinks here
  ],
  // Add more categories and drinks here
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Iced Energy");

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <h2>Drinks</h2>
        <ul>
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
      <div className="w-3/4 p-4">
        <h2>{selectedCategory}</h2>
        <div className="flex flex-wrap space-x-4">
          {categories[selectedCategory].map((drink, index) => (
            <div key={index} className="text-center">
              <img
                src={drink.image}
                alt={drink.name}
                className="h-44 w-[280px] rounded-2xl mb-4"
              />
              <p>{drink.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
