import React, { Component } from 'react';

import PokemonCard from "./PokemonCard";

import '../styles/pokedex.scss'
import logo from '../images/logo-pokedex.png'

export default class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemons: [] }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:4242/pokemons')
        const pokemons = await response.json()

        this.setState({ pokemons })
    }

    render() {
        return (
          <div className='pokedex-container'>
          <img className='pokedex-logo' src={logo} alt='logo' />
            <div className='pokedex'>
              <div className='pokemon-card-container'>
                {this.state.pokemons.map((pokemon) => (
                    <PokemonCard nom={pokemon.nom}
                    ndex={pokemon.ndex} image={pokemon.image} />
                ))}
                </div>
            </div>
          </div>
        )
    }
}
