const pokCtrl = {};

const Pokemon = require('../models/Pokemon')

pokCtrl.getPokemones = async (req, res) => {
  try{
    const pokemones = await Pokemon.find()
    res.json(pokemones)
  }
  catch (err) {
    res.status(400).json({error: err});
  }
}

pokCtrl.createPokemon = async (req,res) => {
  try {
    const { nombre, tipo, especie, habilidad_esp, peso, altura} = req.body
    const newPokemon = new Pokemon({
      nombre, tipo, especie, habilidad_esp, peso, altura
    })
    await newPokemon.save();
    res.json('Pokemon creado');
  }
  catch (err) {
    res.json(err.errmsg);
  }
}

pokCtrl.getPokemon = async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  res.json(pokemon);
}

pokCtrl.deletePokemon = async (req, res) => {
  await Pokemon.findByIdAndDelete(req.params.id)
  res.json('Pokemon eliminado');
}

module.exports = pokCtrl;
