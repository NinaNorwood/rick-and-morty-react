import {Character} from "../Model/Character";
import './CharacterCard.css';

type CardProps = {character:Character}

export default function CharacterCard(props: CardProps) {
    return(
        <div className ={"character-card"}>
            <h3>
                {props.character.name}
            </h3>
             <p>
                 <img src={props.character.image} alt={props.character.name}/>
            </p>
            <p>
                 Status : {props.character.status}
            </p>
        </div>

    )
}