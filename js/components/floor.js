import React from 'react';

export default function(){
  return (
    <div><p>Floor</p></div>
  );
}


    // this.state = {
    //   currentFloor: 1,
    //   heroStats : {
    //     health: 100,
    //     armor: 10,
    //     damage: 20,
    //     potions: 3
    //   },
    //   currentEnemies = []
    // };

    // this.enemyTemplates = [
    //   {
    //     name: 'Goblin',
    //     health: 50,
    //     baseArmor: 2,
    //     attackDamage: 10,
    //     attackSpeed: 2000
    //   },
    //   {
    //     name: 'Troll',
    //     health: 100,
    //     baseArmor: 5,
    //     attackDamage: 25,
    //     attackSpeed: 4000
    //   },
    //   {
    //     name: 'Ogre',
    //     health: 200,
    //     baseArmor: 10,
    //     attackDamage: 40,
    //     attackSpeed: 8000
    //   }
    // ];

    // this.heroActions = {
    //   drinkPotion: () => {
    //     const newHealthAmount = this.state.heroStats.health + 20;
    //     if(state.heroStats.potions === 0){
    //       console.log("You don't have any potions left!")
    //       return;
    //     }
    //     if(newHealthAmount > 100){
    //       newHealthAmount = 100;
    //     }
    //     this.setState({heroStats: newHealthAmount});
    //   }
    // }