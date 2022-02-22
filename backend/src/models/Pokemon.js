const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
  nombre: String,
  tipo: String,
  especie: String,
  habilidad_esp: String,
  peso: Number,
  altura: Number
})

module.exports = model('Pokemon', pokemonSchema);