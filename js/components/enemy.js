import React from 'react';

export default class Enemy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.enemyInfo.name,
      health: this.props.enemyInfo.health,
      damage: this.props.enemyInfo.damage
    };
  }
  render(){
    return (
        <div className="enemy">
            <h2>{this.state.name}</h2>
            <h3>Health: {this.state.health}</h3>
            <p>DMG: {this.state.damage}</p>
            <button>Attack!</button>
        </div>
    );
  }
}
