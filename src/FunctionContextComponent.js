import React from 'react';
import { useTheme, useThemeUpdateContext } from './ThemeContext';

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdateContext();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </div>
  );
};

export default FunctionContextComponent;
