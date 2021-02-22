import React from 'react';

export const themes = {
    light: {
      background: "#eeeeee",
      color: "#000000"
    },
    dark: {
      background: "#0B1935", 
      color: "#ffffff"
    },
  };

const ThemeContext = React.createContext();

export default ThemeContext;
