import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import './App.css';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
