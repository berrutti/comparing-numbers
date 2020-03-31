import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import NumberFormat from 'react-number-format';

function Data({ squaresData, index }) {
    const { value } = useSpring({
        value: squaresData[index].number,
        config: config.slow,
    },);

    const AnimatedNumberFormat = animated(NumberFormat);

    return (
        <div className="data">
            <div className="elements">
                <AnimatedNumberFormat value={value.interpolate(x => x.toFixed(0))} displayType="text" thousandSeparator={true} prefix={'$'}></AnimatedNumberFormat>
                <h2>{squaresData[index].title}</h2>
                <h3>{squaresData[index].subtitle}</h3>
                <div className="image-wrapper">
                    {squaresData[index].avatar && <img className='data-image' src={squaresData[index].avatar} title={squaresData[index].title} alt={squaresData[index].title}></img>}
                </div>
            </div>
        </div>
    );
}

export default Data;