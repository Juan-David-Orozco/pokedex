import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

function App() {
  return (
    <Router>
      <div className='container-fluid my-3'>
        <div className="row">
          <div className='col-md-8'>
            <Route path="/" component={PokemonList} />
          </div>
          <div className='col-md-4'>
            <Route path="/detalle/:id" component={PokemonDetail} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
