import { NavLink } from 'react-router-dom'
import logo from "./LogoHeader.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo Kasa rouge" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeclassname="active">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;