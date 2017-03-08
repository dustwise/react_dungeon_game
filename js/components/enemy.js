import React from 'react';

export default class Enemy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.enemyInfo.name,
      health: this.props.enemyInfo.health,
      damage: this.props.enemyInfo.damage,
      enemyId: this.props.enemyInfo.id
    };
    //this.enemyTakeDamage = this.enemyTakeDamage.bind(this);
  }

  enemyTakeDamage(){
    const newHealth = this.state.health - this.props.heroDamage
    this.setState({health: newHealth});
    if(newHealth <= 0){

    }
    this.enemyCheckHealth();
  }


  render(){
    return (
        <div className="enemy">
            <h2>{this.state.name}</h2>
            <h3>Health: {this.state.health}</h3>
            <p>DMG: {this.state.damage}</p>
            <p>{this.state.enemyId}</p>
            <button onClick={() => this.enemyTakeDamage()}>Attack!</button>
        </div>
    );
  }
}
