import React from "react";
import Carousel from "./CarouselParent";
import New from "./New";
import Recieved from "./RecievedComp";
import Images from "./Images";
import Footer from "../utils/Footer";
import BusinessGifting from "./BusinessGifting";
import Support from "./Support";

import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";
import img3 from "../assets/carousel-3.jpg";
import img4 from "../assets/carousel-4.jpg";
import img5 from "../assets/carousel-5.jpg";
import img6 from "../assets/carousel-6.jpg";
import img7 from "../assets/carousel-7.jpg";
import img8 from "../assets/carousel-8.jpg";
import img9 from "../assets/carousel-9.jpg";
import img10 from "../assets/carousel-10.jpg";
import img11 from "../assets/carousel-11.jpg";
import img12 from "../assets/carousel-12.jpg";

const GiftCard = () => {
  const dynamicProps = {
    prop1: img3,
    prop2: img2,
  };
  const dynamicProps2 = {
    prop1: img7,
    prop2: img6,
    prop3: img9,
  };
  const dynamicProps3 = {
    prop1: img6,
    prop2: img5,
    prop3: img9,
    prop4: img10,
  };
  const dynamicProps4 = {
    prop1: img9,
    prop2: img4,
    prop3: img11,
  };
  const dynamicProps5 = {
    prop1: img6,
    prop2: img1,
    prop3: img9,
    prop4: img5,
  };
  const dynamicProps6 = {
    prop1: img10,
    prop2: img2,
    prop3: img4,
  };
  const text = "PARENT'S DAY | 7/28";
  const text2 = "FRIENDSHIP DAY | 7/30";
  const text3 = "BIRTHDAY";
  const text4 = "THANK YOU";
  const text5 = "CELEBRATION";
  const text6 = "SUMMER";
  const text7 = "APPRECIATION";
  const text8 = "ENCOURAGEMENT";

  return (
    <div className="">
      <div className="">
        <Carousel text="FEATURED" />
        <New />
        <Recieved />
        <Images {...dynamicProps} text={text} />
        <Images {...dynamicProps2} text={text2} />
        <Carousel text={text4} />
        <Images {...dynamicProps3} text={text5} />
        <Images {...dynamicProps4} text={text6} />
        <Carousel text={text3} />
        <Images {...dynamicProps6} text={text7} />
        <Images {...dynamicProps5} text={text8} />
        <BusinessGifting />
        <Support />
        <Footer />
      </div>
    </div>
  );
};

export default GiftCard;
