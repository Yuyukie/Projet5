import { NavLink } from "react-router-dom";
import logo from "./logo-Header.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink  to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/About">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;