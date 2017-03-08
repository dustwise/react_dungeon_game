import React from 'react';

export default function Hero(props){
    return (
        <div>
            <h3>Health: {props.health}</h3>
            <p>DMG: {props.damage}</p>
            <button onClick={() => props.heroUsePotion()}> Potions: ({props.potions})</button>
        </div>
    );
}
