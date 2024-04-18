import React, { useState, useEffect } from "react";
import next from "./arrow-next.png";
import previous from "./arrow-previous.png";
import "./Carrousel.scss";

function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(pictures.length);
    const showControls = totalSlides > 1;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        setTotalSlides(pictures.length);
        setCurrentSlide(0);
    }, [pictures]);

    return (
        <div className="carrousel">
            {showControls && (
                <div className="arrow arrow-left" onClick={goToPreviousSlide}>
                    <img src={previous} alt="fleche retour" />
                </div>
            )}
            {pictures.map((picture, index) => (
            <img
                key={index}
                src={picture}
                alt={`Slide ${index}`}
                className="carrousel-image"
                style={{ transform: `translateX(${100 *currentSlide}%)`}}
            />
            ))}
            {showControls && (
                <div className="arrow arrow-right" onClick={goToNextSlide}>
                    <img src={next} alt="fleche suivant" />
                </div>
            )}
            {showControls && (
                <div>
                    <p className="image-number">{`${currentSlide + 1}/${totalSlides}`}</p>
                </div>
            )}
        </div>
    );
}

export default Carrousel;