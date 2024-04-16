import React from "react";
import "./Card.scss";

function Card({ cover, title }) {
  return (
    <section className="card-logement">
      <img src={cover} alt="location" />
      <div className="card-logement-text">
        <p className="card-logement-title">{title}</p>
      </div>
    </section>
  );
}

export default Card;