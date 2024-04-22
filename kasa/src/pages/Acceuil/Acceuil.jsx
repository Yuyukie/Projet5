import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Acceuil.scss";
import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/images/img-1.png";
import data from "../../data/data.json";
import Card from "../../components/Card/Card";

function Home() {
  const opacityValue = 0.4;
  const [showAllCards, setShowAllCards] = useState(false);
  const [randomSix, setRandomSix] = useState([]);
  const allCards = data;

  useEffect(() => {
    if (randomSix.length === 0) {
      const randomSix = allCards.sort(() => 0.5 - Math.random()).slice(0, 6);
      setRandomSix(randomSix);
    }
  }, [randomSix, allCards]);

  const handleShowMore = () => {
    setShowAllCards(true);
  };

  const handleShowLess = () => {
    setShowAllCards(false);
  };

  return (
    <div className={`acceuil-container ${showAllCards ? "show-all-cards" : ""}`}>
      <Banner
        imageSrc={banner1}
        title={<>Chez vous, <span> partout et ailleurs</span></>}
        opacite={opacityValue}
      />
      <div className="card-container">
        {(showAllCards ? allCards : randomSix).map((property, index) => (
          <Link key={property.id} to={`/logement/${property.id}`} style={{ transitionDelay: `${index * 50}ms` }}>
            <Card title={property.title} cover={property.cover} />
          </Link>
        ))}
      </div>
      {!showAllCards && (
        <button className="show-more-button" onClick={handleShowMore}>
          Afficher plus
        </button>
      )}
      {showAllCards && (
        <button className="show-less-button" onClick={handleShowLess}>
          Afficher moins
        </button>
      )}
    </div>
  );
}

export default Home;