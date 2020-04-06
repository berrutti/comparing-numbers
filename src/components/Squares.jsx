
import React, { useLayoutEffect, useRef, useState } from 'react';
import Square from './Square';
import useWindowSize from '../hooks/WindowSize';

function Squares({ squaresData, index }) {
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

    return (
        <div className='squares-area' ref={squareRef}>
            <div className='squares-container' style={{ height: maxSquareSize }}>
                {
                    squaresData
                        .map((square, i, array) => {
                            return <Square
                                key={i}
                                maxSquareSize={maxSquareSize}
                                squaresData={array}
                                square={square}
                                selectedSquare={index}
                                mapIndex={i}>
                            </Square>
                        })
                }
            </div>
        </div>);
}

export default Squares;