const fs = require ('fs');
const express = require ('express');
const mongoose = require ('mongoose');
let usuario = require ('./models/Usuarios.js');
const app = express();

const connectMongoDB = () => mongoose.connect('mongodb+srv://LuisGomez:AugettDB21@augettapp.kllvd.mongodb.net/DB_Beta?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send('Hello World')
  })
app.get('/models/Usuarios.js', (err, res) => {   
})
app.listen(4000);

console.log(usuario);









