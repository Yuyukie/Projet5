
import Collapse from "../Collapse/Collapse"
import Data from "../../data/data.json"
import Erreur from "../Erreur404/Erreur404"
import "../../General.scss"


function Description ({logementId}) {
    const logement = Data.find((log) => log.id === logementId)

    if (!logement) {
        return <div>{Erreur}</div>
    }

    return (
        <div>
            <Collapse title="Description" text={logement.description} />
        </div>

    )
}

export default Description