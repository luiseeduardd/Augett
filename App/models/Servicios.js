const mongoose = require('mongoose');
const schema = mongoose.Schema

const ServicioSchema = new schema({
  socialmedia: Boolean,
  accounting: Boolean,
  branding: Boolean,
  advising: Boolean,
  web: Boolean,
  socialsecurity: Boolean,


});

let servicios = mongoose.model('servicios', UsuarioSchema);

module.exports = servicios;