import React from "react";
import StarEmpty from "./Star-empty.png";
import starFull from "./Star-full.png";

function Note({ rating }) {
    const renderStars = (rating) => {
      const note = [];
      const maxStars = 5;
  
      // Boucle pour créer les étoiles
      for (let i = 1; i <= maxStars; i++) {
        const starSrc = i <= rating ? starFull : StarEmpty;
  
        note.push(<img key={i} src={starSrc} alt="note" />);
      }
  
      return note;
    };
  
    return (
      <div className="note">
        <div className="rating">{renderStars(rating)}</div>
      </div>
    );
  }

export default Note;