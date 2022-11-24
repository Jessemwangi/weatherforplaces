import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <h1>{props.location}</h1>
            <div>
                <h3>{props.date}</h3>
                <span>{props.currentTemp}</span>
            <span>{props.tempmax}</span>
            <span>{props.tempmin}</span>
            <span>{props.uvindex}</span>
            <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Weather;