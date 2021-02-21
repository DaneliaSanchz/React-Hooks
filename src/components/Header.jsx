import { useState, useContext } from 'react';
import ThemeContext, {themes} from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(ThemeContext);
    
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1 style={{ color: "red" }}>React Hooks</h1>  
            <button 
            type="button" 
            onClick={handleClick}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Header;
