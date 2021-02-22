import {useState, useContext} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext, {themes} from './context/ThemeContext';
import './App.css';

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App" 
      // style={{
      //   background: theme ? '#0B1935' : '#FFF',
      //   color: theme ? '#FFF' : '#000'
      // }}
      style={{
        background: theme.background,
        color: theme.color
      }}
      >
      <Header />
      {/* <button 
        type="button" 
        onClick={handleClick}
        style={{
          color: darkMode ? '#FFF' : '#000'
        }}
      >
      {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button> */}
      <Characters />
    </div>
  );
}

export default App;
