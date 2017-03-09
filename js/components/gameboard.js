import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();
    this.state = {
      currentFloor: 1,
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
    let numOfEnemiesToGenerate;
    
    if(currentFloor <= 4){
      numOfEnemiesToGenerate = this.randMinMaxNum(1, 3);
    }else if(currentFloor <= 9){
      numOfEnemiesToGenerate = this.randMinMaxNum(2, 4);
    }else if(currentFloor === 10){
      numOfEnemiesToGenerate = 5;
    }else{
      numOfEnemiesToGenerate = 6;
    }
    this.setState({
      floorStats: {enemies: this.generateEnemies(numOfEnemiesToGenerate)}
    });
  }

  componentDidMount(){
    generateFloor(this.state.currentFloor)   
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