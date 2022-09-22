import {Character} from "../Model/Character";
import'./CharacterGallery.css';
import CharacterCard from "./CharacterCard";

export default function CharacterGallery(props:{characters:Character[]}) {

            return <div className ={"cards"}>
                {props.characters.map((char) =>
                        <div className={"card"}>
                {CharacterCard(char)}
                        </div>)}
                    </div>

}