import React, { Component } from 'react'

export default class PokemonCard extends Component {
    render() {
        return (
            <div className='pokemon-card'>
              <img className='pokemon-card-image' src={this.props.image} />
              <div className='pokecard-paragraphs'>
                <p className='pokemon-card-index'> #{this.props.ndex} </p>
                <p className='pokemon-card-name'> {this.props.nom} </p>
              </div>
            </div>
        )
    }
}
