import { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';
import useCharacters from '../hooks/useCharacters';
import '../styles/Characters.css';

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/';

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
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search,setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
    )

    return (
        <div className='Characters'>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
            <div className="Favorites">
                {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                    {favorite.name}
                    </li>
                ))}
            </div>
            <div className="Cards">
                {filteredUsers.map(character => (
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
        </div>
    );
}

export default Characters;
