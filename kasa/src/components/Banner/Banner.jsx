import React from "react";
import "./Banner.scss";

function Banner({ imageSrc, title, opacite }) {

  const style = {
    opacity: opacite,
  };

  return (
    <div className="banner" >
      <div className="overlay" ></div>
      <img src={imageSrc} alt="img" className="banner-image" style={style} />
      <div className="bannerText">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;