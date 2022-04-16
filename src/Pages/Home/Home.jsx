import React from "react";
import Carousel, {
  CarouselItem,
} from "../../Components/CarouselItem/CarouselItem";
import FeaturedItems from "../../Components/FeaturedItems/FeaturedItems";
import FeaturedOn from "../../Components/FeaturedOn/FeaturedOn";
import bannerImageOne from "../../images/banner-image-1.jpg";
import bannerImageTwo from "../../images/banner-image-2.jpg";
import bannerImageThree from "../../images/banner-image-3.jpg";
import "./Home.css";

const carouselItems = [
  {
    id: 1,
    heading: "Tuneup Your Car to next level",
    image: bannerImageOne,
  },
  {
    id: 2,
    heading: "Highly skilled certified enginniers",
    image: bannerImageTwo,
  },
  {
    id: 3,
    heading: "Modern Workshop for car repairs",
    image: bannerImageThree,
  },
];

const Home = () => {
  return (
    <>
      <div>
        <Carousel>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item}>
              <div className="caro-inner">
                <div>
                  <h1>
                    {item.heading.split(" ").slice(0, 2).join(" ")} <br></br>{" "}
                    {item.heading.split(" ").slice(2).join(" ")}
                  </h1>
                  <p>
                    We believe in providing top quality workmanship and are so{" "}
                    <br></br> confident in our level of service that we back it
                    up with a <br></br> good quality. Your safety is our first
                    priority.
                  </p>
                  <button className="btn btn-lg">Our Services</button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <FeaturedOn />
      <FeaturedItems />
    </>
  );
};

export default Home;
