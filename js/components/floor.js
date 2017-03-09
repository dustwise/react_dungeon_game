import React from 'react';
import Enemy from './enemy';

export default function(props){
  return (
    <div>
      <p>Floor #{props.currentFloor}</p>
      <div className="enemies">
        {props.floorStats.enemies.map(enemy => {
          <Enemy health={enemy.health} name={enemy.name}/>
        })}
      </div>
    </div>
  );
}