import { useState, useEffect } from 'react';
import '../styles/Characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, [])

    return (
        <div className='Characters'>
            {characters.map(character => (
                <div className='Card'>
                    <img src={character.image}/>
                    <h2>{character.name}</h2>
                    <p>{character.gender}</p>
                    <p>{character.species}</p>
                    <p>{character.status}</p>
                </div>
            ))}
        </div>
    )
}

export default Characters;
