import React from 'react';

const squaresData = [
    {
        title: 'Median Net Worth:',
        subtitle: 'Millenial Households',
        avatar: null,
        number: 8850,
        color: 'red',
    },
    {
        title: 'Net Worth:',
        subtitle: 'Millenial Households',
        avatar: 'someurl',
        number: 20000,
        color: 'blue',
    },
    {
        title: 'Median Net Worth:',
        subtitle: 'Members of Congress',
        avatar: null,
        number: 460000,
        color: 'green',
    },
    {
        title: 'Net Worth:',
        subtitle: 'Bernie Sanders',
        avatar: null,
        number: 2000000,
        color: 'black',
    },
]

const maxSize = 500;
const maxAmount = 2000000;

function Data() {
    return (
        <div className="data">
            {
                squaresData.map((square,i) => {

                    const percentage = square.number / maxAmount;
                    console.log(percentage);
                    const size = (maxSize * percentage).toString() + 'px';
                    console.log(size)
                    const squareStyle = {
                        opacity: 0.5,
                        backgroundColor: square.color,
                        width: size,
                        height: size,
                        bottom: '0px',
                    }
                    return <div className='square' key={i} style={squareStyle}></div>
                })
            }
        </div>
    );
}

export default Data;