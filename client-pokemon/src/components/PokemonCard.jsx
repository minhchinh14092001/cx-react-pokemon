import React, { Component } from 'react'

class PokemonCard extends Component {
    render() {
        return (
            <div className='pokemon-card'>
              <img className='pokemon-card-image' src={this.props.image} />
              <div className='pokecard-paragraphs'>
                <p className='pokemon-index'> #{this.props.ndex} </p>
                <p className='pokemon-name'> {this.props.nom} </p>
              </div>
            </div>
        )
    }
}

export default PokemonCard
