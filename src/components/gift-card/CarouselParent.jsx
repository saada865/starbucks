import Carousel from "./Carousel";
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

const slides = [
  {
    picture1: img1,
    picture2: img2,
    picture3: img3,
    picture4: img4,
  },
  {
    picture1: img5,
    picture2: img6,
    picture3: img7,
    picture4: img8,
  },
  {
    picture1: img9,
    picture2: img10,
    picture3: img11,
    picture4: img12,
  },
];

const CarouselParent = ({ text }) => {
  return (
    <div className="  ">
      <div className="flex flex-col rounded-2xl">
        <p className="font-bold tracking-wider text-sm ml-24 my-4">{text}</p>
        <div className="">
          <Carousel autoSlide={true}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-row text-black font-bold p-4 text-center items-center justify-center space-x-6"
              >
                <img
                  src={slide.picture1}
                  alt=""
                  className=" h-44 w-[280px]  rounded-2xl mb-4"
                />
                <img
                  src={slide.picture2}
                  alt=""
                  className=" h-44 w-[280px]  rounded-2xl mb-4"
                />
                <img
                  src={slide.picture3}
                  alt=""
                  className=" h-44 w-[280px]  rounded-2xl mb-4"
                />
                <img
                  src={slide.picture4}
                  alt=""
                  className=" h-44 w-[280px]  rounded-2xl mb-4"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselParent;
