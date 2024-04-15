import React from "react";
import "./Banner.scss";
import logoBanner from "./logo-banner.png"
import Navigateur from "../Navigateur/Navigateur";

function Banner() {
  return (
    <div className="banner">
        <img src={logoBanner} alt="Logo Kasa" />
        <Navigateur />
    </div>
  );
}

export default Banner;