import React from 'react';
import './App.css';
import Squares from './components/Squares';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Squares></Squares>
        <Data></Data>
      </div>
    </div>
  );
}

export default App;
