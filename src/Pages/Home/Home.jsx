import React from "react";
import Carousel, {
  CarouselItem,
} from "../../Components/CarouselItem/CarouselItem";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <h2>item 1 </h2>
        </CarouselItem>
        <CarouselItem>
          <h2>item 2</h2>
        </CarouselItem>
        <CarouselItem>
          <h3>item 3</h3>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Home;
