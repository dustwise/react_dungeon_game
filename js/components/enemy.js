import React from 'react';

export default function(props){
  return (
    <div className='enemy'>
      <h3>{props.enemyStats.name}</h3>
      <p>HP: {props.enemyStats.health}</p>
      <p>{props.enemyStats.id}</p>
      <button onClick={() => props.enemyActions.takeDamage(props.enemyStats.id)}>Attack!</button>
    </div>
  );
}