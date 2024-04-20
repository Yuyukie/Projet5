import React, { useState,useEffect } from "react";
    import next from "./arrow-next.png";
    import previous from "./arrow-previous.png";
    import "./Carrousel.scss";
    
    function Carrousel({ pictures }) {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [totalSlides, setTotalSlides] = useState(pictures.length);
        const showControls = totalSlides > 1;
    
    
        const goToNextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
        };
    
        const goToPreviousSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
        };
        

        return (
            <div className="carrousel">
                 {showControls && (
                <div className="arrow arrow-left" onClick={goToPreviousSlide}>
                    <img src={previous} alt="fleche retour" />
                </div>
                  )}
                <div className="carrousel-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {pictures.map((picture, index) => (
                        <img
                            key={index}
                            src={picture}
                            alt={`Slide ${index}`}
                            className="carrousel-image"
                        />
                    ))}
                </div>
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