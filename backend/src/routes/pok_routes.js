const { Router } = require('express');
const router = Router();

const { getPokemones, createPokemon, getPokemon, deletePokemon } = require('../controllers/pokemon.controller')

router.route('/')
  .get(getPokemones)
  .post(createPokemon)

router.route('/:id')
  .get(getPokemon)
  .delete(deletePokemon)


module.exports = router;