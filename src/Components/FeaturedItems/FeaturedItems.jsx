import React from "react";
import { GiMechanicGarage } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";
import { SiFastify } from "react-icons/si";
import featuredImgTwo from "../../images/featured-in/expert-featured.jpg";
import featuredImgThree from "../../images/featured-in/fastest-featured.jpg";
import featuredImgOne from "../../images/featured-in/reasonable-price-featured.png";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import "./FeaturedItems.css";

const featured = [
  {
    id: 1,
    Icon: MdPriceCheck,
    image: featuredImgOne,
    heading: "Reasonable Price",
    text: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    Icon: GiMechanicGarage,
    image: featuredImgTwo,
    heading: "Expert Mechanic",
    text: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    Icon: SiFastify,
    image: featuredImgThree,
    heading: "Fast Feature Delivery",
    text: "Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

const FeaturedItems = () => {
  return (
    <div className="featured-items container">
      {featured.map((fea) => (
        <FeaturedItem key={fea.id} feature={fea} />
      ))}
    </div>
  );
};

export default FeaturedItems;
