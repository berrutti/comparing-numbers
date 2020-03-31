import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import useWindowSize from './hooks/WindowSize';
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
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg/220px-Pete_Buttigieg_by_Gage_Skidmore.jpg',
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
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/220px-Bernie_Sanders_in_March_2020.jpg',
      number: 2000000,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Amy Klobuchar',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg/220px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg',
      number: 2500000,
      color: '#007FAC',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Joe Biden',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Joe_Biden_February_2020_crop.jpg/220px-Joe_Biden_February_2020_crop.jpg',
      number: 9000000,
      color: '#07415E',
    },
  ]
  const [currentSquareIndex, setCurrentSquareIndex] = useState(0);
  const [maxSquareSize, setMaxSquareSize] = useState(0)
  const squareRef = useRef();

  useEffect(() => {
    const handleEvent = event => {
      if (event.key === 'ArrowLeft' && currentSquareIndex !== 0) {
        setCurrentSquareIndex(currentSquareIndex - 1);
      } else if (event.key === 'ArrowRight' && currentSquareIndex !== squaresData.length - 1) {
        setCurrentSquareIndex(currentSquareIndex + 1);
      }
    }

    window.addEventListener("keydown", handleEvent)
    return () => {
      window.removeEventListener("keydown", handleEvent)
    }
  }, [setCurrentSquareIndex, currentSquareIndex, squaresData])


  const windowSize = useWindowSize();

  useLayoutEffect(() => {
    const squaresDiv = squareRef.current;
    if (squaresDiv) {
      const size = squaresDiv.offsetWidth > squaresDiv.offsetHeight
        ? squaresDiv.offsetHeight
        : squaresDiv.offsetWidth
      setMaxSquareSize(size);
    }
  }, [setMaxSquareSize, windowSize])

  return (
    <div className="App">
      <div className="grid-container">
        <div className="squares" ref={squareRef}>
          {
            squaresData
              .map((square, i) => {
                return <Square
                  key={i}
                  maxSquareSize={maxSquareSize}
                  squareData={squaresData}
                  square={square}
                  selectedSquare={currentSquareIndex}
                  mapIndex={i}>
                </Square>
              })
          }
        </div>
        <Data squaresData={squaresData} index={currentSquareIndex}></Data>
      </div>
    </div>
  );
}

export default App;
