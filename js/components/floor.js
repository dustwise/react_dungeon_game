import React from 'react';
import Enemy from './enemy';

export default class Floor extends React.Component {

  constructor(props){
    super(props);

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

    this.state = {
      currentEnemies: this.generateEnemies(this.props.numberOfEnemies)
    };
    console.log(this.state.currentEnemies[2]);
  }

  generateEnemies(num) {
    const newEnemies = [];
    for (let i=1; i <= num; i++) {
      let enemyInfo = this.enemies[Math.floor(Math.random()*this.enemies.length)];
      enemyInfo.id = i;
      let enemy = <Enemy enemyInfo={enemyInfo} heroDamage={this.props.heroDamage} key = {i}/>;
      newEnemies.push(enemy);
    }
    return newEnemies;
  }

  render(){
    return <div>{this.state.currentEnemies}</div>;
  }
}
