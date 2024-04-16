import React from "react";
import { Link } from "react-router-dom";
import "./Acceuil.scss"
import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/images/img-1.png";
import data from "../../data/data.json";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="acceuil-container">
        <Banner imageSrc={banner1} title="Chez vous, partout et ailleurs" />
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