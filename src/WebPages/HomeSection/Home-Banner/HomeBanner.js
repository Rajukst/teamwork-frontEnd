import React from "react";
import bannerImg from "../../../Images/top-banner.png";
import bannerImg2 from "../../../Images/top.jpg";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div>
      <img
        className="img-fluid my-image"
        src={bannerImg2}
        alt="Girl with Books"
      />
    </div>
  );
};

export default HomeBanner;
