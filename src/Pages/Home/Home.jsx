import React from "react";
import Carousel, {
  CarouselItem,
} from "../../Components/CarouselItem/CarouselItem";
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
                  <br></br> confident in our level of service that we back it up
                  with a <br></br> good quality. Your safety is our first
                  priority.
                </p>
                <button className="btn btn-lg">Our Services</button>
              </div>
            </div>
          </CarouselItem>
        ))}
        {/* <CarouselItem>
          <div className="caro-item-1">
            <div className="caro-inner">
              <h1>
                Tuneup Your Car <br></br> to next level
              </h1>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="caro-item-2">
            <div className="caro-inner">
              <h1>
                Highly skilled <br></br> certified enginniers
              </h1>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="caro-item-3">
            <div className="carro-inner">
              <h1>
                Modern Workshop <br></br> for car repairs
              </h1>
            </div>
          </div>
        </CarouselItem> */}
      </Carousel>
    </div>
  );
};

export default Home;
