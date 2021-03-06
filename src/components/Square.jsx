import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function Square({ maxSquareSize, dataLength, square, selectedSquare, mapIndex }) {
  const percentage = square.number / selectedSquare.number;
  let size = maxSquareSize * Math.sqrt(percentage);
  if (size > maxSquareSize) {
    size = maxSquareSize;
  }
  const props = useSpring({
    zIndex: dataLength - mapIndex,
    backgroundColor: square.color,
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    bottom: '0px',
    config: config.molasses,
    immediate: mapIndex > selectedSquare
  });

  if (size < .1) {
    return null;
  }

  return (
    <animated.div className='square' style={props}></animated.div>
  );
}

export default Square;