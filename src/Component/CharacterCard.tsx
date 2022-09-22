import {Character} from "../Model/Character";
import './CharacterCard.css';

export default function CharacterCard(character : Character) {
    return(
        <div className ={"character-card"}>
            <h3>
                {character.name}
            </h3>
             <p>
                 <img src={character.image} alt={character.name}/>
            </p>
            <p>
                 Status : {character.status}
            </p>
        </div>

    )
}