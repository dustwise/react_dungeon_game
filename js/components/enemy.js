import React from 'react';

export default function(props){
  return (
    <div>
      <h3>{props.enemyStats.name}</h3>
      <p>HP: {props.enemyStats.health}</p>
      <button>Attack!</button>
    </div>
  );
}