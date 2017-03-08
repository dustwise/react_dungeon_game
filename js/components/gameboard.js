import React from 'react';
import Floor from './floor';
import Hero from './hero';

export default class Gameboard extends React.Component{
  constructor(){
    super();

    this.state = {
      floor: 1,
      hero : {
        health: 100,
        damage: 20,
        potions: 3
      }
    };
    this.heroUsePotion = this.heroUsePotion.bind(this);
  }

  heroUsePotion(){
    if(this.state.hero.potions === 0 || this.state.hero.health === 100){
      console.log("You dont have any potions or don't need one!");
      return;
    }
    const newHeroStats = {
      health: this.state.hero.health += 20,
      damage: this.state.hero.damage,
      potions: this.state.hero.potions -= 1
    };

    if(newHeroStats.health > 100){
      newHeroStats.health = 100;
    }

    this.setState({
      hero: newHeroStats
    });
  }

  render(){
    return (
      <div>
        <h1>Woodby the Hero</h1> 
        <div className='layout'>
          <Hero health={this.state.hero.health} damage={this.state.hero.damage} potions={this.state.hero.potions} heroUsePotion={this.heroUsePotion}/>
        </div>
      </div>
    );
  }
}
