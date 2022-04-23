import React from "react";
import "./FeaturedItem.css";

const FeaturedItem = ({ feature }) => {
  console.log(feature);
  const { Icon, image, heading, text, id } = feature;

  const lg = `linear-gradient(
   to right,
   rgba(8, 24, 74, 0.9),
   rgba(8, 24, 74, 0.9)
 ),
 url(${image})`;
  const lg2 = `linear-gradient(
   to right,
   rgba(238, 13, 9, 0.9),
   rgba(238, 13, 9, 0.9)
 ),
 url(${image})`;
  const lg3 = `linear-gradient(
   to right,
   rgba(38, 219, 236, 0.9),
   rgba(38, 219, 236, 0.9)
 ),
 url(${image})`;

  const condition = id === 1 ? lg : id === 2 ? lg2 : lg3;

  return (
    <div className="featured-item" style={{ backgroundImage: condition }}>
      <Icon className="featured-icon" />

      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeaturedItem;
