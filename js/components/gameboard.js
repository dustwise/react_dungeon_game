import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();
    this.state = {
      floorStats : {
        enemies : []
      }
    }

    this.state.floorStats.enemies = this.generateEnemies(3);
  }

  generateEnemies(numToGen){
    const generatedEnemies = [];
    for(let i = 1; i <= numToGen; i++){
      generatedEnemies.push()
    }
  }
 
  render(){
    return (
      <div>
        <h1>Woodby's Adventure!</h1>
        <Hero />
        <Floor floorStats={this.state.floorStats}/>
      </div>
    );
  }
}
