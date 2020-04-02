import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import NumberFormat from 'react-number-format';
import { Avatar } from '@material-ui/core';

function Data({ squaresData, index }) {
    const { value } = useSpring({
        value: squaresData[index].number,
        config: config.slow,
    });

    const AnimatedNumberFormat = animated(NumberFormat);

    return (
        <div className="data">
            <div className="elements">
                <Avatar alt={squaresData[index].subtitle} src={squaresData[index].avatar}></Avatar>
                <AnimatedNumberFormat value={value.interpolate(x => x.toFixed(0))} displayType="text" thousandSeparator={true} prefix={'$'}></AnimatedNumberFormat>
                <h2>{squaresData[index].title}</h2>
                <h3>{squaresData[index].subtitle}</h3>
            </div>
        </div>
    );
}

export default Data;