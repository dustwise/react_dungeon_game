import React from 'react';
import Floor from './floor';
import Hero from './hero';
import Enemy from './enemy';

export default class Gameboard extends React.Component{
  constructor(){
    super();

    this.state = {
      floor: 1,
      hero : {
        health: 65,
        damage: 20,
        potions: 3
      }
    };

    this.enemies = [
      {
        name: "Goblin",
        health: 50,
        damage: 15,
        attackSpeed: 2000
      },
      {
        name: "Troll",
        health: 100,
        damage: 25,
        attackSpeed: 4000
      },
      {
        name: "Ogre",
        health: 200,
        damage: 40,
        attackSpeed: 8000
      },
    ];

    this.heroUsePotion = this.heroUsePotion.bind(this);
  }

  generateEnemies(num) {
    const newEnemies = [];
    for (let i=1; i <= num; i++) {
      let enemyInfo = this.enemies[Math.floor(Math.random()*this.enemies.length)];
      let enemy = <Enemy enemyInfo={enemyInfo} key = {i}/>;
      newEnemies.push(enemy);
    }
    return newEnemies;

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
          {this.generateEnemies(2)}
        </div>
      </div>
    );
  }
}
