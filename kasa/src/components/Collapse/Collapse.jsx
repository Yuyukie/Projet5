import React, {useState} from "react";
import "./Collapse.scss";
import "../../General.scss"

function Collapse ({title, text, fontSize}) {
const [isOpen, setIsOpen] = useState(false)


const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

;

return (
  <div className={`collapse ${isOpen ? "open" : ""}`}>
  <button
    className="collapse-title"
    style={{ fontSize: fontSize }}
    onClick={toggleCollapse}
  >
    <h3>{title}</h3>
    <i class={`fa-solid fa-chevron-up chevron ${isOpen ? "open" : ""}`}></i>
  </button>
  <div className={`collapse-text ${isOpen ? "open" : ""}`}>
    <div className={`collapse-content ${isOpen ? "open" : ""}`}>{text}</div>
  </div>
</div>
  );
}

export default Collapse



