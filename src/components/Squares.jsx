
import React, { useLayoutEffect, useRef, useState } from 'react';
import Square from './Square';
import useWindowSize from '../hooks/WindowSize';
import { byNumbers } from '../utils/helperFunctions';

function Squares({ data, index }) {
  const [maxSquareSize, setMaxSquareSize] = useState(0)
  const squareRef = useRef();
  const windowSize = useWindowSize();

  useLayoutEffect(() => {
    const squaresDiv = squareRef.current;
    if (squaresDiv) {
      const size = squaresDiv.offsetWidth > squaresDiv.offsetHeight
        ? squaresDiv.offsetHeight
        : squaresDiv.offsetWidth
      setMaxSquareSize(size);
    }
  }, [setMaxSquareSize, windowSize]);

  const sortedData = [...data].sort(byNumbers);

  return (
    <div className='squares-area' ref={squareRef}>
      <div className='squares-container' style={{ height: maxSquareSize }}>
        {
          sortedData.map((square, i, array) => {
            return (
              <Square
                key={i}
                maxSquareSize={maxSquareSize}
                data={array}
                square={square}
                selectedSquare={index}
                mapIndex={i}>
              </Square>
            );
          })
        }
      </div>
    </div>);
}

export default Squares;