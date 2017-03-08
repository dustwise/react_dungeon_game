import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();

    this.state = {
      currentFloor: 1,
      heroStats: {
        health: 65,
        armor: 5,
        attackDamage: 15,
        potions: 3
      }
    }

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
  }
  render(){
    return (
      <div>
        <h1>Woodby's Adventure!</h1>
        <Hero heroStats={this.state.heroStats} heroActions={this.heroActions}/>
        <Floor />
        <Enemy />
      </div>
    );
  }
}
