import React from "react";
import featuredImgfour from "../../images/featured-on/cbs.webp";
import featuredImgTwo from "../../images/featured-on/forbes.webp";
import featuredImgFive from "../../images/featured-on/inc.webp";
import featuredImgOne from "../../images/featured-on/nbc.webp";
import featuredImgThree from "../../images/featured-on/newyorktimes.webp";
import "./FeaturedOn.css";

const featuredImages = [
  featuredImgOne,
  featuredImgTwo,
  featuredImgThree,
  featuredImgfour,
  featuredImgFive,
];

const FeaturedOn = () => {
  return (
    <div className="featured-on-main">
      <div className="featured-on container">
        <h2>Featured On</h2>
        {featuredImages.map((img, idx) => (
          <img src={img} key={idx} alt="featured on"></img>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;
