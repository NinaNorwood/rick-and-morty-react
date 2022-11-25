import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./Component/CharacterGallery";
import axios from "axios";
import CharacterCard from './Component/CharacterCard';

export default function App() {

    const[characters, setCharacters] = useState ([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    } , [])
    
    return (
        <div>
            <h1> Rick & Morty Character Suchmaschine </h1>
            <h3>Please type in your favourite character:</h3>
            <CharacterGallery characters={characters}/>
        </div>
    );
}

