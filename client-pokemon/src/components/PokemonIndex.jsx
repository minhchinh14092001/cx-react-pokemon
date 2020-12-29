import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

import PokemonInfo from "./PokemonInfo";
import PokemonAttaques from "./PokemonAttaques"
import '../styles/pokemonindex.scss'

import logo from '../images/logo-pokedex.png'

export default class PokemonIndex extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemons: {} }
    }

    async componentDidMount() {
        let id;
        if(this.props.match !== undefined) {
          id = this.props.match.params.id
        }
        if(id !== undefined) {
          const response = await fetch(`http://localhost:4242/pokemons/${id}`)

          const pokemons = await response.json()

          this.setState({ pokemons })
        }
    }

    render() {
      let attaques;
      if(Object.keys(this.state.pokemons).length !== 0) {
          attaques = this.state.pokemons.attaques.map(attaque =>
            <PokemonAttaques attaque={attaque.nom}
            niveau={attaque.niveau}/>
          )
      }

        return (
          <div className='pokedex-index'>
            <div className='link-retour'>
              <Link to='/pokemons'>
              <p>Retour</p>
              </Link>
            </div>
            <div className='pokemon-index-first-container'>
              <PokemonInfo nom={this.state.pokemons.nom}
                ndex={this.state.pokemons.ndex}
                nomja={this.state.pokemons.nomja}
                image={this.state.pokemons.image}
                taille={this.state.pokemons.taille}
                poids={this.state.pokemons.poids}
                type1={this.state.pokemons.type1}
                type2={this.state.pokemons.type2}/>
                <div className='pokemon-attaques-container'>
                  <h3>Attaques</h3>
                  <div className='pokemon-attaques'>
                  {attaques}
                  </div>
                </div>
            </div>
          </div>
        )
    }
}
