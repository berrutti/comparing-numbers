import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function Square({ maxSquareSize, squaresData, square, selectedSquare, mapIndex }) {
  const percentage = square.number / squaresData[selectedSquare].number;
  let size = Math.ceil(maxSquareSize * Math.sqrt(percentage));
  if (size > maxSquareSize) {
    size = maxSquareSize;
  }
  const props = useSpring({
    zIndex: squaresData.length - mapIndex,
    backgroundColor: square.color,
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    bottom: '0px',
    config: config.molasses,
    immediate: mapIndex > selectedSquare
  });

  if (size < 1) {
    return null;
  }

  return (
    <animated.div className='square' style={props}></animated.div>
  );
}

export default Square;