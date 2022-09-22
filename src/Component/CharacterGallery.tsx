import {Character} from "../Model/Character";
import'./CharacterGallery.css';
import CharacterCard from "./CharacterCard";
import React, {useState} from "react";

type GalleryProps = {characters:Character[]}

export default function CharacterGallery(props:GalleryProps) {

    const [filterText, setFilterText] = useState("");

    const result = props.characters.filter((char) => char.name.toLowerCase().includes(filterText.toLowerCase()));

            return <div>

                <div className={"input"}>
                <input onChange={(event) =>
                    setFilterText(event.target.value)}/>
                </div>

                <div className ={"cards"}>
                {result.map((char) =>
                        <div className={"card"}>
                              <CharacterCard character= {char}/>
                        </div>)}
                    </div>

            </div>
}