import React from "react";
import { Link } from "react-router-dom";
import "./Acceuil.scss"
import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/images/img-1.png";
import data from "../../data/data.json";
import Card from "../../components/Card/Card";

function Home() {
  const opacityValue = 0.4;
  return (
    <div className="acceuil-container">
        <Banner imageSrc={banner1} title="Chez vous, <span> partout et ailleurs</span>" opacite={opacityValue} />
      <div className="card-container">
        {data.map((property) => (
          <Link key={property.id} to={`/logement/${property.id}`}>
            <Card title={property.title} cover={property.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;