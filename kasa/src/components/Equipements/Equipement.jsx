import Collapse from "../Collapse/Collapse"
import Data from "../../data/data.json"
import Erreur from "../Erreur404/Erreur404"
import "../../General.scss"

function Equipements({ logementId }) {
    
    const logement = Data.find((log) => log.id === logementId);
  
    if (!logement) {
        return <div>{Erreur}</div>;
    }

    const equipementsList = logement.equipments.map((equipement, index) => (
        <li key={index}>{equipement}</li>
      ));
    
    return (
        <div>
            <Collapse title="Equipements" text={<ul>{equipementsList}</ul>} />
        </div>

    )
}

export default Equipements