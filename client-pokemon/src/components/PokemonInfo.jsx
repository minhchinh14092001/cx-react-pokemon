import React, { Component } from 'react'

export default class PokemonInfo extends Component {
    render() {
        return (
            <div className='pokemon-info'>
              <img className='pokemon-info-image' src={this.props.image} />

              <div className='pokemon-info-content'>

                <div className='pokemon-info-first-paragraph'>
                  <p className='pokemon-info-index'> #{this.props.ndex} </p>
                  <p className='pokemon-info-name'> <span className='pokemon-info-fr'>{this.props.nom}</span> <span className="trait">|</span> <span className='pokemon-info-nomja'>{this.props.nomja}</span> </p>
                </div>

                <div className='pokemon-info-second-paragraph'>
                  <div className='pokemon-info-type'>
                  <p>Type</p>
                    <span> {this.props.type1} </span>
                    <span> {this.props.type2} </span>
                  </div>

                  <div className='pokemon-info-poids'>
                    <p>Poids</p>
                    <span> {this.props.poids} kg </span>
                  </div>

                  <div className='pokemon-info-taille'>
                    <p>Taille</p>
                    <span> {this.props.taille} m </span>
                  </div>

                </div>


              </div>

            </div>
        )
    }
}
