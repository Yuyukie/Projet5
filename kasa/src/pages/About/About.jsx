import React from "react";
import banner2 from "../../assets/images/img-2.png";
import Banner from "../../components/Banner/Banner";
import data from "../../data/collapse.json";
import Collapse from "../../components/Collapse/Collapse";
import "./About.scss"

function About() {
  const opacityValue = 0.7;
  const size = "24px"
  return (
    <div className="about">
      <Banner imageSrc={banner2} opacite={opacityValue}/>
      <div className="collapse-container">
      {data.map((item, index) => (
        <Collapse key={index} title={item.aboutTitle} text={item.aboutText} fontSize={size}/>
      ))}
      </div>
    </div>
  );
}

export default About;