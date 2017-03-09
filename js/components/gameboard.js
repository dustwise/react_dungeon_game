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

    this.enemyTemplates = [
      {
        name: 'Goblin',
        health: 50,
        baseArmor: 2,
        attackDamage: 10,
        attackSpeed: 2000
      },
      {
        name: 'Troll',
        health: 100,
        baseArmor: 5,
        attackDamage: 25,
        attackSpeed: 4000
      },
      {
        name: 'Ogre',
        health: 200,
        baseArmor: 10,
        attackDamage: 40,
        attackSpeed: 8000
      }
    ];
  }

  generateEnemies(numToGen){
    const generatedEnemies = [];
    for(let i = 1; i <= numToGen; i++){
      generatedEnemies.push(this.enemyTemplates[Math.floor(Math.random() * this.enemyTemplates.length)]);
    }
    return generatedEnemies;
  }

  generateFloor(currentFloor){

  }

  componentDidMount(){
    this.setState({
      floorStats: {enemies: this.generateEnemies(3)}
    });
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