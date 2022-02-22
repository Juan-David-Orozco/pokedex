import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class PokemonDetails extends Component {

  state = {
    _id: ""
  }

  async componentDidMount() {
    //const res = await axios.get('http://localhost:5000/api/pokedex')
    //console.log(res.data)
    this.setState({
      _id: this.props.match.params.id
    })
    console.log(this.state._id)
  }


  async componentDidUpdate() {
    console.log(this.props.match.params.id)
    const res = await axios.get('http://localhost:5000/api/pokedex/' + this.props.match.params.id)
    console.log(res.data)
    //console.log(this.state._id)
  }




  render() {
    return (
      <Fragment>
        <div>Pokemon Detail</div>
        



      </Fragment>
    )
  }
}
