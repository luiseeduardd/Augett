const mongoose = require('mongoose');
const schema = mongoose.Schema

const usuariosSchema = new schema ({
  name: String,
  email: String,
  Service: Array,
  company: String,
  bills: Boolean,
  docs: Boolean, 
});

let usuario = mongoose.model('usuario', usuariosSchema);

module.exports = usuario;

console.log (usuario);