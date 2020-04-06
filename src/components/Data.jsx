import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import NumberFormat from 'react-number-format';
import { Avatar } from '@material-ui/core';

function Data({ squaresData, index }) {
    const element = squaresData[index];
    const { value } = useSpring({
        value: element.number,
        config: config.slow,
    });

    const AnimatedNumberFormat = animated(NumberFormat);

    return (
        <div className='data'>
            <div className='elements'>
                <Avatar alt={element.subtitle} src={element.avatar}></Avatar>
                <AnimatedNumberFormat value={value.interpolate(x => x.toFixed(0))} displayType='text' thousandSeparator={true} prefix={'$'}></AnimatedNumberFormat>
                <h1>
                    {element.title && <span className='element-title'>{element.title}</span>}
                    {element.subtitle && <span className='element-subtitle'>{element.subtitle}</span>}
                </h1>
            </div>
        </div>
    );
}

export default Data;