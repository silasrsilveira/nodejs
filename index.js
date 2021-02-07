const express = require("express");
const app = express();


//Mensagem Inicial
app.get("/", function (req, res){
  res.sendFile(__dirname + "/html/index.html")
});

//Nova rota - Sobre
app.get("/sobre", function (req, res){
  res.sendFile(__dirname + "/html/sobre.html")
});

//Nova rota - Blog
app.get("/blog",function (req, res) {
  res.send("Welcome to my Blog!")
});

//Rota Olá
app.get('/ola/:cargo/:nome/:cor', function (req, res){
  res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2> Seu cargo: "+req.params.cargo+"<h/2>"+"<h3> Sua cor favorita:"+req.params.cor+"</h3>")

});


//Localhost:8180
app.listen(8081, function() {
  console.log("Hey, Welcome to my World, Port: 8081");
});
