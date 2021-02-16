import {useState} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="App" 
      style={{
        background: darkMode ? '#0b1935' : '#FFF',
        color: darkMode ? '#FFF' : '#000'
      }}>
      <Header />
      <h1>Hola Mundo</h1>
      <button 
        type="button" 
        onClick={handleClick}
      >
      {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      <Characters />
    </div>
  );
}

export default App;
