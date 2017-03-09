import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();
    this.state = {
      currentFloor: 11,
      heroStats: {
        maxHealth: 100,
        health: 100,
        armor: 5,
        potions: 3
      },
      floorStats : {
        enemies : []
      }
    }

    this.enemyTemplates = [
      {
        name: 'Goblin',
        health: 50,
        baseArmor: 2,
        attackDamage: 5,
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

    this.enemyActions = {
      takeDamage : (id) => {
        const newState = Object.assign({}, this.state);
        const enemyArray = newState.floorStats.enemies;

        enemyArray.forEach((enemy, index) => {
          if(enemy.id === id){
            enemyArray[index].health -= 20;
            if(enemyArray[index].health <= 0){
              enemyArray.splice(index, 1);
            }
          }
        });
        
        this.setState(newState);
      },
      attack : function(id, dmg){
        const newState = Object.assign({}, this.state);
        newState.heroStats.health -= dmg;
        if(newState.heroStats.health <= 0){
          console.log("You dies!");
        }
        this.setState(newState);
        console.log("You were attacked by unit " + id + " for " + dmg + " damage!");
      } 
    }

    this.enemyActions.attack = this.enemyActions.attack.bind(this);
  }

  generateEnemies(numToGen){
    const generatedEnemies = [];
    for(let i = 1; i <= numToGen; i++){
      let newEnemy = {...this.enemyTemplates[Math.floor(Math.random() * this.enemyTemplates.length)]};
      newEnemy.id = i;
      generatedEnemies.push(newEnemy);
    }
    return generatedEnemies;
  }

  generateFloor(currentFloor){
    let numOfEnemiesToGenerate;
    
    if(currentFloor <= 4){
      numOfEnemiesToGenerate = this.randMinMaxNum(1, 2);
    }else if(currentFloor <= 9){
      numOfEnemiesToGenerate = this.randMinMaxNum(2, 4);
    }else if(currentFloor === 10){
      numOfEnemiesToGenerate = 5;
    }else{
      numOfEnemiesToGenerate = 10;
    }
    this.setState({
      floorStats: {enemies: this.generateEnemies(numOfEnemiesToGenerate)}
    });
  }

  randMinMaxNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  componentDidMount(){
    this.generateFloor(this.state.currentFloor); 
  }
 
  render(){
    return (
      <div>
        <h1>Woodby's Adventure!</h1>
        <Hero heroStats={this.state.heroStats}/>
        <Floor floorStats={this.state.floorStats} enemyActions={this.enemyActions}/>
      </div>
    );
  }
}