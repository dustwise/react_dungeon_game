import React from 'react';

export default class Enemy extends React.Component{
  constructor(props){
    super(props);

    this.attackTimer = setInterval(() => this.props.enemyActions.attack(this.props.enemyStats.id, this.props.enemyStats.attackDamage), this.props.enemyStats.attackSpeed);
  }

  componentWillUnmount(){
    clearInterval(this.attackTimer);
  }

  render(){
    return (
      <div className='enemy'>
          <h3>{this.props.enemyStats.name}</h3>
          <p>HP: {this.props.enemyStats.health}</p>
          <p>{this.props.enemyStats.id}</p>
          <button onClick={() => this.props.enemyActions.takeDamage(this.props.enemyStats.id)}>Attack!</button>
      </div>
    );
  }
}