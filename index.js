const express = require("express");
const app = express();
const handlebars = require ('express-handlebars')
const { getMaxListeners, mainModule } = require('process')
const Sequelize = require ('sequelize')




// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  // Conexão com o banco de dados MySql
const sequelize = new Sequelize('test', 'root', 'mesa.123', {
    host: "localhost",
    dialect: 'mysql'
})
// Rotas

  app.get('/cad', function (req, res){
    res.render('formulario')
  })

  app.post('/add', function (req, res) {
    res.send('Formulario Recebido')
      })

app.listen(8081, function() {
  console.log("Hey, Welcome to my World, Port: 8081");
});
