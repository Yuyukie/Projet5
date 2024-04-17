import React, {useState} from "react";
import arrow from "./Vector.png";
import "./Collapse.scss";
import "../../General.scss"

function Collapse ({title, text, fontSize}) {
const [isOpen, setIsOpen] = useState(false)


const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

;

return (
    <div className={`collapse ${isOpen ? "open" : ""}`} >
      <div className="collapse-title"style={{ fontSize: fontSize }}>
        <h3>{title}</h3>
        <img src={arrow} alt="fleche" className={`chevron ${isOpen ? "open" : ""}`} onClick={toggleCollapse}/>
      </div>
      <div className="collapse-text">
        <ul>{text}</ul>
      </div>
    </div>
  );
}

export default Collapse



