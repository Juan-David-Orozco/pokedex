import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class PokemonList extends Component {

  state = {
    pokemones: []
  }

  async componentDidMount() {
    this.getPokemones();
  }

  getPokemones = async () => {
    const res = await axios.get('http://localhost:5000/api/pokedex')
    this.setState({
      pokemones: res.data
    });
  }

  render() {
    return (
      <Fragment>
        <h2>POKEDEX</h2>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Peso</th>
              <th>Altura</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.pokemones.map(pokemon => (
                <tr key={pokemon._id}>
                  <td>
                    <Link to={"/detalle/" + pokemon._id}>
                      {pokemon.nombre}
                    </Link>
                  </td>
                  <td>{pokemon.peso} Kg</td>
                  <td>{pokemon.altura} cm</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Fragment>
    )
  }
}
