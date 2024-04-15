import { Link } from 'react-router-dom'
import logo from "./logo-Header.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <link to="/">Acceuil</link>
        <link to="/About">A propos</link>
      </nav>
    </header>
  );
}

export default Header;