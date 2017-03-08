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
    this.removeSelf = this.removeSelf.bind(this);
  }

  removeSelf(id){
    // console.log(this.state.currentEnemies);
    // this.state.currentEnemies.forEach(enemy => {
    //   if(enemy.id === id){
    //     console.log("I found the " + enemy.name + " you were looking for! It's " + enemy.id + " number!")
    //   }
    // });
    console.log(this);
  }

  generateEnemies(num) {
    const newEnemies = [];
    for (let i=1; i <= num; i++) {
      let enemyInfo = this.enemies[Math.floor(Math.random()*this.enemies.length)];
      enemyInfo.id = i;
      let enemy = <Enemy enemyInfo={enemyInfo} heroDamage={this.props.heroDamage} removeSelf={this.removeSelf} key = {i}/>;
      newEnemies.push(enemy);
    }
    return newEnemies;
  }

  render(){
    return <div>{this.state.currentEnemies}</div>;
  }
}
