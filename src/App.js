import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';
import Data from './components/Data';

function App() {
  const squaresData = [
    {
      title: 'Median Net Worth:',
      subtitle: 'Millenial Households',
      avatar: null,
      number: 8850,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Pete Buttigieg',
      avatar: 'someurl',
      number: 100000,
      color: '#007FAC',
    },
    {
      title: 'Median Net Worth:',
      subtitle: 'Members of Congress',
      avatar: null,
      number: 460000,
      color: '#07415E',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Bernie Sanders',
      avatar: null,
      number: 2000000,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Amy Klobuchar',
      avatar: null,
      number: 2500000,
      color: '#007FAC',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Joe Biden',
      avatar: null,
      number: 9000000,
      color: '#07415E',
    },
  ]
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'back' && index !== 0) {
      setIndex(index - 1);
      return;
    } else if (direction === 'forward' && index !== squaresData.length - 1) {
      setIndex(index + 1);
      return;
    }
  }

  return (
    <div className="App">
      <div className="grid-container">
        <div className="squares">
          {
            squaresData
              .map((square, i) => {
                return <Square squareData={squaresData} square={square} selectedSquare={index} mapIndex={i}></Square>
              })
          }
        </div>
        <Data squaresData={squaresData} index={index}></Data>
      </div>
      <input type="button" onClick={() => handleClick('back')} value="Back" />
      <input type="button" onClick={() => handleClick('forward')} value="Forward" />
    </div>
  );
}

export default App;
