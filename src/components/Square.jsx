

import React from 'react';
import { useSpring, animated, config } from 'react-spring';


function Square({ squareData, square, selectedSquare, mapIndex }) {

    const percentage = square.number / squareData[selectedSquare].number;
    const size = 500 * percentage;

    const props = useSpring({
        maxWidth: '500px',
        maxHeight: '500px',
        zIndex: -mapIndex,
        backgroundColor: square.color,
        width: `${size}px`,
        height: `${size}px`,
        bottom: '0px',
        config: config.molasses
    });

    if (size < 1 || mapIndex > selectedSquare) {
        return null;
    }

    return (
        <animated.div className='square' style={props}></animated.div>
    );
}

export default Square;