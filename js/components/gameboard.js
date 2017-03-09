import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();

    this.state = {
      currentFloorNum: 1,
      heroStats: {
        health: 65,
        armor: 5,
        attackDamage: 15,
        potions: 3
      },
      floorStats:{
         enemies: []
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

    this.heroActions = {
      drinkPotion: () => {
        let newHealth = this.state.heroStats.health + 20;
        const newStats = this.state.heroStats;

        if(this.state.heroStats.potions <= 0 ){
          console.log("You don't have enough potions!");
          return;
        }

        if(this.state.heroStats.health === 100){
          console.log("You're at full health, dummy!");
          return;
        }

        if(newHealth > 100){
          newHealth = 100;
        }

        newStats.health = newHealth;
        newStats.potions = newStats.potions -= 1;
        this.setState({heroStats: newStats});
      }
    }
    this.generateFloor();
  }

//determine how many enemies on the floor and generate them, returning the floor component
  generateFloor(){
    let floorNum = this.state.currentFloorNum;
    let numOfEnemiesToGenerate;
    
    if(floorNum <= 4){
      numOfEnemiesToGenerate = this.randMinMaxNum(1, 3);
    }else if(floorNum <= 9){
      numOfEnemiesToGenerate = this.randMinMaxNum(2, 4);
    }else if(floorNum === 10){
      numOfEnemiesToGenerate = 5;
    }else{
      numOfEnemiesToGenerate = 6;
    }
    // this.setState({floorStats: {
    //   enemies : this.generateEnemies(numOfEnemiesToGenerate)
    // }});
    //console.log(this.state);
  }

//random number between min and max
  randMinMaxNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
//populate an array of enemy templates. length determined by number passed in
  generateEnemies(numToGenerate){
    const generatedEnemies = [];
    for(let i = 1; i <= numToGenerate; i++){
      generatedEnemies.push(this.enemyTemplates[Math.floor(Math.random() * this.enemyTemplates.length)]);
    }
    console.log(generatedEnemies);
    return generatedEnemies;
  }

  render(){
    return (
      <div>
        <h1>Woodby's Adventure!</h1>
        <Hero heroStats={this.state.heroStats} heroActions={this.heroActions}/>
        <Floor currentFloor={this.state.currentFloorNum} floorStats={this.state.floorStats}/>
        <button>Next Floor(Dev)</button>
      </div>
    );
  }
}
