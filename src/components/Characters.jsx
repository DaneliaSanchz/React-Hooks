import { useState, useEffect, useReducer } from 'react';
import '../styles/Characters.css';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }

    return (
        <div className='Characters'>
            {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                {favorite.name}
                </li>
            ))}

            {characters.map(character => (
                <div className='Card' key={character.id}>
                    <img src={character.image}/>
                    <h2>{character.name}</h2>
                    <p>{character.gender}</p>
                    <p>{character.species}</p>
                    <p>{character.status}</p>
                    <button type="button" onClick={() => handleClick(character)}>Add to Favorites</button>
                </div>
            ))}
        </div>
    );
}

export default Characters;
