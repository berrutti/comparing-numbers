import React from 'react';

function Data({ squaresData, index }) {
    return (
        <div className="data">
            <div className="elements">
                <h1>{squaresData[index].number}</h1>
                <h2>{squaresData[index].title}</h2>
                <h3>{squaresData[index].subtitle}</h3>
            </div>
        </div>
    );
}

export default Data;