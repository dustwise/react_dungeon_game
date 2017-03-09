import React from 'react';

export default function(props){
  return (
    <div>
        <h3>Woodby the Hero</h3>
        <p>HP: {props.heroStats.health}</p>
        <button>Potion ({props.heroStats.potions})</button>
    </div>
  );
}