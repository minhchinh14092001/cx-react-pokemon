import React, { Component } from 'react'

export default class PokemonAttaques extends Component {
  render() {
    return (
      <div className='pokemon-attaques-content'>
        <p> {this.props.attaque} </p>
        <p> {this.props.niveau} </p>
      </div>
    )
  }
}
