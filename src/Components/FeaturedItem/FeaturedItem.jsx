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
   rgba(238, 13, 9, 0.8),
   rgba(238, 13, 9, 0.8)
 ),
 url(${image})`;
  const lg3 = `linear-gradient(
   to right,
   rgba(0, 0, 0, 0.863),
   rgba(0, 0, 0, 0.863)
 ),
 url(${image})`;

  const condition = id === 1 ? lg : id === 2 ? lg2 : lg3;

  return (
    <div className="featured-item" style={{ backgroundImage: condition }}>
      <Icon className="featured-icon" />

      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default FeaturedItem;
