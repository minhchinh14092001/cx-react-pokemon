import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Pokedex from "./components/Pokedex";
import PokemonIndex from "./components/PokemonIndex"

class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <Route exact path="/pokemons">
                <Pokedex />
              </Route>
              <Route exact path="/pokemons/:id" render={(props) => <PokemonIndex {...props} />}
              />
            </div>
          </Router>
        )
    }
}

export default App;
