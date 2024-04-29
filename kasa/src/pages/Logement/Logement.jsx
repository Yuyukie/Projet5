import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Logement.scss"

import data from "../../data/data.json";
import Description from "../../components/Description/Description";
import Equipements from "../../components/Equipements/Equipement";
import Carousel from "../../components/Carrousel/Carrousel";
import Note from "../../components/Note/Note"

function Logement() {

const { id } = useParams();

const logementId = data.find((log) => log.id === id);


if (!logementId) {
  return <Navigate to="/Erreur404" />;
}

const elementWithPictures = data.filter((element) => element.id === id)[0];

  return (
    <div className="logement-container">
        <Carousel pictures={elementWithPictures ? elementWithPictures.pictures : []} />
      <div className="logement-info">
        <div className="logement-info-1">
          <div className="logement-title">
            <h3>{logementId.title}</h3>
            <p>{logementId.location}</p>
            <div className="tag">
              {logementId.tags && (
                <ul>
                  {logementId.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>)
              }
            </div>
          </div>
        </div>
        <div className="logement-info-2">
          <div className="logement-host">
            <p>{logementId.host.name}</p>
            <img src={logementId.host.picture} alt="Portrait du proprietaire" />
          </div>
          <div className="note">
            <Note rating={logementId.rating} />
          </div>
        </div>
      </div>  
      <div className="collapse-logement">
        <div className="description"> 
          <Description logementId={id} />
        </div>
        <div className="equipements">
          <Equipements logementId={id} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Logement;