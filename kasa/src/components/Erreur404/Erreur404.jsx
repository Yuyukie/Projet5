import { Link } from "react-router-dom";
import "./Erreur404.scss";

function Erreur404() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link to="/">Mener vers la page d'accueil</Link>
    </div>
  );
}

export default Erreur404;