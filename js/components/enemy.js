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
    console.log(this.state);
    this.enemyTakeDamage = this.enemyTakeDamage.bind(this);
  }

  enemyTakeDamage(){
    this.setState({health: this.state.health -= this.props.heroDamage});
    this.enemyCheckHealth();
  }

  enemyCheckHealth(){
    if(this.state.health <= 0){
      console.log("IM DEAD");
    }
  }

  render(){
    return (
        <div className="enemy">
            <h2>{this.state.name}</h2>
            <h3>Health: {this.state.health}</h3>
            <p>DMG: {this.state.damage}</p>
            <button onClick={this.enemyTakeDamage}>Attack!</button>
        </div>
    );
  }
}
